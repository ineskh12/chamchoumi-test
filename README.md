# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Movies search app
Test demanded by Hiberus Tecnologia.

### Project description:  

This was a 1 week long project built for Hiberus Tecnologia. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

I started this process by using the `create-react-app` boilerplate, then adding `hookrouter`, `react-icons`, `fuse.js`, `prop-types` and `axios` in order to fetch data from the open API movies library `https://developers.themoviedb.org/3/`.  

![image](https://user-images.githubusercontent.com/24367625/129138004-e93f2935-55e7-4577-8c24-a99bb4302c04.png)


 ## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    logo.png
  api/
    listApi.js
  src/
    components/
      Login.js
      Home.js
      Popup.js
      Item.js
      GridItems.js
      SearchBar.js
    hooks/
      useSearch.js
    utils/
      Constants.js
      Routes.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

### `npm install`  

To run the application

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
