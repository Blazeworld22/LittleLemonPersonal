import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the booking form heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  
  // Check for the heading
  const headingElement = screen.getByText(/reserve a table/i);
  expect(headingElement).toBeInTheDocument();
});