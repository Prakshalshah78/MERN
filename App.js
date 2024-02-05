import React from "react";
import { ReactDOM } from "react-dom";
/*
<div id="parent">
    <div id="child">
        <h1> I'm heading one </h1>
    </div>
</div>
*/

const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from React 122 123213");
console.log(heading); // HTML Tag

// 1. tag name, 2. Attributes 3. Children

// const parent = React.createElement("div", {
//     id: "parent"
// }, React.createElement("div", {
//     id: "child"
// }, React.createElement("h1", {}, "I'm headingone")));  // JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

