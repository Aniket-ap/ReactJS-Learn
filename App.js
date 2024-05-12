const heading = React.createElement("div", {
    class: "parent"
}, React.createElement("div", {
    class: "child"
}, [
    React.createElement("h1", {}, "Hello Nested Elemnts"),
    React.createElement("h2", {}, "Hello Nested Elemnts"),
]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);