import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../components/Footer';
import { render, screen } from '@testing-library/react';

// Mock the logo image
jest.mock('../assets/logoo.png', () => 'logo.png');

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  test('renders logo', () => {
    renderWithRouter(<Footer />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.png');
  });

  test('renders contact link', () => {
    renderWithRouter(<Footer />);
    const contactLink = screen.getByText('Contact Us');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact#contact');
  });

  test('renders address information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('428 Dean A McGee Ave')).toBeInTheDocument();
    expect(screen.getByText('Oklahoma City , OK 73102')).toBeInTheDocument();
  });

  test('renders directions link', () => {
    renderWithRouter(<Footer />);
    const directionsLink = screen.getByText('Get Directions');
    expect(directionsLink).toBeInTheDocument();
    expect(directionsLink).toHaveAttribute('href', 'https://www.google.com/maps?daddr=428+Dean+A+McGee+Ave++Oklahoma+City+OK+73102+US');
  });

  test('renders business hours', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Mon - Fri')).toBeInTheDocument();
    expect(screen.getByText('8:00 am - 7:00 pm')).toBeInTheDocument();
    expect(screen.getByText('Sat - Sun')).toBeInTheDocument();
    expect(screen.getByText('Phones will be answered')).toBeInTheDocument();
    expect(screen.getByText('Phones are answered 24/7')).toBeInTheDocument();
  });

  test('renders copyright information', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
  });

  test('renders powered by information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Powered by/)).toBeInTheDocument();
    expect(screen.getByText('High Five Media')).toBeInTheDocument();
  });

  test('applies correct styling classes', () => {
    renderWithRouter(<Footer />);
    
    // Check for dark mode classes
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('dark:bg-black', 'dark:text-white');
    
    // Check for logo styling
    const logo = screen.getByRole('img');
    expect(logo).toHaveClass('dark:invert');
    
    // Check for link styling
    const contactLink = screen.getByText('Contact Us');
    expect(contactLink).toHaveClass('dark:text-black', 'dark:bg-white');
  });

  test('renders responsive layout', () => {
    renderWithRouter(<Footer />);
    
    // Check for responsive container classes
    const footer = screen.getByRole('contentinfo');
    const firstChild = screen.getByTestId('footer-container');
    expect(firstChild).toHaveClass('other:flex-col');
    
    // Check for responsive logo container
    const logoContainer = screen.getByTestId('logo-container');
    expect(logoContainer).toHaveClass('other:justify-center', 'other:items-center', 'other:w-full');
  });
}); 