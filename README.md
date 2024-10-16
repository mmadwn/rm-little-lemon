# Little Lemon Restaurant Website

This project is a website for Little Lemon, a family-owned Mediterranean restaurant. The website is built using React and provides information about the restaurant, its menu, and allows customers to make reservations.

## Features

- Home page with restaurant information and featured menu items
- Menu page displaying all available dishes
- Reservations page for customers to book a table
- About page with information about the restaurant's history and values
- Contact page for customers to get in touch with the restaurant

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/mmadwn/rm-little-lemon.git
   ```

2. Navigate to the project directory:
   ```
   cd little-lemon-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the website.

## Test Coverage

The tests cover the following aspects of the ReservationForm component:

1. Rendering: Ensures that all required form fields are present.
2. Validation: Checks that the form properly validates empty fields and invalid input.
3. Submission: Verifies that the form can be submitted with valid data.
4. Error Handling: Tests the display of error messages when API calls fail.
5. Guest Number Validation: Ensures that the number of guests is validated correctly.

### Test File Structure

The main test file for the ReservationForm component is:

- `src/components/ReservationForm.test.jsx`

This file contains multiple test cases that cover various scenarios and functionalities of the ReservationForm component.

To run the tests, use the following command:
```
npm run test
```
