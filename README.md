<h1> <b>React Excerise</b> </h1>:

Exercise 1: Hello World!

This will asses if you actually know HTML, which is one of the many prerequisites before learning React. 
<br>
- Step 1: Start by rendering a square with a background color. 
- Step 2: Inside the square, render "Hello, World!".

<img src="https://refactor-platform-store.objectstore.e2enetworks.net/41e2ae7b-86df-448e-9079-3533dd58f28a_0%202.jpg" alt="" id="personal_image">

Helpful links:
HTML - https://www.w3schools.com/html/
<br>
Center a text inside a div - https://www.w3schools.com/css/css_align.asp
 
---------------------------------------------------------------------------------------------------


Exercise 2: Capturing User Clicks

What makes a web app different from a static website? A web app is interactive. Of course, there's more to web apps than capturing clicks, but it's important to start from the basics.
<br>
This exercise gets you started with event handling, which is a basic concept not only in React but also in JavaScript (which is again another pre-requisite before learning React).
<br>
Using the native HTML "button" tag, capture the click event and alert the message, "Clicked!".
<br>
Take note that capturing events such as clicks is done differently in React than it is in JavaScript.
 
<img src="https://refactor-platform-store.objectstore.e2enetworks.net/14c82270-3101-48cd-9d24-414aa6959f66_1.jpg" alt="" id="personal_image">
<br>
Helpful links:
<br>
Handling events in React - https://reactjs.org/docs/handling-events.html
<br>
Alert() method - https://www.w3schools.com/jsref/met_win_alert.asp

--------------------------------------------------------------------------------------------------


Exercise 3: Custom Component

In the previous exercise, we used the HTML "button" tag. But much of the power that React provides to us developers is being able to create our own components and reuse them.
<br>
You'll be creating more complicated custom components than a simple button in the near future, but we all gotta start somewhere.
<br>
In this exercise, build your own Button component and render it three times. On user click, it should alert which button was clicked:

<img src = "https://refactor-platform-store.objectstore.e2enetworks.net/408e0d84-fe00-4524-bad6-c568da692a3d_2.jpg" alt="" id="personal_image">

<br>
The custom component should accept an onClick prop. On render, it should render the children betwen the button. This is the text you want for the button.
<br>
Think of it like the HTML "button" tag. Whatever text you place between the opening and closing tag is rendered between the button when you inspect the element in your browser developer console.
<br>
On user click, it should alert which button was clicked.
<br>
<br>
Helpful links:
<br>
React props and components - https://reactjs.org/docs/components-and-props.html
<br>
"children" in React - https://stackoverflow.com/questions/49706823/what-is-this-props-children-and-when-you-should-use-it
<br>
How to inspect element with developer console - https://www.browserstack.com/guide/inspect-element-in-chrome


--------------------------------------------------------------------------------------------------


Exercise 4: State and Props
So you're comfortable working with props, congratulations! Using props allows us to pass values or functions down to a child component.
<br>
<br>
State is another integral concept we must learn in React. It allows us to store values, and React automatically updates our UI when the values change.
That's one of the many beautiful things with React. We don't need to manually handle these things - React does the UI re-rendering for us when a value changes. But we must know how to use the state for this purpose.
<br>
This exercise is simple, and is a very common React tutorial out there. Use the useState React hook to track how many times a button is clicked, and display the number.
<br>
The number must increment each time the button is clicked:

<br>
<br>
Helpful link:
<br>
React state hook - https://reactjs.org/docs/hooks-state.html


--------------------------------------------------------------------------------------------------


Exercise 5: Mapping Through A List And Rendering
<br>
To get comfortable with React, you must learn declarative programming.
<br>
React is declarative. So you need to think in "declarative programming" whenever you work with React, and this exercise is perfect for that. This is the "opposite" of imperative programming which is the paradigm used in Vanilla JavaScript.

<br>
In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.
<br>
Given an array:
<br>
['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
<br>
Use the map function to render them in an unordered list:
<br>
dog
<br>
cat
<br>
chicken
<br>
cow
<br>
horse
<br>
<br>
Once you learn the concept of rendering declaratively, you'll see how much life becomes easier (overstatement).
<br>
But think of it this way...
<br>
Our example list is not that big, but imagine if the list contains thousands of items, which is true when working with real-life data and real-world applications. You wouldn't want to manually code each <li> one thousand times, right?
<br>
And what if the data changes? This is the case when working with data in production environment. You'll have to change the code again.
<br>
But not when you rendered the list declaratively. When the data changes, and you rendered your data presentation declaratively, a.k.a. the smart way, then your declarative code does the change for you.
<br>
<br>
Helpful links:
<br>
Declarative programming vs. imperative programming - https://learn.co/lessons/react-declarative-programming
<br>
map() function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
<br>
rendering lists in React - https://reactjs.org/docs/lists-and-keys.html

--------------------------------------------------------------------------------------------------
