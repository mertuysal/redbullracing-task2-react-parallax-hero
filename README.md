## Author

Developed by Mert Uysal for Red Bull Racing.

# Red Bull Racing UI Implementation

This project is a UI implementation for [Red Bull Racing](https://www.redbullracing.com/), built using [Create React App](https://github.com/facebook/create-react-app). It features interactive components, responsive design, and a well-defined testing environment.

## Project Highlights

- **Components and Styling:** Each component is self-contained, with styles embedded directly in the component files. This approach keeps components small, manageable, and enhances both readability and maintainability.
- **Testing Environment:** Unit tests have been implemented for key components, such as `ArticleCard` and `App` (see `ArticleCard.test.js` and `App.test.js`). These tests can be executed using `npm test` to ensure component stability and functionality.
- **Font Selection:** The Figma design specified the `Bull` font, which was not publicly available. As an alternative, I used the [Steradian TRIAL Font Family](https://www.cdnfonts.com/steradian-trial.font) to closely match the intended design aesthetic.


## Run Steps

To set up and start the project, follow these steps:

1. **Install Dependencies:** Run `npm install` to install all necessary dependencies.
2. **Build the Project:** Run `npm run build` to create an optimized production build in the `build` folder.
3. **Start the Application:** Run `npm run start` to start the app in development mode.
4. **Open in Browser:** Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and you may see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode, allowing you to monitor test results in real-time. For more information, see the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes, making the app ready for deployment.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project, allowing full control over configuration files and transitive dependencies (webpack, Babel, ESLint, etc.).

You don't need to use `eject` unless you require extensive customization. The curated feature set is designed for small and medium-sized deployments.
