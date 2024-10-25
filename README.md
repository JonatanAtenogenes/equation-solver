# Quadratic Equation Solver

A simple React Native application for solving quadratic equations of the form \( ax^2 + bx + c = 0 \). Users can input the coefficients \( a \), \( b \), and \( c \) to calculate the roots of the equation.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [License](#license)

## Features

- Input fields for the coefficients \( a \), \( b \), and \( c \).
- Calculate the solutions (roots) of the quadratic equation.
- Displays the results or an error message if there are no real solutions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JonatanAtenogenes/equation-solver.git
   cd equation-solver
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npx expo start
   ```

## Usage

1. Open the app on your mobile device or emulator.
2. Enter the coefficients \( a \), \( b \), and \( c \) in their respective fields.
3. Press the "Calculate Solution" button to compute the roots.
4. The results will be displayed on the screen. If the equation has no real solutions, an appropriate message will be shown.

## Components

The application consists of the following main components:

- **App.js**: The main application file where state management and rendering occur.
- **CalculateSolution.jsx**: A button component that triggers the calculation of the quadratic equation solutions.
- **EcuationData.jsx**: A component for input fields to enter coefficients \( a \), \( b \), and \( c \).
- **Solution.jsx**: A component that displays the calculated roots of the quadratic equation or an error message.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
