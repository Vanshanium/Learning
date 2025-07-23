# React 

## [Working of the Browser:](https://www.youtube.com/watch?v=5rLFYtXHo9s)

1. **HTML Parsing & DOM Construction:**  
    - Browser reads HTML from top to bottom.
    - Builds the **DOM tree** (Document Object Model) — a tree structure of all elements/content.

2. **CSS Parsing & CSSOM Construction:**  
    - Parses CSS files and `<style>` tags.
    - Builds the **CSSOM** (CSS Object Model) — maps styles to elements.

3. **Render Tree Construction:**  
    - Combines **DOM + CSSOM** to create the **Render Tree**.
    - Only includes nodes that will be visible (no `display: none`).

4. **Layout (Reflow):**  
    - Calculates position and size for every visible element.
    - Happens when content or styles change.

5. **Painting:**  
    - Converts Render Tree nodes into actual pixels.
    - Fills in colors, text, images, borders, etc.

6. **Compositing:**  
    - Layers are combined and rendered on screen.
    - Browser optimizes to avoid unnecessary redraws.


## Node.js ~ Python

- Node.js is a JavaScript runtime built on Chrome's V8 engine.
- Enables running JavaScript on the server side.
- Used for building scalable network applications.
- Commonly used with frameworks like Express.js.

## NPM (Node Package Manager) ~ PIP

- Default package manager for Node.js.
- Used to install, share, and manage dependencies (libraries, tools).
- Common commands:
    - `npm init` – initialize a new project.
    - `npm install <package>` – install a package.
    - `npm run <script>` – run scripts defined in `package.json`.

- NPX is Node package eXecutor. It executes without intalling the package.  

## NVM (Node Version Manager) ~ UV

- Tool for managing multiple Node.js versions on a single machine.
- Useful for switching between Node.js versions for different projects.
- Common commands:
    - `nvm install <version>` – install a specific Node.js version.
    - `nvm use <version>` – switch to a specific Node.js version.
    - `nvm ls` – list installed Node.js versions.

# Vite **

In Webdevelepment a user uses HTTP Request to get Html,Css or javascript.But it is insecure, to make it secure, Modern websites uses bundlers like vite to bundle the webapp and send a normal js or jsx with a html, which renders the webapp.

Vite is a modern build tool and development server for front-end projects. It offers fast startup and hot module replacement during development, and bundles code efficiently for production.

- **Fast Development:** Uses native ES modules for instant hot module replacement (HMR).
- **Optimized Build:** Uses Rollup for efficient production builds.
- **Zero Config:** Works out of the box, but is highly configurable.
- **Framework Agnostic:** Supports React, Vue, Svelte, and more via plugins.

1. **Install Vite:**
    ```bash
    # npm create : makes a packages.json file which is a file with all the dependencies which are need for the package. #
    
    npm create vite@latest 

    npm install # Install the packages.

    ```
2. **Start the dev server:**
    ```
    npm run dev
    ```

# ES6 Javascript (2015)

## 1. Variable Declaration - 

### Var 
```javascript
    var name = 'James'
    var name = 'Joe'
```
### let
```javascript
    let name = 'James'
    name = 'joe'            // Can be done
    let name = 'Joe'        // Cannot be done. 
```
### Const 
```javascript
    const name = 'James'
    name = 'Q'              // Cannot be done
    const name = 'Joe'      // Cannot be done
```

## 2. Arrow Function -

```javascript

    const bmi = (name, weight, height) => {
        return weight / (height * height);
    }
```

## 3. Arrays and Objects  

### Arrays: 

```javascript
    const my_array = ['James', 'Q', 'Joe', 'Sam'];

    let [first, second] = my_array; // Array Destructuring

    console.log(`This is 1st Person: ${first} \nAnd this is the 2nd :${second}`);
```
### Objects: 
```javascript

    const my_object = { Red: 'Jack', Blue: 'Sky', Green: 'Bridge' };
    const { Red, Blue, Green } = my_object;   // Key and the Var name should be same.

```

### Spread and Rest/Others 
```javascript
    const my_object = { red: 'Jack', blue: 'Sky', green: 'Bridge' };
    const my_new_object = { ...my_object, pink: 'syd' }; // Copies other element from old element.

    const { red, ...mia } = my_new_object; // Can be used to get the other elements.
    console.log(mia);
```

### Mapping 
```javascript
    const meri_array = [1, 2, 3, 4, 5];

    const doubles = meri_array.map(meri_array => meri_array * 2)

    const trip = meri_array.map((num) => {return num*3})

```

In react you can use it as - 
```javascript

    const Cardcomponent = () => {
        return (
            data.map((item) => {
                return (
                    <div className="card">
                        <h2>{item.title}</h2>
                        <p>Year: {item.year}</p>
                        <p>Genre: {item.genre}</p>
                    </div>
                );
            })
        );
    };

```

## 4. Modules in Js 
blah-blah-blah

# React Project Structure: 

## Using CRA (Create React App)

```java
    my-cra-app/
    ├── node_modules/            
    ├── public/                  
    │   ├── index.html            # Contains <div id="root"></div>
    │   ├── favicon.ico          
    │   ├── manifest.json        
    │   └── logo192.png          
    ├── src/                     # All the Source code. this is where all the coding happens
    │   ├── assets/              
    │   │   └── logo.png         
    │   ├── components/          
    │   │   └── Header.jsx       
    │   ├── pages/               
    │   │   └── Home.jsx         
    │   ├── hooks/               
    │   │   └── useFetch.js      
    │   ├── services/            
    │   │   └── api.js           
    │   ├── config/              
    │   │   └── constants.js     
    │   ├── App.jsx              
    │   ├── App.css              
    │   ├── index.js             # Entry point for CRA projects
    │   └── index.css            
    ├── .gitignore               # Duhh
    ├── package.json             # It holds all the dependencies 
    ├── package-lock.json        
    └── README.md               # Docs 
```
## Using Vite 
```c
    my-vite-app/
    ├── node_modules/            
    ├── public/                  
    │   └── logo.svg              # Public assets, served directly at '/logo.svg'
    ├── src/                     
    │   ├── assets/              
    │   │   └── logo.png         
    │   ├── components/          
    │   │   └── Header.jsx       
    │   ├── pages/               
    │   │   └── Home.jsx         
    │   ├── hooks/               
    │   │   └── useFetch.js      
    │   ├── services/            
    │   │   └── api.js           
    │   ├── config/              
    │   │   └── constants.js     
    │   ├── App.jsx              
    │   ├── App.css              
    │   ├── main.jsx             # Main entry point for Vite projects
    │   └── index.css            
    ├── .gitignore               
    ├── index.html               # In Vite, at project root (NOT in public)
    ├── package.json             
    ├── vite.config.js           
    ├── package-lock.json        
    └── README.md                
```
# Rendering Process : 

🤯 Initial Render:
    
    1.When your app loads:
    2.ReactDOM creates a React Root (via createRoot())
    3.Calls the .render() method with your top-level component (often <App />)
    4.React creates a Virtual DOM tree
    5.ReactDOM renders it to the real DOM

✅ Subsequent Renders (on state/props change):
    
    1.State/props in a component changes
    2.React re-renders that component and its children
    3.New Virtual DOM is generated for those parts
    4.React performs a diffing operation
    5.Only the actual changes are applied to the real DOM


# Base Code - 

## Using CRA (Without jsx):

```javascript

    import React from 'react';                  // Imports it as it is a Nodejs Library.
    import ReactDOM from 'react-dom/client';    // Import React Dom 

    const heading = React.createElement(        // This is a React Element. Which is just a Javascript Object.
        'h1',
        { className: 'main-heading' },
        'Hello React Element!'
    );

    const root = ReactDOM.createRoot(document.getElementById('root')); // Creates a root for React to render into

    root.render(heading);                        // Use the Root method render to render the component or element.                    

    or 

    import { StrictMode } from 'react'              
    import { createRoot } from 'react-dom/client'   

    createRoot(document.getElementById('root')).render(
        <h1>Loading...</h1>
    );

```

## React Element : 
It is just a Javascript Object that represents a DOM node.
```javascript

    const element_Name = React.createElement(type,props,children);      // Without JSX

    or

    const element_name = <h1>Hello_World</h1>;                          //Using JSX


    Both creates a Object like this: 
    
    const element_Name = {

        type: 'h1',
        props:{className: 'class'},
        'Hello this a Message'
    }

```

# React Components :
A React component is a reusable, self-contained function or class that returns React elements describing what should appear on the screen. Components can accept inputs called "props" and manage their own state. They help break the UI into independent, manageable pieces, making code more modular and maintainable.


## Functional Components (Stateless Components):

```javascript

    function Welcome(props) {                   // The name should Start with Capital Letter.
        return <h1>Hello, {props.name}!</h1>;
    }

    <Welcome name="Bitch"/>                                 // call this function like 

```

## Class Components (Stateful Components):
```javascript

    class Component_name extends React.Component{

        constructor(props){

            super(props);

        }

        render(){

            return(

                <h1> I can write react in sleep {this.props.name}</h1>
            );

        }

    };

    Component_name.defaultProps{

        name: "Vansh"


    }


    const root = ReactDom.createRoot(document.getElementById="root");

    root.render(

        <Component_name />

    );


```

# States and Props

## Props - 
props are the Properties that can be passed to the elements or components like functional arguments.or they are just object that is passed to the React Components.

```javascript

    const Component = (prop) => {
        return (
            <tag> This is {prop.property}</tag>
        );
    }

    <Component property={"Value"}/>


    let username = prompt("Enter your name: ");

    const Nameplate = ({ input_name }) => {             // Directly pass the arguments without objects.

        return (
            <h1>Hellow {input_name}</h1>
        );
    }

    <Nameplate input_name=username />

```

## States - 
States are special variables in React components that allow you to store and manage dynamic data. Unlike props, which are read-only and passed from parent to child, state is local to a component and can be updated using the `useState` hook (in functional components). When state changes, React automatically re-renders the component to reflect the new data.

Example:
```javascript
    const Tapper = () => {

        const [cunt, Up_cunt] = useState(0);

        /*
        const [var, callback_function] = usestate() [Hook] 
        This Callback Function changes the var. and rerenders the component 
        */

        const inc_bitch = (input_value) => Up_cunt(cunt + 1);

        /*
        Custom funciton with callback.
        */

        return (
            <>

                <p>This is no. of cunt I have : {cunt}</p>
                <button onClick={inc_bitch}></button>

            </>
        );

    }
```
- Use state to track values that change over time (like user input, toggles, counters, etc.).
- Updating state triggers a re-render, so the UI stays in sync with your data.
- State is isolated to each component unless you lift it up or use context for sharing.

# Prop Data Validation : 

```bash 
    npm install prop-types
```

# Forms :
[Here is the form](./src/form.jsx)

# Component Lifecycle.
[Here is the code](./Component_lifecycle.jsx)


# UseEffect - 
The `useEffect` hook in React lets you perform side effects in functional components. Side effects include data fetching, subscriptions, manually changing the DOM, timers, and more. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

## Basic Usage

```javascript
import { useEffect } from 'react';

useEffect(() => {
    // Code here runs after every render
    console.log('Component rendered or updated!');
});
```

## Run Only Once (on Mount)

```javascript
useEffect(() => {
    // Runs only once after the first render (componentDidMount)
    fetchData();
}, []); // Empty dependency array
```

## Run When Dependencies Change

```javascript
useEffect(() => {
    // Runs when 'count' changes
    document.title = `Count: ${count}`;
}, [count]);
```

## Cleanup (like componentWillUnmount)

```javascript
useEffect(() => {
    const timer = setInterval(() => {
        // Do something
    }, 1000);

    return () => {
        clearInterval(timer); // Cleanup on unmount or before next effect
    };
}, []);
```

**Summary:**
- `useEffect` runs after render.
- Pass a dependency array to control when it runs.
- Return a function for cleanup.
- Useful for data fetching, subscriptions, timers, and manual DOM changes.