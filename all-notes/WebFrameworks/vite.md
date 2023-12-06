# Vite
- bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS
- tell Vite to open your browser to the URL that is hosting your application by pressing `o`, or press `h` to see all of the Vite CLI

## Generated Project
- console, use VS Code (code .) to open the project directory and take a look at the files

| Directory    | File              | Purpose                                                                                                                   |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ./           |                   |                                                                                                                                |
|              | index.html        | Primary page for the application. This is the starting point to load all of the JSX components beginning with `main.jsx`. |
|              | package.json      | NPM definition for package dependencies and script commands. This is what maps `npm run dev` to actually start up Vite.   |
|              | package-lock.json | Version constraints for included packages (do not edit this).                                                             |
|              | vite.config.js    | Configuration setting for Vite. Specifically this sets up React for development.                                          |
| ./public     |                   |                                                                                                                           |
|              | vite.svg          | Vite logo for use as favicon and for display in the app.                                                                  |
| ./src        |                   |                                                                                                                           |
|              | main.jsx          | Entry point for code execution. This simply loads the App component found in `App.jsx`.                                   |
|              | index.css         | CSS for the entire application.                                                                                           |
|              | App.jsx           | JSX for top level application component. This displays the logs and implements the click counter.                         |
|              | App.css           | CSS for the top level application component.                                                                              |
| ./src/assets |                   |                                                                                                                           |
|              | react.svg         | React logo for display in the app.                                                                                        |

- main files in the application are `index.html`, `main.jsx`, and `App.jsx`
- browser loads index.html which provides the HTML element (#root) that the React application will be injected in
    - includes the script element to load `main.jsx`
- `main.jsx` creates the React application by associating the `#root` element with the `App` component found in `App.jsx`

![flow chart](https://github.com/webprogramming260/.github/raw/main/profile/webFrameworks/react/vite/reactFiles.png)

## JSX vs JS
- `Vite` CLI uses the `.jsx` extension for JSX files instead of the JavaScript `.js`
- prefer `.jsx` for files that contain JSX

## Building a Production Release
- execute `npm run dev` you are bundling the code to a temporary directory
- deploy to a production environment you need to run `npm run build`
- executes the `build` script found in your `package.json` and invokes the `Vite` CLI
- `vite build` transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named `dist`
```
➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms
```

## Deploying a Production Release
- deployment script for Simon React (`deployReact.sh`) creates a production distribution by calling `npm run build` and then copying the resulting `dist`
- production release by running `npm run build`
- look at the `dist/assets` directory you will see the bundled and minified JavaScript and CSS files