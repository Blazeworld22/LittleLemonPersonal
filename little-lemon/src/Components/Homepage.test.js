import { initializeTimes, updateTimes } from './Homepage'; // Adjust path based on location

test('initializeTimes returns expected initial values', () => {
  const expectedTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
  expect(initializeTimes()).toEqual(expectedTimes);
});
test('updateTimes returns the same values as initial state', () => {
  const initialState = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
  const action = { type: 'UPDATE_TIMES', date: '2025-05-25' }; // Example date

  expect(updateTimes(initialState, action)).toEqual(initialState);
});
