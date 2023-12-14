const fs = require("fs");
const read = (path) => fs.readFileSync(path, "utf8");

const React = require("react");
const ReactDOMServer = require("react-dom/server");

const Index = React.createElement(require("./lib/index"), {
  groups: JSON.parse(read("./sample-data/front-page.json")),
});

const contents = read("./index-template.html")
  .replace("{{scripts}}", read("./lib/client/main.js"))
  .replace("{{styles}}", read("./public/index.css"))
  .replace("{{body}}", ReactDOMServer.renderToStaticMarkup(Index));

fs.writeFileSync("./public/index.html", contents);
