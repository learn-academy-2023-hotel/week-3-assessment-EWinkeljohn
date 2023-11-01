# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?


Your answer:

JSX is a language used in React that consists of both HTML and JavaSctipt. One syntax difference between HTML and JSX is the use of JSX fragment tags rather than a div on its own. 

Researched answer: 

JSX is a markdown sytax extension of JavaScript that behaves similarly to HTML. JSX enables developers to using React to create UI. A key difference between HTML and JSX is the syntax 'className' in JSX. Because HTML's syntax 'class' is already a reserved word in JavaScript, JSX uses className to differentiate. The className can then be called on in CSS with .className as a class would be. 

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:

Yarn is a library of node modules. These node modules are snippets of JavaScript code that previous developers have seen as useful, and put together in a library for other developers to pull as one. When the command yarn is run in the terminal, many files are modified including those that allow a developer to create and run a React app. 

Researched answer:

Yarn is a package manager of JavaScript dependancy files created by Facebook in 2016. Dependancies contain snippets of JavaScript code functionality that all must work in the right way to perform a desired task, such as running tests using Jest. Because there are many dependancy files and they all must be organized correctly, Yarn is a crucial package manager. It installs and manages dependancies for developers, and allows us to access access and utilize those dependancies in the terminal. 

3. What is the difference between state values and props in React?

Your answer:

State values an element of a type of variable in React called useState that is perfect for storing information that will be updated on the webpage. The useState is declared equivalent to a state value and a state function, and given a starting point for the state value. The state value is then updated by invoking the state function. 

Props is passed as a parameter in a nested function of a React app. The props parameter operates as a pipeline passing information upstream from the nested component to the DOM. The state value can be passed in the nested component function as the argument in place of the parameter props. 

Researched answer:

State is a data structure used to store data in a React component, that can then be accessed anywhere within the React component. State is created by the useState method, which defines a variable, the varibales defualt value, and a function that will be used to update the variable. useState is an example of a React hooks. Hooks are a collection of built-in methods in React that allow developers to access reusable features. 

Props is a specialized tool in React that allows the transfer of both both data and behavior between components. Props is unidirectional, passing information downstream to nested components when the component is invoked. Because props's data structure is an object, it can be used to pass as much information via key value pairs as needed. Data communicated through props often comes from the state value. While state is made to change and update, props is "read-only" and do not change, but pass the updated state through the pipeline from one component down to the next. 


4. STRETCH: Which is the difference between a div tag and a span tag?

Researched answer:

A div tag is know as a block-level element, meaning it spans horizontally across the entirety of the webpage and browsers automatically put it on a new line of the webpage and add some margin on the top and bottom. This makes it useful to wrap whole sections of a webpage, and group together large amounts of content. Other examples of block-level elements are the <p> tag and <footer> tag. The span tag is an inline element, meaning the browser does not put the contnt on a new line of the webpage, and only takes up the necessary width on the webpage. The span tag is useful for grouping small sections of text or images. Other examples of inline elemenmts are the <button> tag and <img> tag.  

## Looking Ahead: Terms for Next Week

1. DOM: The document object model (DOM) is created by HTML when a webpage is loaded. With the creation of a DOM, developers can use JavaScript to access and change the content displayed on the webpage. 

2. Object-oriented programming: Otherwise known as OOP, object-oriented programming was created to allow developers to section off parts of code to make edits without effecting the entire program. 

3. Ruby: Ruby is an object-oriented language that is known for simplicity and ease of writing and reading. It is an interpreted and dynamically-typed language. 
