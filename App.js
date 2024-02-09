import React from "react";
import ReactDOM from "react-dom/client";
//destructing 
/*
<div id="parent">
    <div id="child">
        <h1> I'm heading one </h1>
    </div>
</div>
*/

// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello world from React 122 123213");
// console.log(heading); // HTML Tag

// 1. tag name, 2. Attributes 3. Children

// const parent = React.createElement("div", {
//     id: "parent"
// }, React.createElement("div", {
//     id: "child"
// }, React.createElement("h1", {}, "I'm headingone")));  // JSX

// ========JSX==========

// React Element
// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello world from React 122 123213");
// console.log(heading);

// JSX -> React Elements -> Browser Understandable code -> Parcel -> Babel

// React Element = JSX
const heading1 = (
    <h1 id="heading"> Hello world from React JSX</h1>
);

// React Functional Comp = Javascript function 
// 1. Capital letter
// 2. Javascript fun => arrow fun
// 3. return JSX
const Title = () => {
    return <h1>This is title comp</h1>
}

const counter = 100; // cross site scripting 
// React functional component - a js function which returns react element or JSX code
const Heading3 = () => {
    return (
        <>
            <div>
                <div></div>
                <h1 id="heading">
                    {
                        // JS code 
                        counter
                    }
                    In a good way
                </h1>
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
            </div>
            <div></div>
        </>
    )
}
// React component composition

const fn = () => {
    return true;
}

const fn1 = () => true;

const fn2 = function(){
    return true;
}

//console.log(Heading3);

//closure
//hoisting
//fun currying
//debouncing 
//throttling
//arrow fun vs normal fun
//var const let 


// React Components
// 1. Class based - 
// 2. Functional based - Javascript functions 


const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(Heading3); // won't work
root.render(<Heading3 />);


