# Currency Converter

## Overview

The **Currency Converter** is a sophisticated web application designed to provide real-time currency conversion capabilities using the latest API integrations. This project leverages React.js for a seamless and responsive user experience. Whether you are a developer looking to understand API consumption in a React environment or a user needing accurate currency conversion, this application serves both purposes efficiently.

## Features

- **Real-time Conversion**: Fetches up-to-date exchange rates from a reliable API.
- **Responsive Design**: Ensures optimal user experience across various devices and screen sizes.
- **User-friendly Interface**: Intuitive UI for easy navigation and operation.
- **Multiple Currency Support**: Converts between numerous global currencies.

## Tech Stack

- **Frontend**: React.js
- **API**: [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.11/v1/currencies/${currency}.json)
- **Styling**: CSS

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Steps

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Awadesh365/currencyConverter.git
   ```
2. **Navigate to the Project Directory**:
   ```sh
   cd currencyConverter
   ```
3. **Install Dependencies**:
   ```sh
   npm install
   # or
   yarn install
   ```
4. **Create a `.env` File**:
   Create a `.env` file in the root directory and add your API key:
   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```
5. **Start the Application**:
   ```sh
   npm start
   # or
   yarn start
   ```
   The application will run at `http://localhost:3000`.

## Usage

1. **Select Currencies**: Choose the currencies you want to convert from and to.
2. **Enter Amount**: Input the amount you wish to convert.
3. **Get Conversion**: Click the convert button to get real-time conversion results.

## Code Structure

- **`src/`**: Contains all the source code for the application.
  - **`components/`**: Reusable React components.
  - **`Hooks`/**: custom hooks
  - **`services/`**: API service logic.
  - **`styles/`**: CSS/SCSS files for styling.
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point for React.

## Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

We extend our gratitude to the developers and contributors of the libraries and tools used in this project. Special thanks to [fawazahmed0](https://github.com/fawazahmed0) for providing the currency exchange data.

---

For any queries or support, please contact [36awadesh@gmail.com].

---

_Crafted with precision and dedication by Awadesh._
