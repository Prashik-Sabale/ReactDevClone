
import './Data.css';
import mockup from '../src/img/mockup.png'

export let titles = ["Quick Start", "Thinking in React", "Installation", "Create Project"]

export let contents = [
    <div className="content-container">

        <div className="ans-div">
            <p>
                Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.
            </p>
            <h4>Creating and nesting components </h4>
            <p>
                React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
            </p>
        </div>
        <div className="code-div-container">
            <h4>React components are JavaScript functions that return markup:</h4>
            <div className="code-div">
                <code >
                    <pre className='code'>
                        {
                            `
                            function MyButton() {
                                return (
                                  <button>I'm a button</button>
                                );
                              }
                            `
                        }
                    </pre>
                </code>
                <h4>Now that you’ve declared MyButton, you can nest it into another component:</h4>
                <code >
                    <pre className='code'>
                        {
                            `
                            export default function MyApp() {
                                return (
                                  <div>
                                    <h1>Welcome to my app</h1>
                                    <MyButton />
                                  </div>
                                );
                              }
                            `
                        }
                    </pre>
                </code>
            </div>
        </div>

    </div>,
    // ************************************************************************************************
    <div className="content-container">
        <div className="ans-div">
            <p>
                React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.
            </p>
            <p>
                <h4>Start with the mockup  </h4>
                Imagine that you already have a JSON API and a mockup from a designer.
                The JSON API returns some data that looks like this:
            </p>
        </div>
        <div className="code-div-container">
            {/* <h3>React components are JavaScript functions that return markup:</h3> */}
            <div className="code-div">
                <code>
                    <pre>
                        {
                            `
                            [
                                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
                              ]

                            `
                        }
                    </pre>
                </code>
                <h3>The mockup looks like this:</h3>
                <img src={mockup} width="300px" height="400px" alt="" />
            </div>
        </div>

    </div>,
    // ************************************************************************************************

    <div className="content-container">
        <h2>Installation</h2>
        <div className="ans-div">
            <p>
                React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.
            </p>
            <p>
                <h3>Try React </h3>
                You don’t need to install anything to play with React. Try editing this sandbox!
            </p>
        </div>
        <div className="code-div-container">
            <h3>App.js</h3>
            <div className="code-div">
                <code>
                    <pre>
                        {
                            `
                            function Greeting({ name }) {
                                return <h1>Hello, {name}</h1>;
                              }
                              
                              export default function App() {
                                return <Greeting name="world" />
                              }
                            `
                        }
                    </pre>
                </code>
            </div>
        </div>

    </div>,
    // ************************************************************************************************

    <div className="content-container">
        <h2>Create a New React App</h2>
        <div className="ans-div">
            <p>
                Use React Developer Tools to inspect React components, edit props and state, and identify performance problems.
            </p>
            <p>
                Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
                It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
            </p>
        </div>
        <div className="code-div-container">
            <h3>Create App CMD</h3>
            <div className="code-div">
                <code>
                    <pre>
                        {
                            `
                            npx create-react-app my-app
                            cd my-app
                            npm start
                            
                            `
                        }
                    </pre>
                </code>
            </div>
        </div>

    </div>,
    // ************************************************************************************************

]