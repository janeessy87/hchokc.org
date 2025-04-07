import React from 'react';
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import ProtectedRoute from '../routes/ProtectedRoute';

// Mock the environment variable
const mockValidToken = 'valid-token-123';
process.env.REACT_APP_ACCESS_TOKEN = mockValidToken;

const TestComponent = () => <div>Protected Content</div>;

describe('ProtectedRoute Component', () => {
  test('renders children when valid token is provided', () => {
    render(
      <MemoryRouter initialEntries={[`/?token=${mockValidToken}`]}>
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  test('redirects to unauthorized when no token is provided', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });

  test('redirects to unauthorized when invalid token is provided', () => {
    render(
      <MemoryRouter initialEntries={['/?token=invalid-token']}>
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });

  test('handles missing environment variable gracefully', () => {
    // Temporarily remove the environment variable
    const originalToken = process.env.REACT_APP_ACCESS_TOKEN;
    delete process.env.REACT_APP_ACCESS_TOKEN;

    render(
      <MemoryRouter initialEntries={[`/?token=${mockValidToken}`]}>
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();

    // Restore the environment variable
    process.env.REACT_APP_ACCESS_TOKEN = originalToken;
  });
}); 