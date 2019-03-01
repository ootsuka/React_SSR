# React_SSR
# React Server Side Rendering Boilerplate
This is a project to demonstrate the basic of how to do server side rendering with react. Server Side Rendering will be referred as SSR

## What's included?
* Server Side rendering React
* Webpack configuration
* Build Routing in SSR
* Use Redux with SSR
* Make Node server fetch data with proxy
* Handle CSS in SSR
* Use React Loadable to do code splitting
* Build 404 page and 301 redirect
* Dockerized for production

## Initial Setup
```
npm install
```
## Development
```
npm run dev
```
## Production
```
npm run prod
```
## General Architecture
The src code has two parts, server and client code. Server is a express application whose purpose is to handle user request, fetch data, generate content and return the response to the user. ```Server/util``` renders react component to String and inject the html string into response. Fetching data on the server side is done with a static loadData method to the highest class component rendered for a route, the method returns a promise which will be resolved with other promises in ```Server/index.js``` to guarantee the store gets all the data before rendering. loadData is added to ```Routes.js``` as a property for a route object so it can be accessed with ```{ matchedRoutes }```
Client Part is just a standard react application with some components. ```Sidebar/Math.js``` is a dynamically imported component for purpose of testing out code splitting with React Loadable.
## RoadMap
* Add test for the project.
* Conditionally load pollyfills
* React Helmet for dynamic manipulation of the document <head />

