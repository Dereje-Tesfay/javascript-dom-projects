let body=document.body;
body.append("  well come")

// const h1=document.createElement("h1");
// h1.textContent="hello world"
// body.append(h1)

let text=document.querySelector("div")
console.log(text.textContent);
console.log(text.innerHTML);


//differnt from innerhtml and textcontent
let vars=document.body;
vars.innerHTML="<h1>Hell woldia</h1>";

vars.append(vars);

let display=document.body
display.textContent="<h1>Hell woldia</h1>";
display.append(display);


