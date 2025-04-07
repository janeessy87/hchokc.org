import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Contact } from '../pages/Contact';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock the fetch function
global.fetch = jest.fn();

// Mock the image
jest.mock('../assets/Images/meetLegal.jpg', () => 'meet-legal.jpg');

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Contact Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders contact form', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('form submission with valid data', async () => {
    // Mock successful API response
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ success: true, message: 'Message sent!' }),
      ok: true,
    });

    renderWithRouter(<Contact />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });
    fireEvent.change(screen.getByLabelText(/What services are you interested in?/i), { target: { value: 'Legal Consultation' } });
    fireEvent.change(screen.getByLabelText(/Other: case information/i), { target: { value: 'Additional info' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit Form/i));

    // Wait for the API call to complete
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/.netlify/functions/sendMail',
        expect.objectContaining({
          method: 'POST',
          body: expect.any(String),
        })
      );
    });
  });

  test('form validation', async () => {
    renderWithRouter(<Contact />);

    // Try to submit without filling required fields
    fireEvent.click(screen.getByText(/Submit Form/i));

    // Check that required fields are marked as invalid
    expect(screen.getByLabelText(/Email/i)).toBeInvalid();
    expect(screen.getByLabelText(/Phone/i)).toBeInvalid();
    expect(screen.getByLabelText(/Message/i)).toBeInvalid();
  });

  test('renders contact information', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(/428 Dean A McGee Ave/i)).toBeInTheDocument();
    expect(screen.getByText(/Oklahoma City, OK 73102/i)).toBeInTheDocument();
    expect(screen.getByText(/Monday to Friday: 8:00 am - 7:00 pm/i)).toBeInTheDocument();
    expect(screen.getByText(/Phones are answered 24\/7/i)).toBeInTheDocument();
  });

  test('handles API error gracefully', async () => {
    // Mock failed API response
    global.fetch.mockRejectedValueOnce(new Error('API Error'));

    renderWithRouter(<Contact />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit Form/i));

    // Wait for the API call to complete
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
}); 