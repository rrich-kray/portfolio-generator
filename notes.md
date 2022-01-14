const profileDataArgs = process.argv;

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    };
}

// Same as above

profileDataArgs.forEach(profileItem => console.log(profileItem));

// the 'let' keyword works just like the 'var' keywork in the sense that the variable's value can be reassigned. It's clearer to use 'let' for variables whose values need to be reassigned over time, and 'const' for variables whose value will not be changed
// let and const are block-scoped, meaning any variable defined within {} using one of these keywords will not be defined outside of the {}
// var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well
// var is function scoped, let is block scoped 

printProfileData(profileDataArgs);

// ES6 arrow functions

// Not a direct replacement for standard JS functions but a way to create more concise function expressions when possible 

// The const keyword is a new feature in JavaScript that allows us to create variables that can't be reassigned a value.
// The const keyword will not allow you to reassign a value to a varibale, but you can define an array with the const keyword and still add and edit values in the array, because you are not reassigning a value to the original array
// Said differently, the const keyword creates a constant reference to the elemrnt when it is created. For strings and numbers, the reference is to the content itself, and so it can't be altered, but in the case of an array, the content of the array can be altered because the reference is to the container itself, not to the container's content 

// In Node.js, process is a global object that represents everything going on with this particular app. 
// The argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. The first two indexes of process.argv simply represent Node.js and the file we executed, so we don't typically need to use them.

// Node is a JavaScript runtime environment built on Chrome's V8 JavaScript engine
// Computers can't natively understand JavaScript, so when we run JS code, we need some sort of translator that can provide machine-readable output to a computer or web browser
// This translator is called a JavaScript engine
// JavaScript engines use just-in-time (JIT) compiling, which means they perform each action instantaneously. In contrast, other languages, such as Java or C++, require their code to be compiled and checked for syntax errors first—and they'll only execute a program after a successful code compilation
// Node.js allows developers to use JavaScipt in both front-end and back-end contexts. It bridges the disconnect between browser coding and machine coding 

// Node.js removes certain limitations for JavaScript developers. Some popular uses for Node.js include the following;
    // Creating web servers for a client to make a request to
    // Communicating in real time with a chat or livestream
    // Cleaning up and optimizing code
    // Using the Internet of Things (IoT), such as controlling a thermostat or lights in a house
