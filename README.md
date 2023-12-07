# namaste-react
Ep- 1
**CDN Links and how they are used**

In the provided code, you're accessing React without importing it in `App.js` by using **CDN (Content Delivery Network) links**. These links allow you to directly load React libraries from a remote server instead of bundling them with your application.

Here's a breakdown of how each link is used:

* **[https://unpkg.com/react@18/umd/react.development.js](https://unpkg.com/react@18/umd/react.development.js):** This link loads the React library itself. The `@18` specifies the version number, and `umd` indicates that it's the Universal Module Definition (UMD) version, which works in both CommonJS and AMD environments. Finally, `development.js` is the development build, which includes helpful warnings and error messages.
* **[https://unpkg.com/react-dom@18/umd/react-dom.development.js](https://unpkg.com/react-dom@18/umd/react-dom.development.js):** This link loads the React DOM library, which is responsible for rendering React components to the browser. It uses the same version and build type as the React library.

By including these CDN links in your HTML, you're essentially telling the browser to download and execute these libraries before running your own code. Once loaded, they become available globally in the browser window, allowing you to use them directly without importing them in your JavaScript files.

This approach is often used for small projects or prototypes where you want to avoid setting up a build process. However, it has some drawbacks compared to bundling your libraries:

* **Increased page load time:** The browser needs to download the libraries from the CDN each time you load the page, which can slow down initial loading.
* **Reduced control over versions:** You're relying on the CDN to provide the correct versions of the libraries, and they may not be updated as quickly as you would like.
* **Potential security risks:** You're downloading code from a third-party server, so you need to be sure that it's trustworthy.

In general, for larger projects or production environments, it's recommended to use a build tool like Webpack or Parcel to bundle your libraries with your application code. This will create a single file that contains all the necessary code, which will improve performance and security.

However, if you're just starting out or working on a small project, using CDNs can be a quick and easy way to get started with React.


**App.js**

React starter code concepts in detail

This code snippet demonstrates how to use React to create and render HTML elements. Here's a breakdown of the code with explanations for each keyword:

**Line 1:**

```javascript
const parent = React.createElement("div", { id: "parent" }, [
```

* `const`: keyword used to declare a constant variable.
* `parent`: variable name used to store the created element.
* `React.createElement`: built-in function from the React library used to create a React element.
* `"div"`: first argument to `React.createElement` specifying the type of element to create (a "div" element).
* `{ id: "parent" }`: second argument to `React.createElement` specifying the element attributes as an object (id attribute set to "parent").
* `[]`: third argument to `React.createElement` specifying the children elements of the "div" element (placed within an empty array).

**Lines 2-6:**

```javascript
React.createElement("div", { id: "client" }, [
  React.createElement("h1", { id: "heading" }, "Hello World"),
  React.createElement("h2", { id: "heading 2" }, "Hello World 2"),
]),
```

* This section creates a child "div" element with the ID "client" and two child elements:
    * An "h1" element with the ID "heading" and the text content "Hello World".
    * An "h2" element with the ID "heading 2" and the text content "Hello World 2".

**Lines 7-11:**

```javascript
React.createElement("div", { id: "client 2" }, [
  React.createElement("h1", { id: "heading" }, "Hello World"),
  React.createElement("h2", { id: "heading 2" }, "Hello World 2"),
]),
```

* This section creates another child "div" element with the ID "client 2" and the same two child elements as the previous "client" element.

**Line 12:**

```javascript
]);
```

* This closes the array containing the child elements of the parent "div" element.

**Line 13:**

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
```

* `ReactDOM`: another built-in function from the React library, specifically used to manage the DOM and render React elements.
* `createRoot`: function used to create a root container where React elements can be rendered.
* `document.getElementById("root")`: argument to `createRoot` specifying the HTML element with the ID "root" where the React elements will be rendered.

**Line 14:**

```javascript
root.render(parent);
```

* `render`: function used to render the specified React element (the "parent" variable containing all child elements) into the designated root container.

**Overall:**

This code creates a "div" element with the ID "parent" as the root element and renders it into the HTML element with the ID "root". The parent element contains two child "div" elements with different IDs, each containing an "h1" and an "h2" element displaying the text "Hello World" and "Hello World 2", respectively.

**Keywords explained:**

* `const`: declares a constant variable.
* `let`: declares a variable that can be reassigned.
* `React.createElement`: creates a React element.
* `{ }`: object literal used to specify attributes.
* `[]`: array used to define child elements.
* `ReactDOM.createRoot`: creates a root container for React elements.
* `document.getElementById`: used to access an HTML element by its ID.
* `root.render`: renders a React element into a specific root container.
* `"div"`: HTML element tag for a division.
* `"h1"`: HTML element tag for a heading of level 1.
* `"h2"`: HTML element tag for a heading of level 2.
