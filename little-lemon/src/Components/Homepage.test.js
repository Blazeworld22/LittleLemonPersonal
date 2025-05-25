import { initializeTimes, updateTimes } from './Homepage'; // Adjust path based on location

describe("initializeTimes", () => {
  beforeEach(() => {
    // Clean up any previous definition of window.fetchAPI
    delete window.fetchAPI;
  });

  it("should return available times from fetchAPI when fetchAPI is defined", () => {
    // For testing, we simulate fetchAPI returning a non-empty array.
    window.fetchAPI = jest.fn().mockReturnValue(["10:00", "11:00", "12:00"]);
    
    const times = initializeTimes();
    
    // Verify that fetchAPI was called (with today's date)
    expect(window.fetchAPI).toHaveBeenCalled();
    // Expect the returned times to equal what our mock returns.
    expect(times).toEqual(["10:00", "11:00", "12:00"]);
  });

  it("should return default times when fetchAPI is not defined", () => {
    // Simulate fetchAPI not being available.
    window.fetchAPI = undefined;
    
    const times = initializeTimes();
    expect(times).toEqual([
      '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
    ]);
  });
});

describe("updateTimes", () => {
  beforeEach(() => {
    delete window.fetchAPI;
  });

  it("should return new available times based on the submitted date when fetchAPI is defined", () => {
    // Create a mock for fetchAPI that returns an array based on the date.
    // For example, it returns an array containing one string,
    // which is the hour of the provided date (formatted as "H:00").
    window.fetchAPI = jest.fn().mockImplementation((date) => {
      return [`${date.getHours()}:00`];
    });
    
    // Provide a specific date string (e.g., "2025-06-15").
    const action = { type: 'UPDATE_TIMES', date: "2025-06-15" };
    const initialState = [];
    
    const newState = updateTimes(initialState, action);
    const testDate = new Date("2025-06-15");
    
    // Verify that fetchAPI was called with a valid Date object.
    expect(window.fetchAPI).toHaveBeenCalledWith(testDate);
    
    // Since "2025-06-15" (without a time) defaults to midnight (0 hours),
    // our dummy fetchAPI returns an array with "0:00".
    expect(newState).toEqual(["0:00"]);
  });

  it("should return current state when fetchAPI is not available", () => {
    window.fetchAPI = undefined;
    
    const action = { type: 'UPDATE_TIMES', date: "2025-06-15" };
    const initialState = ['existing'];
    const newState = updateTimes(initialState, action);
    
    expect(newState).toEqual(initialState);
  });
});