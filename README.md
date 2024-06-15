# Code Commenter

Code Commenter is a web application that helps developers add comments to their code using an LLM (Language Learning Model) API. It features a code editor powered by Monaco Editor and leverages a Google API to generate comments for the code.

## Features

- **Monaco Editor Integration**: Provides a rich code editing experience.
- **Dynamic Code Commenting**: Uses a LLM API to add comments to your code.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Deployment

https://code-commenter.vercel.app/

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/praveen-p09/code-commenter.git
    cd code-commenter
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env.local` file in the root directory and add your Google API key:
    ```env
    NEXT_PUBLIC_API_KEY=your_google_api_key_here
    ```

4. Run the development server:
    ```sh
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter your code in the Monaco Editor.
2. Click on the "Generate Comments" button.
3. Wait for the API to process your code and add comments.
4. View the commented code in the editor.

## Project Structure

- `src/app`: Contains the main application components and pages.
- `src/app/components`: Contains reusable React components like the Navbar.
- `public`: Contains static files like images and logos.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `next.config.js`: Next.js configuration file.

## Technologies Used

- **Next.js**: React framework for server-side rendering.
- **React**: JavaScript library for building user interfaces.
- **Monaco Editor**: Code editor component.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: Promise-based HTTP client for making API requests.
- **dotenv**: Module for loading environment variables.
- **Google API for `gemini-1.5-flash-latest` LLM**

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
