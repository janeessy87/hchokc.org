import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ConCard } from '../components/ConCard';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('ConCard Component', () => {
  const defaultProps = {
    className: 'test-class',
    title: 'Test Title',
    b1: 'bg-black text-white',
    b2: 'border-black text-black'
  };

  test('renders with correct className', () => {
    renderWithRouter(<ConCard {...defaultProps} />);
    const container = screen.getByTestId('con-card-container');
    expect(container).toHaveClass('test-class');
  });

  test('does not render Contact Us link when title is Contact', () => {
    renderWithRouter(<ConCard {...defaultProps} title="Contact" />);
    expect(screen.queryByText('Contact Us')).not.toBeInTheDocument();
  });

  test('renders Contact Us link with correct styling when title is not Contact', () => {
    renderWithRouter(<ConCard {...defaultProps} />);
    const link = screen.getByText('Contact Us');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(defaultProps.b2);
    expect(link).toHaveAttribute('href', '/contact#contact');
  });

  test('applies custom button styles', () => {
    const customProps = {
      ...defaultProps,
      b1: 'custom-b1-class',
      b2: 'custom-b2-class'
    };
    renderWithRouter(<ConCard {...customProps} />);
    const link = screen.getByText('Contact Us');
    expect(link).toHaveClass('custom-b2-class');
  });

  test('handles missing optional props', () => {
    renderWithRouter(<ConCard title="Test" />);
    const container = screen.getByTestId('con-card-container');
    expect(container).toBeInTheDocument();
  });

  test('applies responsive classes', () => {
    renderWithRouter(<ConCard {...defaultProps} />);
    const container = screen.getByTestId('con-card-container');
    expect(container).toHaveClass('lgMobile:flex-col');
    expect(container).toHaveClass('mdMobile:flex-col');
    expect(container).toHaveClass('sMobile:flex-col');
  });
}); 