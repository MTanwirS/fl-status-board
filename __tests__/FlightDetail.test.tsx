import { render, screen, waitFor } from '@testing-library/react';
import FlightDetail from '../app/components/FlightDetail';
import fetch from 'jest-fetch-mock';
import { useParams } from 'next/navigation';


jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  })
);

const mockApiData = {
  id: 2,
  flightNumber: 'A2B40',
  airline: 'Airline 2',
  origin: 'Origin 2',
  destination: 'Destination 2',
  departureTime: '2025-02-07T00:19:30.114Z',
  status: 'Delayed',
};

describe('FlightDetail', () => {
  beforeEach(() => {
    fetch.resetMocks();
    (useParams as jest.Mock).mockReturnValue({ id: '2' });
  });

  //tests normal retrieval of flight details from API
  test('renders flight details from API', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockApiData));

    render(<FlightDetail />);

    await waitFor(() => {
      expect(screen.getByText('A2B40')).toBeInTheDocument();
      expect(screen.getByText('Delayed')).toBeInTheDocument();
    });
  });
  
  // tests for API error
  test('handles API error', async () => {
    fetch.mockReject(new Error('Failed to fetch'));

    render(<FlightDetail />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch flight data. Please try again later.')).toBeInTheDocument();
    });
  });
});
