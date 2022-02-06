# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# React Crash Course  

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

## before starting
```
npx create-react-app .
```
**NOTE:** "." meaning I want to generate the app in this folder.  

VS Code ES7+ React/Redux/React-Native/JS snippets is highly recommend it for react development. It allow us to generate components really quick once. (RCE+TAB)  

for random id generator:
```npm i uuid```

for react router:
```npm i react-router-dom```

for fetch API:
```npm i axios```
for [JSON placeholder-todos](https://jsonplaceholder.typicode.com/todos)

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
    + 
componentleri ekle. 
## Fetch API
 
Using make a request to this [JSON Placeholder-todos](https://jsonplaceholder.typicode.com/todos) URL. And we can get all of these todos. For fetch API, using **axios**.
 For this, empty the todos completely.