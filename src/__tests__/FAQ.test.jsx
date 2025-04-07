import React from 'react';

import { FAQ } from '../components/extras';
import { render, screen, fireEvent } from '@testing-library/react';

describe('FAQ Component', () => {
  const mockFaqs = [
    {
      question: 'What are your services?',
      answer: <div>We provide legal services in various areas.</div>
    },
    {
      question: 'How can I contact you?',
      answer: <div>You can reach us through our contact form.</div>
    }
  ];

  test('renders FAQ questions', () => {
    render(<FAQ faqs={mockFaqs} />);
    expect(screen.getByText('What are your services?')).toBeInTheDocument();
    expect(screen.getByText('How can I contact you?')).toBeInTheDocument();
  });

  test('does not render answers initially', () => {
    render(<FAQ faqs={mockFaqs} />);
    expect(screen.queryByText('We provide legal services in various areas.')).not.toBeInTheDocument();
    expect(screen.queryByText('You can reach us through our contact form.')).not.toBeInTheDocument();
  });

  test('shows answer when question is clicked', () => {
    render(<FAQ faqs={mockFaqs} />);
    
    // Click first question
    fireEvent.click(screen.getByText('What are your services?'));
    expect(screen.getByText('We provide legal services in various areas.')).toBeInTheDocument();
    
    // Click second question
    fireEvent.click(screen.getByText('How can I contact you?'));
    expect(screen.getByText('You can reach us through our contact form.')).toBeInTheDocument();
  });

  test('hides answer when question is clicked again', () => {
    render(<FAQ faqs={mockFaqs} />);
    
    // Click question to show answer
    fireEvent.click(screen.getByText('What are your services?'));
    expect(screen.getByText('We provide legal services in various areas.')).toBeInTheDocument();
    
    // Click question again to hide answer
    fireEvent.click(screen.getByText('What are your services?'));
    expect(screen.queryByText('We provide legal services in various areas.')).not.toBeInTheDocument();
  });

  test('handles empty faqs array', () => {
    render(<FAQ faqs={[]} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('applies custom hide class when provided', () => {
    render(<FAQ faqs={mockFaqs} hide="custom-hide" />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveClass('custom-hide');
    });
  });

  test('handles null or undefined faqs prop', () => {
    render(<FAQ faqs={null} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('handles faq with missing question or answer', () => {
    const invalidFaqs = [
      {
        question: 'Valid Question',
        answer: null
      },
      {
        question: null,
        answer: 'Valid Answer'
      }
    ];
    render(<FAQ faqs={invalidFaqs} />);
    expect(screen.queryByText('Valid Question')).not.toBeInTheDocument();
    expect(screen.queryByText('Valid Answer')).not.toBeInTheDocument();
  });
}); 