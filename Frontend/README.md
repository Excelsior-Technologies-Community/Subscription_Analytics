# Subscription Analytics Frontend

A modern React-based dashboard for visualizing subscription analytics, built with Vite for fast development and optimized performance.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)

## Description

This frontend application provides a comprehensive dashboard for subscription analytics, displaying key metrics such as monthly revenue, user subscription status, active/subscribed counts, and churn rates. It features interactive charts, data tables with filtering and export capabilities, and a responsive design suitable for desktop and mobile devices.

The application communicates with a backend API to fetch and display real-time subscription data, enabling users to monitor and analyze subscription performance effectively.

## Features

- **Interactive Dashboard**: Monthly revenue charts and subscription status breakdowns
- **Data Visualization**: Pie charts and line charts using Recharts library
- **Subscription Management**: User/subscription lists with pagination and search functionality
- **Advanced Filtering**: Date range, plan type, and status filters
- **Data Export**: Export table data to CSV format
- **Responsive Design**: Mobile-friendly layout with collapsible sidebar
- **Error Handling**: Comprehensive error states and loading indicators
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router
- **HTTP Client**: Axios
- **Charts**: Recharts
- **Styling**: Plain CSS (separate CSS files per component)
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **State Management**: React Hooks (useState, useEffect)

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 16 or higher (recommended: LTS version)
- **npm** or **yarn**: Package manager
- **Git**: For cloning the repository

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173` (or the port shown in the terminal).

## Environment Setup

Create a `.env` file in the root of the Frontend directory with the following variables:

```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Subscription Analytics
```

**Note**: Vite requires environment variables to be prefixed with `VITE_` to be accessible in the client-side code.

## Usage

1. Ensure the backend server is running (refer to the Backend README for setup instructions).
2. Start the frontend development server as described in the Installation section.
3. Open your browser and navigate to the provided localhost URL.
4. Use the dashboard to view analytics, apply filters, and export data.

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code using Prettier

## Project Structure

```
Frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── api.js                 # API configuration and axios setup
│   ├── App.css                # Global styles
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # Application entry point
│   ├── assets/                # Static assets (images, icons)
│   ├── Chart/                 # Chart components
│   │   └── StatusPie.jsx      # Pie chart for subscription status
│   ├── Componets/             # Reusable components
│   │   ├── Layout.jsx         # Main layout component
│   │   └── RevenueChart.jsx   # Revenue chart component
│   └── Pages/                 # Page components
│       └── DashBord.jsx       # Dashboard page
├── Screenshot/                # Screenshots for documentation
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## API Integration

The frontend integrates with the backend API to fetch subscription data. Key endpoints include:

- `GET /api/subscriptions` - Retrieve subscription list with optional filters
- `POST /api/subscriptions/add` - Add a new subscription
- `GET /api/analytics/revenue` - Get monthly revenue data
- `GET /api/analytics/status` - Get subscription status breakdown

Example API response for adding a subscription:

```json
{
  "message": "Subscription added successfully",
  "data": {
    "userId": "U1003",
    "userName": "Vinay Yadav",
    "plan": "Premium",
    "price": 99,
    "status": "cancelled",
    "_id": "69325d2d3683b8157c314b93",
    "createdAt": "2025-12-05T04:18:53.447Z",
    "__v": 0
  }
}
```

## Styling

The application uses separate CSS files for each component to maintain modularity and avoid style conflicts. Key styling principles:

- **Modular CSS**: Each component has its own CSS file (e.g., `Dashboard.css`, `Layout.css`)
- **BEM-like Naming**: Class names follow a consistent naming convention to prevent clashes
- **Responsive Design**: Media queries ensure proper display on various screen sizes
- **No Inline Styles**: All styles are defined in external CSS files

## Testing

Unit tests can be added using Jest and React Testing Library. To set up testing:

1. Install testing dependencies:
   ```bash
   npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
   ```

2. Add test scripts to `package.json`:
   ```json
   {
     "scripts": {
       "test": "vitest"
     }
   }
   ```

3. Create test files in `src/__tests__/` directory.

## Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting platform (Netlify, Vercel, AWS S3, etc.).

3. **Configure environment variables** on your hosting platform:
   - Set `VITE_API_BASE_URL` to your production API URL
   - Set `VITE_APP_NAME` to your application name

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Screenshots

### Dashboard Overview
![Dashboard Screenshot 1](Screenshot/Screenshot%202025-12-05%20101246.png)

### Analytics View
![Dashboard Screenshot 2](Screenshot/Screenshot%202025-12-05%20101258.png)
