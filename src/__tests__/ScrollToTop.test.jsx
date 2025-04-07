import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import ScrollToTop from '../components/extras/ScrollToTop';
import { render } from '@testing-library/react';

// Mock useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true
});

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
    useLocation.mockClear();
  });

  test('scrolls to top when pathname changes', () => {
    useLocation.mockReturnValueOnce({ pathname: '/initial' });
    const { rerender } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    mockScrollTo.mockClear();

    useLocation.mockReturnValueOnce({ pathname: '/new-path' });
    rerender(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('does not scroll when pathname remains the same', () => {
    useLocation.mockReturnValue({ pathname: '/same-path' });
    const { rerender } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(mockScrollTo).toHaveBeenCalledTimes(1);
    mockScrollTo.mockClear();

    rerender(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  test('handles hash in pathname', () => {
    useLocation.mockReturnValueOnce({ pathname: '/path#section' });
    render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
  });
}); 