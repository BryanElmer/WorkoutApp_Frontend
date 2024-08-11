# Workout App Frontend

This is the frontend service for the Workout App, built using Next.js and deployed on Vercel.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Main Features](#main-features)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/BryanElmer/WorkoutApp_Frontend.git
    cd WorkoutApp_Frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the development server:
    ```sh
    npm run dev
    ```

2. The frontend will be available at `http://localhost:3000`.

## Main Features

- User authentication (login/signup)
- Viewing, creating, updating, and deleting workouts

## Environment Variables

To run the project locally, you might need to set up some environment variables. Create a `.env` file in the root of your project and add the necessary variables.
- `NEXT_PUBLIC_API_URI`=http://localhost:PORT_OF_BACKEND_SERVICE

## Deployment

The frontend is deployed on Vercel. To deploy your own version, follow these steps:

1. Install the Vercel CLI:
    ```sh
    npm install -g vercel
    ```

2. Deploy the project:
    ```sh
    vercel
    ```

Follow the prompts to complete the deployment.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

