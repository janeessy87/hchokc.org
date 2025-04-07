import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { OurTeam } from '../pages/teams/OurTeam';

const mockTeamsLawyer = [
  {
    img: 'seth.jpg',
    lawyer: 'E. Seth Hendrick',
    link: 'e-seth-hendrick'
  },
  {
    img: 'andrew.jpg',
    lawyer: 'Andrew M. Casey',
    link: 'andrew-m-casey'
  },
  {
    img: 'hutter.jpg',
    lawyer: 'Andrew Edward Hutter',
    link: 'andrew-edward-hutter'
  },
  {
    img: 'ryan.jpg',
    lawyer: 'Ryan Loewenstern',
    link: 'ryan-loewenstern'
  },
  {
    img: 'erika.jpg',
    lawyer: 'Erika Diaz',
    link: 'erika-diaz'
  }
];

// Mock the team images and RTS component
jest.mock('../../assets/Images/team', () => ({
  teamsLawyer: mockTeamsLawyer
}));

// Mock RTS component
jest.mock('../../components/extras', () => ({
  RTS: () => <div data-testid="rts-component">RTS Component</div>
}));

// Mock TeamTop component
jest.mock('../pages/teams', () => ({
  ...jest.requireActual('../pages/teams'),
  TeamTop: ({ h1 }) => (
    <div data-testid="team-top">
      <h1>{h1}</h1>
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

describe('OurTeam Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders team title and description', () => {
    renderWithRouter(<OurTeam />);
    expect(screen.getByTestId('team-top')).toBeInTheDocument();
    expect(screen.getByText(/Dedicated Legal Professionals at Your Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the attorneys and staff at Hendrick, Casey, & Hutter/i)).toBeInTheDocument();
  });

  test('renders all team members', () => {
    renderWithRouter(<OurTeam />);
    expect(screen.getByText(/E. Seth Hendrick/)).toBeInTheDocument();
    expect(screen.getByText(/Andrew M. Casey/)).toBeInTheDocument();
    expect(screen.getByText(/Andrew Edward Hutter/)).toBeInTheDocument();
    expect(screen.getByText(/Ryan Loewenstern/)).toBeInTheDocument();
    expect(screen.getByText(/Erika Diaz/)).toBeInTheDocument();
  });

  test('renders team member images', () => {
    renderWithRouter(<OurTeam />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5);
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', mockTeamsLawyer[index].img);
    });
  });

  test('renders team member links with correct paths', () => {
    renderWithRouter(<OurTeam />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/e-seth-hendrick');
    expect(links[1]).toHaveAttribute('href', '/andrew-m-casey');
    expect(links[2]).toHaveAttribute('href', '/andrew-edward-hutter');
    expect(links[3]).toHaveAttribute('href', '/ryan-loewenstern');
    expect(links[4]).toHaveAttribute('href', '/erika-diaz');
  });

  test('applies hover effects to team member links', () => {
    renderWithRouter(<OurTeam />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('hover:scale-95');
    });
  });

  test('renders RTS component', () => {
    renderWithRouter(<OurTeam />);
    expect(screen.getByTestId('rts-component')).toBeInTheDocument();
  });
}); 