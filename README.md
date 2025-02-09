# Take home test (PE, SPE)
## Real-Time Flight Status Board - Frontend Task
### Objective:
Develop a React-based application using TypeScript that mimics a real-time flight status board. This application should retrieve flight details from the provided API, update the data at regular intervals, and allow users to view more detailed information about a specific flight.

### Features:
1. Flight Table:
    - Fetch and display a list of flights in a table with columns for:
        - Flight Number
        - Airline
        - Origin
        - Destination
        - Departure Time
        - Status (e.g., "On Time", "Delayed", "Boarding", "Departed")
    - Every 'x' seconds, fetch fresh data from the API to update the displayed flight statuses

2. Detail View:
    - Clicking on a row (or a link within a row) should navigate the user to a detailed view of that flight.
    - In the detailed view, fetch and display comprehensive data for the selected flight.

3. Navigation:
    - Use React Router to handle navigation between the main flight board and the detailed flight view.

4. Error Handling: Provide feedback to the user if:
    - There's an issue fetching data (network error, API limit exceeded, etc.).
    - The requested flight details are unavailable.

5. Styling: The design should be clear and user-friendly, ensuring the board is easily readable.

### API Details
1. https://flight-status-mock.core.travelopia.cloud/flights
2. https://flight-status-mock.core.travelopia.cloud/flights/:id

### Technical Requirements:
- Language: TypeScript
- Framework: React
- HTTP Client: Use Axios or Fetch API to make HTTP requests.
- Testing:
    - Write unit tests using testing libraries such as Jest, Vitest, and React Testing Library.
    - Ensure that the application logic and API interactions are covered by tests.

### Submission Guidelines:
A well-documented README file will help us understand how to set up and run the application locally, run the test cases, and any other required details. Ensure that the code is clean, well-documented, and follows best practices for TypeScript and React development



# Flight Status Table Board

A Next(React) based web application (FE) to track flight status.

## Prerequisites
- NodeJs [https://nodejs.org/en](https://nodejs.org/en)
- Git [https://git-scm.com/](https://git-scm.com/)

## INstallation
 Download the repository or 
 Clone the repository `fl-status-board` using git-bash or cmd.
 
```
git clone https://github.com/MTanwirS/fl-status-board.git
cd fl-status-board
npm install
```

Build and run the application
```
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Use <kbd>Ctrl</kbd>+<kbd>c</kbd> to stop the server.

Run unit tests
```
npm test
```
Use <kbd>Ctrl</kbd>+<kbd>c</kbd> to stop the server.

Run development server
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Use <kbd>Ctrl</kbd>+<kbd>c</kbd> to stop the server.

Website structure:
```
/ => Home page
|
/flight => Flight Status Table
|
/flight/:id  => Detailed flight information
```






# Next JS
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

