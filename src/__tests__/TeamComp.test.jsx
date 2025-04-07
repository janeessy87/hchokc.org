import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TeamComp } from '../pages/teams';

// Mock the components
jest.mock('../../components/extras', () => ({
  FAQ: ({ faqs }) => (
    <div data-testid="faq-component">
      {faqs.map((faq, index) => (
        <div key={index}>
          <div>{faq.question}</div>
          <div>{faq.answer}</div>
        </div>
      ))}
    </div>
  ),
  RTS: () => <div data-testid="rts-component">RTS Component</div>
}));

// Mock ConCard component
jest.mock('../../components/ConCard', () => ({
  ConCard: ({ className }) => (
    <div data-testid="con-card" className={className}>
      Mock ConCard
    </div>
  )
}));

// Mock TeamTop component
jest.mock('../pages/teams', () => ({
  ...jest.requireActual('../pages/teams'),
  TeamTop: ({ h1, title }) => (
    <div data-testid="team-top">
      <h1>{h1}</h1>
      <p>{title}</p>
    </div>
  )
}));

// Mock ConCompo component
jest.mock('..', () => ({
  ConCompo: ({ title, h1 }) => (
    <div data-testid="con-compo-container">
      <h1>{h1}</h1>
      <p>{title}</p>
    </div>
  )
}));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('TeamComp Component', () => {
  const mockProps = {
    title: 'Test Lawyer',
    span: 'Test description',
    faqs: [
      {
        question: 'Contact Info',
        answer: <div>test@example.com</div>
      },
      {
        question: 'Education',
        answer: <div>Test University</div>
      }
    ],
    imge: 'seth.jpg',
    h2: 'Meet Test',
    span2: 'Additional description',
    className: 'test-class'
  };

  test('renders team member information', () => {
    renderWithRouter(<TeamComp {...mockProps} />);
    expect(screen.getByText('Test Lawyer')).toBeInTheDocument();
    expect(screen.getByText('Meet Test')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Additional description')).toBeInTheDocument();
  });

  test('renders team member image', () => {
    renderWithRouter(<TeamComp {...mockProps} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'seth.jpg');
  });

  test('renders FAQ section', () => {
    renderWithRouter(<TeamComp {...mockProps} />);
    expect(screen.getByTestId('faq-component')).toBeInTheDocument();
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  test('renders TeamTop component', () => {
    renderWithRouter(<TeamComp {...mockProps} />);
    expect(screen.getByTestId('team-top')).toBeInTheDocument();
  });

  test('renders ConCompo component', () => {
    renderWithRouter(<TeamComp {...mockProps} />);
    expect(screen.getByTestId('con-compo-container')).toBeInTheDocument();
  });

  test('renders RTS component', () => {
    renderWithRouter(<TeamComp {...mockProps} />);
    expect(screen.getByTestId('rts-component')).toBeInTheDocument();
  });
}); 