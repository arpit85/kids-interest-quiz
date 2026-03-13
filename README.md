# Kids Interest Quiz

Welcome to the Kids Interest Quiz project! This interactive website is designed for parents and their children to explore various fields of study and identify children's interests through engaging questionnaires and quizzes.

## Features

- **Interactive Questionnaire**: A fun and engaging way for children to express their interests in different subjects.
- **Quiz**: A series of questions that help gauge children's preferences in areas such as Arts, Finance, Science, and Sports.
- **Results Display**: A summary of the child's interests based on their responses, helping parents guide their educational choices.

## Project Structure

```
kids-interest-quiz
├── public
│   ├── index.html        # Main HTML document
│   └── favicon.ico       # Favicon for the website
├── src
│   ├── assets
│   │   └── styles.css    # CSS styles for the website
│   ├── components
│   │   ├── Questionnaire.tsx  # Component for the interactive questionnaire
│   │   ├── Quiz.tsx          # Component for the quiz
│   │   └── ResultDisplay.tsx  # Component to display results
│   ├── data
│   │   └── questions.ts      # Questions used in the questionnaire and quiz
│   ├── App.tsx               # Main application component
│   ├── index.tsx             # Entry point of the React application
│   └── types
│       └── index.ts          # TypeScript interfaces and types
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── vite.config.ts             # Vite configuration file
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd kids-interest-quiz
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.