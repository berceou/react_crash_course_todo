# React Crash Course  

## Demo  
![demo-todo-list](img\todolist-react-crash-course.gif)

## What is the React
**React** is library of JavaScript created by Facebook and is used for building user interface (UIs) and/or front-end applications. It is often called a framework because of it's behavior and capabilities.  

## Why Use It?

Makes front-end JavaScript much easier. JS does allow us to interact with the **DOM** and create user interface *(vanilla.js much more difficult to do the same things that you could do with a framework )*. It makes it very easy to build intricate front-end projects. It is also very organized and It uses self-contained independent components that have theit own state and this allows us to build really interactive user interfaces.  

**Virtual DOM** allows us to only update what is needed as opposed to the whole page.  
React also uses something called **JSX** which allows to use JavaScript right in our markup right in our HTML markup.  

Easy to work with teamsbecause it's organized and everyone can be on the same page you can assign different developers to work on different components rather than having one big monolithic code base that is vert confusing for multiple people to work on.  

## What Should You Know Before Learning React

- JavaScript Fundamentals (Objects, Arrays, Conditionlas, etc)  
- It may help to learn these first:  
    + Classes
    + Destructing  
    + High Order Array Methods (forEach, map, filter)  
    + Arrow Functions  
    + Fetch API & Promises  

## React State 

*ToDo App Components:* Search, TodoList, Todo, Add Todo  

Components can have **state** which is an object that determines how that component renders and behaves. A state object for a simple post component so it has a title, a body, and isFeatured which is a boolean value so we could render this data out when we could also choose to display it differently like depending on if isFeatured is true or false. Maybe add a border to the back or something like that and we can have events to dynamically update the state and it would automatically reflect or react in the UI.  
We can also have "*application-level state*" by using a state manager like Redux or Reacts own context API. Sometimes we need what's called application-level state and that is data that you want to share between multiple components in our case it is going to be our **ToDos**. 

## Create React APP

- **CLI Tool** for creating React applications. CLI tool a command-line interface tool basically it create like a boilerplate app that we can built from.  
- Uses **Webpack** which is a module   bundler and you can use webpack on its own without create react app but it is difficult to configure.  
- Comes bundled with a dev server with hot reload. It auto-reload as you save it.   
- "*npm run built*" will compile all your code to something that the browser can read Ypur code will compile into static assets that the browser can read that you can actually deploy.  

## Anatomy of a Component

```javacript
Class Post extends React.Component {
    state = {
        title: 'Post One',
        body: 'This is my post'
    }
    render() {
        return {
            <div>
                <h3>{ this.state.title }</h3>
                <p>{this.state.body}</p>
            </div>
        }
    }
}
```  
We can have functional components as well this is a *class-based* component which has what's called a **life-cycle** and We can have different life-cycle methods also It holds state functional components can only hold state if they use something called **react hooks**.  
Basically We have a class called post so It is a post component It extends the component class in the react library and We have our **render** method which is the only required life-cycle method and this takes care of rendering the component on the page.  
It's going to return whta's called **JSX**. It is very similar to HTML and we can have JavaScript expressions embedded directly in the markup.  
So as you can see in code, We are displaying the title and the body from the state and we can create component state by simply creating a state object with different key value pairs. *(We could put any kind of JS expression we want inside curly braces. So It is very dynamic we can also have events all types of stuff that we are going to get into.)*    

# Full To-Do-List

## Before Starting
```
npx create-react-app .
```

VS Code ES7+ React/Redux/React-Native/JS snippets is highly recommend it for react development. It allow us to generate components really quick once. (RCE+TAB)  

For random id generator:
```npm i uuid```  

For react router:
```npm i react-router-dom```  

For fetch API:
```npm i axios```  

For [JSON placeholder-todos](https://jsonplaceholder.typicode.com/todos)

## Folder Structure  
</br>  

<img aling="left" width=200 src="img\structure of folder.png">  
</br>   

Go over structure that was generated and some of the important files.  

- The core **Package.json** which is a manigest file that has some information about our app. It has all the dependencies all the packages that are being used and if we install other packages those will get put here.      
    + Dependencies:  
        + *react* which is the library itself.  
        + *react-dom* which has to do with loading components in the browser.  
        + *react-scripts* which has todo with dev server being able to compile and run tests,etc.  
    + Scripts:  
        + *react-scripts start* that will start our dev server.  
        + *react-scripts built* basically compile all of our code into something that the browser can read without needing a dev server.  
        When we before deploy ```npm run``` and then deploy the code.  
        + *react-scripts test* We can also run tests  
        + *react-scripts eject* We can also eject from create react app if You want to customize your webpack file.  
- **Public** Folder:  
    + *Index.html* everything runs through one pysical single page. It includes ```<div id="root"></div>```     Everything outputs in here.  
- **Src** (source) Folder:  
    + *Index.js* This is the entry point to react.  
    + *App.js* This formatted the like any other class-based components.  
    + *component*
    + *pages* 
## Fetch API

Sing make a request to this [JSON Placeholder-todos](https://jsonplaceholder.typicode.com/todos) URL. And we can get all of these todos. For fetch API, using **axios**.  
 For this, empty the todos completely.