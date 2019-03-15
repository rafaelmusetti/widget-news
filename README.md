# Widget News

## Getting Started

### Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.11.1

    $ npm --version
    5.6.0

### Installation

`npm install`

### Run

`npm run start:reload`

Then open [http://localhost:3042](http://localhost:3042). The start script is set to reload the app and keep the state just after a file is saved , no need for manual refresh.

### Build

`npm run build`

### Test

`npm run test`

[Jest](https://facebook.github.io/jest/docs/api.html) and [Enzyme](http://airbnb.io/enzyme/docs/api/) are the tools in place for unit testing the project code. Unit test files inside `src` must be named with `*.spec.js` or `*.test.js`.

### Folder structure and Suggested Workflow

This is the basic project folder structure

```javascript
...
  src
  └──assets // designed to contain general assets like images
  └──dataSource // designed to contain the requests file
  └──layout // designed to contain the layout components
  └──pages // designed to contain application pages
    └──home // designed to contain components used in Home
    └──news // designed to contain components used in News
  └──store // designed to contain action and reducers to be used by redux
    └──ducks // designed to contain files that make requests and trigger actions for the redux
    | store.js // Javascript file that is responsible for creating the app store
  └──routes // designed to contain the route settings
    | Routes.jsx // React component that deals with routes
  └──utils // designed to contain useful methods throughout the application
    | constants.js // designed to contain app constants
    ...
  | App.jsx // designed to be the entry point of the application
  ...
...
```

Basically, the entry point of the `index.js` project renders the `App` component that renders the pages components according to the route.

---

## Languages & tools

### JavaScript

- [Webpack](https://webpack.js.org/) is used to aggregate JavaScript files for use in a browser.
- [Babel](https://babeljs.io/) is used as a JavaScript compiler and configurable transpiler.
- [ESLint](https://eslint.org/) is used to prevent JavaScript error.
- [React](http://facebook.github.io/react) is used for UI.
- [React Router](https://www.npmjs.com/package/react-router) is used to manipulate routes.
- [Redux](https://redux.js.org/) is used to manage application state.
- [Ant Design](https://ant.design/) is used as a library of previously stylized components to give visual identity to the application.
- [Jest](https://jestjs.io/) + [Enzyme](https://github.com/airbnb/enzyme) - is used for unit tests.


