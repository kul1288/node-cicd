# Node CI/CD Test

A simple Node.js application built with Express to demonstrate CI/CD pipeline setup and Docker containerization.

## Features

- Express.js web server
- Lightweight Alpine-based Docker image
- Runs on port 3005

## Prerequisites

- Node.js 20 or higher
- npm or Docker

## Installation

### Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

The application will be available at `http://localhost:3005`

## Docker Setup

Build the Docker image:
```bash
docker build -t nodecicdtest .
```

Run the container:
```bash
docker run -p 3005:3005 nodecicdtest
```

The application will be available at `http://localhost:3005`

## Project Structure

- `app.js` - Main Express application
- `package.json` - Project dependencies and metadata
- `dockerfile` - Docker configuration for containerization

## Dependencies

- **express** (^5.2.1) - Fast, unopinionated web framework

## Author

kuldeep singh

## License

ISC
