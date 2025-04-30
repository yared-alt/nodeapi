# Node.js REST API

A robust Node.js REST API built with Express.js, featuring authentication, database integration, and modern development practices.

## Features

- Express.js backend framework
- MySQL database integration
- JWT-based authentication
- Bcrypt password hashing
- CORS support
- Environment variable configuration
- Modular code structure
- Error handling middleware

## Project Structure

```
nodeapi-main/
├── controller/     # Route controllers
├── error/          # Error handling
├── function/       # Utility functions
├── lib/            # Library files
├── middlware/      # Express middleware
├── router/         # API routes
├── server.js       # Main application file
├── vercel.json     # Vercel deployment config

```

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd nodeapi-main
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your environment variables).

## API Endpoints

The API includes various endpoints for user management, authentication, and other features. Please refer to the router files for detailed endpoint documentation.

## Development

- The project uses ES modules (type: "module" in package.json)
- Nodemon is used for development with auto-reload
- Webpack is configured for bundling (if needed)

## Deployment

The project is configured for deployment on both Vercel and Netlify:

- Vercel: Uses `vercel.json` for configuration
- Netlify: Uses `netlify.toml` for configuration

## Dependencies

- express: ^4.21.2
- mysql2: ^3.11.5
- jsonwebtoken: ^9.0.2
- bcrypt: ^5.1.1
- cors: ^2.8.5
- dotenv: ^16.4.7
- body-parser: ^1.20.3

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License.

## Author

Yared
