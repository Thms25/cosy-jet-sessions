# Cosy Jet Sessions

#### Video Demo:  <https://www.youtube.com/watch?v=w4Wzbi9TafA&ab_channel=ThomasA>

## Description
Cosy Jet Sessions is a web application built using the JavaScript framework Next.js, which leverages React for building HTML and web interactions. The application fetches data from YouTube and Spotify APIs, which is then stored in a Firebase database. For motion design, the project uses the Framer Motion library, and Tailwind CSS is employed for the design.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/cosy-jet-sessions.git
    ```
2. Navigate to the project directory:
    ```sh
    cd cosy-jet-sessions
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
<!-- only if step 3 fails do step 4 -->
4. npm install --force 

## Usage
To run the development server:
```sh
npm run dev 

Open http://localhost:3000 with your browser to see the result.


Technologies
Next.js: A React framework for server-side rendering and static site generation.
React: A JavaScript library for building user interfaces.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Firebase: A platform developed by Google for creating mobile and web applications.
Framer Motion: A library for creating animations in React.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Project Structure
The project structure is organized as follows:

cosy-jet-sessions/
├── components/        # Reusable React components
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   └── index.tsx      # Home page
├── public/            # Static assets
├── styles/            # Global styles and Tailwind CSS configuration
├── utils/             # Utility functions and helpers
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── package.json       # Project metadata and dependencies
├── README.md          # Project documentation
└── tsconfig.json      # TypeScript configuration

Features
Server-Side Rendering: Utilizes Next.js for server-side rendering and static site generation.
API Integration: Fetches data from YouTube and Spotify APIs.
Firebase Integration: Stores and retrieves data from Firebase.
Responsive Design: Uses Tailwind CSS for a responsive and modern design.
Animations: Implements smooth animations using Framer Motion.