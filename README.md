# fun-run:  
Function Runner: A package that provides a wrapper and timer around a function

This is useful for measuring performance in time it takes to execute a function.

The package includes a function, `runFunctionWithArg(func, ...args)` that runs the 
function named in the parameter `func`.  If there are arguments for the function,
they are passed as comma separated values after the name of the function.

The function returns an array with the result of the function first and the execution time in milliseconds last.

## Usage

Import the package

```
const funRun = require("fun-run");
```

Define the function that you want to run.

```
function add(x, y)
    return x + 1
```

Call the function as a parameter to `runFunctionWithArg`

```
const [result, executionTime] = funRun.runFunctionWithArg(add,3,2);
```

See `test/script.js` for a sample test


