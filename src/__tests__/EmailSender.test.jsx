import React from 'react';

import { EmailSender } from '../pages/EmailSender';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock the fetch function
global.fetch = jest.fn();

describe('EmailSender Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders email sender form', () => {
    render(<EmailSender />);
    expect(screen.getByText(/Email Sender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/From Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/From Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Recipient Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email_subject/i)).toBeInTheDocument();
  });

  test('form submission with valid data', async () => {
    // Mock successful API response
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ message: 'Email sent successfully' }),
      ok: true,
    });

    render(<EmailSender />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/From Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/From Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Recipient Email/i), { target: { value: 'recipient@example.com' } });
    fireEvent.change(screen.getByLabelText(/Email_subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText(/Reciepient Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Recepient street address/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/City, State and ZipCode/i), { target: { value: 'Oklahoma City, OK 73102' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-03-29' } });
    fireEvent.change(screen.getByLabelText(/Letter Heading/i), { target: { value: 'Dear Jane' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: '<p>Test message</p>' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit Form/i));

    // Wait for the API call to complete
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/.netlify/functions/sendNotification',
        expect.objectContaining({
          method: 'POST',
          body: expect.any(String),
        })
      );
    });
  });

  test('form validation', async () => {
    render(<EmailSender />);

    // Try to submit without filling required fields
    fireEvent.click(screen.getByText(/Submit Form/i));

    // Check that required fields are marked as invalid
    expect(screen.getByLabelText(/From Name/i)).toBeInvalid();
    expect(screen.getByLabelText(/From Email/i)).toBeInvalid();
    expect(screen.getByLabelText(/Recipient Email/i)).toBeInvalid();
  });

  test('handles API error gracefully', async () => {
    // Mock failed API response
    global.fetch.mockRejectedValueOnce(new Error('API Error'));

    render(<EmailSender />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/From Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/From Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Recipient Email/i), { target: { value: 'recipient@example.com' } });
    fireEvent.change(screen.getByLabelText(/Email_subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText(/Reciepient Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Recepient street address/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/City, State and ZipCode/i), { target: { value: 'Oklahoma City, OK 73102' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-03-29' } });
    fireEvent.change(screen.getByLabelText(/Letter Heading/i), { target: { value: 'Dear Jane' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: '<p>Test message</p>' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit Form/i));

    // Wait for the API call to complete
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
}); 