// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "client" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "heading 2" }, "Hello World 2"),
  ]),
  React.createElement("div", { id: "client 2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "heading 2" }, "Hello World 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
