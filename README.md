# Color Box Maker
React Forms Exercises
Application includes a form where colored boxes can be created and added to the DOM.  Each box can also be removed individually from the DOM.

## Components

__App:__ Renders the BoxList component.

__BoxList:__ Holds state for all of the boxes here. This component renders all of the Box components along with the NewBoxForm component

__Box:__ Displays a div with a background color, width and height based on the props passed to it.  Each __Box__ component includes a remove button __“X”__. When this button is clicked, the box is removed from the DOM.

__NewBoxForm:__ Renders a form that when submitted, creates a new Box. The user can specify the Box’s width, height, and background color. When the form is submitted, input values are cleared.

## Testing

Every component includes a smoke and snapshot test.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
