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

## Publish to npm with public access
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/fun-run - Package name too similar to existing package funrun; try renaming your package to '@rebeccapeltz/fun-run' and publishing with 'npm publish --access=public' instead
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or
npm ERR! 403 on a server you do not have access to.


rebeccapeltz@Rebeccas-MacBook-Pro fun-run % npm publish --access=public
npm notice 
npm notice 📦  @rebeccapeltz/fun-run@1.0.0
npm notice === Tarball Contents === 
npm notice 1.1kB LICENSE.md    
npm notice 868B  README.md     
npm notice 601B  index.js      
npm notice 379B  package.json  
npm notice 271B  test/script.js
npm notice === Tarball Details === 
npm notice name:          @rebeccapeltz/fun-run                   
npm notice version:       1.0.0                                   
npm notice filename:      rebeccapeltz-fun-run-1.0.0.tgz          
npm notice package size:  1.7 kB                                  
npm notice unpacked size: 3.2 kB                                  
npm notice shasum:        fd74dfe84534a8070097c41e246d5b1375eb8eaa
npm notice integrity:     sha512-Y/omA7IvBuXvF[...]J55PFtPR85nxA==
npm notice total files:   5                                       
npm notice 
npm notice Publishing to https://registry.npmjs.org/ with tag latest and public access
Authenticate your account at:
https://www.npmjs.com/auth/cli/6dce3804-b52e-48fb-8ff6-149b9afbac1d
Press ENTER to open in the browser...