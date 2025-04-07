import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the images
jest.mock('../assets/logodark.png', () => 'dark-logo.png');
jest.mock('../assets/logoo.png', () => 'light-logo.png');

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('renders header with logo', () => {
    renderWithRouter(<Header />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'light-logo.png');
  });

  test('toggles dark mode', () => {
    renderWithRouter(<Header />);
    const darkModeButton = screen.getByTestId('dark-mode-button');
    
    // Initial state (light mode)
    expect(document.documentElement).not.toHaveClass('dark');
    
    // Toggle to dark mode
    fireEvent.click(darkModeButton);
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('darkMode')).toBe('true');
    
    // Toggle back to light mode
    fireEvent.click(darkModeButton);
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  test('toggles mobile menu', () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByTestId('menu-button');
    const navigation = screen.getByTestId('navigation');
    
    // Menu should be closed initially
    expect(navigation).toHaveClass('other:opacity-0');
    
    // Open menu
    fireEvent.click(menuButton);
    expect(navigation).toHaveClass('other:opacity-100');
    
    // Close menu
    fireEvent.click(menuButton);
    expect(navigation).toHaveClass('other:opacity-0');
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header />);
    
    // Open mobile menu
    fireEvent.click(screen.getByTestId('menu-button'));
    
    // Check for main navigation links
    expect(screen.getByText(/Practice Areas/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Team/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Newsroom/i)).toBeInTheDocument();
  });

  test('renders practice areas submenu', () => {
    renderWithRouter(<Header />);
    
    // Open mobile menu
    fireEvent.click(screen.getByTestId('menu-button'));
    
    // Click on Practice Areas
    fireEvent.click(screen.getByText(/Practice Areas/i));
    
    // Check for practice area links
    expect(screen.getByText(/DUI & DWI/i)).toBeInTheDocument();
    expect(screen.getByText(/Criminal Law/i)).toBeInTheDocument();
    expect(screen.getByText(/Expungements/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal Injury/i)).toBeInTheDocument();
    expect(screen.getByText(/Family Law/i)).toBeInTheDocument();
  });

  test('renders team members submenu', () => {
    renderWithRouter(<Header />);
    
    // Open mobile menu
    fireEvent.click(screen.getByTestId('menu-button'));
    
    // Click on Our Team
    fireEvent.click(screen.getByText(/Our Team/i));
    
    // Check for team member links
    expect(screen.getByText(/E. Seth Hendrick/i)).toBeInTheDocument();
    expect(screen.getByText(/Andrew M. Casey/i)).toBeInTheDocument();
    expect(screen.getByText(/Andrew Edward Hutter/i)).toBeInTheDocument();
    expect(screen.getByText(/Ryan Loewenstern/i)).toBeInTheDocument();
    expect(screen.getByText(/Erika Diaz/i)).toBeInTheDocument();
  });

  test('handles window resize', () => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    });
    
    renderWithRouter(<Header />);
    
    // Trigger resize event
    fireEvent.resize(window);
    
    // Check if mobile menu is hidden
    expect(screen.getByTestId('navigation')).toHaveClass('other:opacity-0');
  });
}); 