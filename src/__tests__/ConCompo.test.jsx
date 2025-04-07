import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ConCompo } from '../pages/index';
import toast from 'react-hot-toast';

// Mock the toast notifications
jest.mock('react-hot-toast', () => ({
  loading: jest.fn(),
  success: jest.fn(),
  error: jest.fn()
}));

// Mock the fetch function
global.fetch = jest.fn();

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('ConCompo Component', () => {
  const mockProps = {
    h1: 'Test Heading',
    title: 'Test Lawyer'
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders form with all required fields', () => {
    renderWithRouter(<ConCompo {...mockProps} />);
    
    // Check if all form fields are present
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/What services are you interested in/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Other: case information/i)).toBeInTheDocument();
  });

  test('handles form input changes', () => {
    renderWithRouter(<ConCompo {...mockProps} />);
    
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john@example.com');
  });

  test('shows loading toast and success message on successful submission', async () => {
    // Mock successful API response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' })
    });

    renderWithRouter(<ConCompo {...mockProps} />);
    
    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

    // Submit form
    fireEvent.click(screen.getByValue('Submit Form'));

    // Check if loading toast was shown
    expect(toast.loading).toHaveBeenCalledWith('Sending message...');

    // Wait for the API call to complete
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Message sent successfully!', expect.any(Object));
    });

    // Check if form was reset
    expect(screen.getByLabelText(/First Name/i).value).toBe('');
    expect(screen.getByLabelText(/Last Name/i).value).toBe('');
    expect(screen.getByLabelText(/Email/i).value).toBe('');
    expect(screen.getByLabelText(/Phone/i).value).toBe('');
    expect(screen.getByLabelText(/Message/i).value).toBe('');
  });

  test('shows error toast and keeps form data on failed submission', async () => {
    // Mock failed API response
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: 'Failed to send message' })
    });

    renderWithRouter(<ConCompo {...mockProps} />);
    
    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

    // Submit form
    fireEvent.click(screen.getByValue('Submit Form'));

    // Check if loading toast was shown
    expect(toast.loading).toHaveBeenCalledWith('Sending message...');

    // Wait for the API call to complete
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to send message', expect.any(Object));
    });

    // Check if form data was preserved
    expect(screen.getByLabelText(/First Name/i).value).toBe('John');
    expect(screen.getByLabelText(/Last Name/i).value).toBe('Doe');
    expect(screen.getByLabelText(/Email/i).value).toBe('john@example.com');
    expect(screen.getByLabelText(/Phone/i).value).toBe('1234567890');
    expect(screen.getByLabelText(/Message/i).value).toBe('Test message');
  });

  test('validates required fields', async () => {
    renderWithRouter(<ConCompo {...mockProps} />);
    
    // Try to submit empty form
    fireEvent.click(screen.getByValue('Submit Form'));

    // Check if required fields show validation messages
    expect(screen.getByLabelText(/First Name/i)).toBeInvalid();
    expect(screen.getByLabelText(/Last Name/i)).toBeInvalid();
    expect(screen.getByLabelText(/Email/i)).toBeInvalid();
    expect(screen.getByLabelText(/Phone/i)).toBeInvalid();
    expect(screen.getByLabelText(/Message/i)).toBeInvalid();

    // Verify that no API call was made
    expect(global.fetch).not.toHaveBeenCalled();
  });
}); 