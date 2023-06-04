
import './App.css';
import React from 'react';
import Editor from "@monaco-editor/react";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [HTML, setHTML] = useLocalStorage("HTML", "")
  const [CSS, setCSS] = useLocalStorage("CSS", "")
  const [JS, setJS] = useLocalStorage("JS", "")

  const [active, setActive] = React.useState("HTML")

  const IFRAMECODE = `
  <html>
    <head>
      <style>
        ${CSS}
      </style>
    </head>

    <body>
      ${HTML}

      <script> 
        ${JS}
      </script>
    </body>

  </html>
  `

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Editor</h1>
      <div style={{ display: "flex", border: "1px solid black" }}>
        {/* editor */}
        <div style={{ width: "100%" }}>
          <button onClick={() => setActive("HTML")} style={{ color: active === "HTML" ? "red" : "black" }}>HTML</button>
          <button onClick={() => setActive("CSS")} style={{ color: active === "CSS" ? "red" : "black" }}>CSS</button>
          <button onClick={() => setActive("JS")} style={{ color: active === "JS" ? "red" : "black" }}>JS</button>

          {active === "HTML" &&
            <Editor
              height="60vh"
              defaultLanguage="html"
              defaultValue={HTML}
              onChange={(value, event) => setHTML(value)}

            />
        
          }
          {active === "CSS" &&
            <Editor
              height="60vh"
              defaultLanguage="css"
              defaultValue={CSS}
              onChange={(value, event) => setCSS(value)}
            />

  

          }
          {active === "JS" &&
            <Editor
              height="60vh"
              defaultLanguage="javascript"
              defaultValue={JS}
              onChange={(value, event) => setJS(value)}
            />
     
          }


        </div>

        {/* result */}
        <div style={{ width: "100%", height: "66vh" }}>
          <iframe height={"100%"} width={"100%"} srcDoc={IFRAMECODE} />

        </div>
      </div>
    </div>
  );
}

export default App;
