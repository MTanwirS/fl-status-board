import { render, screen, waitFor } from '@testing-library/react';
import FlightList from '../app/components/FlightList';
import fetch from 'jest-fetch-mock';
import { ReactNode} from 'react';



jest.mock('next/link', () => {
  return ({ children }:{children:ReactNode}) => children;
});

const mockApiData = [
  {
    id: 1,
    flightNumber: 'A1B97',
    airline: 'Airline 1',
    origin: 'Origin 1',
    destination: 'Destination 1',
    departureTime: '2025-02-07T00:02:22.835Z',
    status: 'On Time',
  },
  {
    id: 2,
    flightNumber: 'A2B9',
    airline: 'Airline 2',
    origin: 'Origin 2',
    destination: 'Destination 2',
    departureTime: '2025-02-07T00:19:02.835Z',
    status: 'On Time',
  },
];

describe('FlightList', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  // tests retrieval of flight details from API
  test('renders flight list from API', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiData));

    render(<FlightList />);

    await waitFor(() => {
      expect(screen.getByText('A1B97')).toBeInTheDocument();
      expect(screen.getByText('A2B9')).toBeInTheDocument();
    });
  });
  
// tests when no retrieval from API
  test('handles API error', async () => {
    fetch.mockReject(new Error('Failed to fetch'));

    render(<FlightList />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch flight data. Please try again later.')).toBeInTheDocument();
    });
  });
});
