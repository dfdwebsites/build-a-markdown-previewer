import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

// marked.setOptions({
//   breaks: true,
//   highlight: function (code) {
//     return Prism.highlight(code, Prism.languages.javascript, 'javascript');
//   }
// });

marked.setOptions({
  breaks: true,
  gfm: true
});

const placeHolder = `# Welcome Iordanis Tselepidis Markdown Previewer!

## A project for freeCodeCamp Front End Development Libraries Certificate


### Lets talk about ES6

- Arrow Function
- Template Literals for String Interpolation
- Default Parameter Values

<br>

#### Arrow function

Simple syndax, \`const exampleFunction = ()=>{...do something with function} \`.

\`\`\`
// ES5
function sayHelloES5(name) {
  return 'ES5 Hello, ' + name;
}
console.log(sayHelloES5('Sandy')) // ES5 Hello, Sandy
// ES6
const sayHelloES6 = (name) => {
  return \`es6 Hello, $\{name}\`;
}
console.log(sayHelloES6('Sandy')) // ES6 Hello, Sandy

\`\`\`

<br>

#### Template Literals for String Interpolation

\`\`\`
// in ES5, you have to use +
var es5Name = 'Sandy';
console.log('Welcome, ' + es5Name); // Welcome, Sandy
// in ES6, you can simply embed the variable within the same string
// enclosed in \`\`
const es6Name = 'Sandy';
console.log(\`Welcome, $\{es6Name}\`)  // Welcome, Sandy

\`\`\`

<br>

#### Default Parameter Values

\`\`\`
// ES5
function rewardPoint(name, point) {
  return name + ' has been rewarded: ' + point;
}
console.log(rewardPoint('Sandy')); // Sandy has been rewarded: undefined
// ES6
const rewardPoint = (name, point=50) => {
  return \`$\{name} has been rewarded: $\{point}\`;
}
console.log(rewardPoint('Sandy')); // Sandy has been rewarded: 50

\`\`\`

<br>

**Here is my PortFolio**: [www.dfdwebsites.com](https://www.dfdwebsites.com)




![Logo](https://www.dfdwebsites.com/assets/dfdFilledinverted.png)

> It's never too late to chase your dreams
`;

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(placeHolder);
  }, []);
  return (
    <div className="app">
      <h2>Editor</h2>
      <textarea
        className="editor"
        type="text"
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>Preview</h2>
      <div
        className="previewer"
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      />
    </div>
  );
}

export default App;
