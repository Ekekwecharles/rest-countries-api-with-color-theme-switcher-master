# Rest Countries Api

Rest Countries Api with color theme switcher

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

---

## Overview

This project is a country information app that allows users to search and view details about different countries. It includes features like filtering, dynamic routing, darkmode and responsive design to enhance the user experience.

## Features

- Display a list of [items, e.g., countries] with details in card format.
- Search and filter functionality.
- Detailed view of each item with more specific information.
- Persistent caching and data management.
- State management with Redux and Context API.
- Pagination

## Technologies Used

This project was built with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds type safety to JavaScript code.
- **Styled Components**: Allows writing CSS in JavaScript with styled components.
- **React Query**: Fetches, caches, and synchronizes server data with the UI.
- **Redux**: Manages application-level state.
- **Context API**: Provides state sharing across components.
- **React Router**: Handles routing in single-page applications.
- **React Icons**: Provides icons to enhance UI.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm/yarn installed on your machine.
- Clone this repository.

### Installation

1. Install the project dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

Once you have installed the dependencies and started the development server, you can use the application as follows:

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and navigate to:

   ```bash
   http://localhost:3000
   ```

3. Use the following features:

- Search: Enter the name of a country in the search bar to find specific - information.
- Filter: Use the filter dropdown to narrow results by region (e.g., Africa, Europe).
- Dark Mode: Toggle the theme switcher to switch between light and dark modes.
- Country Details: Click on a country card to view detailed information about it.
- Pagination: Use the pagination buttons (next and prev) to navigate through the pages both for the search and filter results.

## Contributing

Contributions are welcome and appreciated! To contribute, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top of this repository to create a copy of it on your GitHub account.

2. **Clone the repository**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/rest-countries-api.git
   ```
3. Create a new branch: Create a branch for your feature or bug fix.

   ```bash
   git checkout -b feature-or-bugfix-name
   ```

4. Make changes: Add your changes or new features to the codebase.

5. Commit changes: Commit your changes with a meaningful commit message.
   ```bash
   git commit -m "Description of your changes"
   ```
6. Push changes: Push your changes to your forked repository.
   ```bash
   git push origin feature-or-bugfix-name
   ```

### Guidelines

- Follow the coding style used in the project.
- Write clear, concise commit messages.
- Ensure your code passes all tests and linting checks.
- Keep your pull requests focused and avoid mixing unrelated changes.

Thank you for contributing to this project!
