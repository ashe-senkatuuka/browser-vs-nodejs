console.log('Hello World');

/**
 * Here are some differences between the NodeJs environment and the 
 * browser environment when running Javascript. The language used is
 * the same however the environment differs in some ways.
 */

/**
 * The window object is the global object in browser environments. It represents the browser window
 * and provides access to browser-specific APIs and properties.
 * The window object does not exist in Node.js. Node.js runs in a server environment, not a browser,
 * so there's no concept of a browser window.
 */
console.log(window);


/**
 * The document object is part of the browser's DOM (Document Object Model).
 * It represents the web page loaded in the browser and provides methods to interact with
 * the page's content.
 * The DOM/document is also not available in NodeJS. The DOM partains
 * to the browser and its environment.
 */
console.log(document); 


/**
 * Global in NodeJs is somehow similar to window but does not represent the browser window.
 * Global represents the global object which exposes some WebAPI objects like
 * setInterval which are available in the browser but are not part of JavaScript. 
 * It is the top level object in NodeJS
 */
console.log(global); 


/**
 * The process object is a property of the global object in NodeJS that provides information about
 * and control over the current NodeJs process. It's one of the most important objects in the
 * NodeJs environment.
 */
console.log(process);

/**
 * In coclusion
 * 
 * Browsers have window and document.
 * NodeJs has global and process.

 * These differences reflect the distinct purposes of each environment:
 * browsers for rendering web pages and interacting with users,
 * NodeJs for server-side operations and file system access.
 */



