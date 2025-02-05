const funRun = require("fun-run");

function add(x,y){
    return x+y;
}

const [result, executionTime] = funRun.runFunctionWithArg(add,3,2);

console.log(result, executionTime.toFixed(5))

if (result === 5) {
    console.log("Success")
} else {
    console.log("Fail")
}