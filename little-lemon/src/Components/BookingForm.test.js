import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { isFormValid } from "./BookingForm";

describe("BookingForm HTML5 Validation", () => {
  test("renders date input with required attribute", () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText("Date:");
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("renders party size input with min and max attributes", () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const partySizeInput = screen.getByLabelText("Party Size:");
    expect(partySizeInput).toBeRequired();
    expect(partySizeInput).toHaveAttribute("type", "number");
    expect(partySizeInput).toHaveAttribute("min", "1");
    expect(partySizeInput).toHaveAttribute("max", "10");
  });

  test("renders time selection with required attribute", () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} submitForm={() => {}} />);
    const timeSelect = screen.getByLabelText("Time:");
    expect(timeSelect).toBeRequired();
    expect(timeSelect).toBeInTheDocument();
  });
});

describe("isFormValid function", () => {
  test("returns true when all fields are filled correctly", () => {
    const validFormData = {
      date: "2025-05-25",
      time: "18:30",
      occasion: "Birthday",
      partySize: "3",
    };
    expect(isFormValid(validFormData)).toBe(true);
  });

  test("returns false when date is missing", () => {
    const invalidFormData = {
      date: "",
      time: "18:30",
      occasion: "Anniversary",
      partySize: "3",
    };
    expect(isFormValid(invalidFormData)).toBe(false);
  });

  test("returns false when time is missing", () => {
    const invalidFormData = {
      date: "2025-05-25",
      time: "",
      occasion: "Birthday",
      partySize: "3",
    };
    expect(isFormValid(invalidFormData)).toBe(false);
  });

  test("returns false when party size is less than 1", () => {
    const invalidFormData = {
      date: "2025-05-25",
      time: "18:30",
      occasion: "Birthday",
      partySize: "0",
    };
    expect(isFormValid(invalidFormData)).toBe(false);
  });

  test("returns false when occasion is missing", () => {
    const invalidFormData = {
      date: "2025-05-25",
      time: "18:30",
      occasion: "",
      partySize: "3",
    };
    expect(isFormValid(invalidFormData)).toBe(false);
  });
});