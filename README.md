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
<br>
<br>
So you're comfortable working with props, congratulations! Using props allows us to pass values or functions down to a child component.
<br>
State is another integral concept we must learn in React. It allows us to store values, and React automatically updates our UI when the values change.
<br>
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
<br>
To get comfortable with React, you must learn declarative programming.
<br>
React is declarative. So you need to think in "declarative programming" whenever you work with React, and this exercise is perfect for that. This is the "opposite" of imperative programming which is the paradigm used in Vanilla JavaScript.

<br>
In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.
<br>
<br>
Given an array:
<br>
['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
<br>
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
Our example list is not that big, but imagine if the list contains thousands of items, which is true when working with real-life data and real-world applications. You wouldn't want to manually code each "li" one thousand times, right?
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


Exercise 6: Mapping Through A List And Rendering (With A Custom Component)
<br>
<br>
In exercise 3, we mentioned that part of what makes React so great is that it allows us to create our custom, re-usable components.
<br>
You only created a custom button there. This time, you'll create a custom component that displays each item from exercise 5:
<br>
['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
<br>
Instead of using the <ul> and <li> HTML tags, create a custom component that accepts a list as its prop, and renders it accordingly.
<br>
It's up to you how you want this list will look like. I decided mine to look like this:
<br>
<img src = "https://refactor-platform-store.objectstore.e2enetworks.net/c27efe73-d3fb-4c01-9c45-3f58da30e23c_upload1.png" alt="" id="personal_image">
<br>
<br>
What's the point of creating custom components? You'll be able to re-use them. Think of it like creating your own functions.
<br>
Instead of copy-pasting the same lines of code everywhere you need them, you put those blocks of code inside a separate function, and you just call that function whenever you need it.
<br>
This is very good practice because if you need to make changes to your code, you don't need to change it in every place where you used it. You just need to change it in one place.
<br>
That's one of the many benefits of using custom components. There are more reasons to using custom components, which needs a whole new blog post, but this is a good start.
<br>
<br>
Helpful links:
<br>
React props and components - https://reactjs.org/docs/components-and-props.html
<br>
map() function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
<br>
rendering lists in React - https://reactjs.org/docs/lists-and-keys.html


--------------------------------------------------------------------------------------------------


Exercise 7: Building a form
<br>
<br>
Unleash some more power from React by building a form. React is great for this.
<br>
Build a form that accepts a first name and a last name. And instead of a boring "Submit" button, make a button that says "Greet Me" that when clicked, will alert "Hello [first name] [last name]!".
<br>
<br>
Here you will use a combination of concepts from previous exercises, such as using state, and event listening both on text input and button click.
<br>
But there is one specific concept we didn't tackle yet:
<br>
React forms and onChange() function - https://reactjs.org/docs/forms.html


--------------------------------------------------------------------------------------------------


Exercise 8: Rendering JSON
<br>
<br>
Most of the time, the structure of the data we're working with in real-world applications aren't simple lists like ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'].
<br>
<br>
A lot of data is stored in JSON format. This is especially true when you're fetching data from a database.
<br>
<br>
JSON stands for JavaScript Object Notation, a type of format for data interchange.
<br>
<br>
This type of data is just an object instead of a simpler datatype such as a string.
<br>
For example, an array of JSON objects looks like this:
<br>
<br>
[
<br>
	{
 <br>
		id: 1,
  <br>
		setup: "What's the best thing about a Boolean?",
  <br>
		punchline: "Even if you're wrong, you're only off by a bit"
  <br>
	},
 <br>
	{
 <br>
		id: 2,
  <br>
		setup: "Why do programmers wear glasses?",
  <br>
		punchline: "Because they need to C#"
  <br>
	}
 <br>
]
<br>
To keep it simple, let's keep it to only two items.
<br>
<br>
Using the array of objects above, render the jokes with React.
<br>
<br>
Here's how I decided to render mine:
<br>
<br>
<img src = "https://refactor-platform-store.objectstore.e2enetworks.net/99e12f85-c8e6-4cd6-9065-0137dc0c34bc_upload2.png" alt="" id="personal_image">
<br>
<br>
Tip:
<br>
Create a custom component for rendering each joke.
<br>
Using the map function, map through each object in the array. Use the custom component to render each object.
<br>
<br>
Helpful links:
<br>
JSON - https://www.w3schools.com/js/js_json_intro.asp
<br>
Flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/


--------------------------------------------------------------------------------------------------


Exercise 9: Working with an API
<br>
<br>
Last but definitely not the least, work with an API and build a simple frontend:
<br>
<br>
<img src = "https://s4.gifyu.com/images/ezgif.com-gif-maker110eb04c467ee323.gif" alt="" id="personal_image">
<br>
<br>
Every React or any frontend developer must learn how to work with an API. When building applications, you receive data from the backend or an outside source which you will have to present nicely in the UI.
<br>
<br>
Fetch from this API endpoint: https://random-data-api.com/api/users/random_user?size=10
<br>
<br>
This will return ten random users.
<br>
<br>
Here we'll put together everything we did from the previous examples:
<br>
<br>
Show each user's basic info in a card.
<br>
When a card is hovered upon, the card flips to show more information about the user.
<br>
There should also be a button that when clicked, will fetch another set of 10 random users, which updates the cards.
<br>
<br>
Here are the steps for this exercise:
<br>
1. Fetch the data from the URL. You also have to handle converting the JSON response into a JavaScript object in this process. (See Response.json() resource link below)
<br>
2. Store it in React state.
<br>
3. Render the data based on the state.
<br>
4. Take note that most APIs return data in the form of JSON. Good thing we already covered JSON in the previous exercise 😄
<br>
<br>
Hints:
<br>
<br>
Do the fetching inside a useEffect React hook
<br>
Create a custom component for the card, which accepts a user JSON object. Map through the data returned from the API and render each one using the custom component.
<br>
<br>
Helpful links:
<br>
What is an API? In English, please - https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/
<br>
How to use Fetch API - https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
<br>
Response.json() function - https://developer.mozilla.org/en-US/docs/Web/API/Response/json
<br>
React useEffect hook - https://reactjs.org/docs/hooks-effect.html
<br>
<br>
We'll also be needing a lot more CSS, especially for the card hover effect:
<br>
Card flip effect - https://www.w3schools.com/howto/howto_css_flip_card.asp



--------------------------------------------------------------------------------------------------
