# ngtools-webpack-error

This simple minimal Angular 6 app is to demonstrate Ahead-of-Time compiling error. This error occurs when using the webpack with @ngtools-webpack tool via the grunt-webpack integration.

How to reproduce

Case 1 - Using webpack directly - compilation completes without error

1) checkout the repository: git clone https://github.com/anbaran/ngtools-webpack-error.git
2) cd ngtools-webpack-error
3) run: npx webpack --config webpack.config.js

Result: no error, compilation successful

Case 2 - Using grunt integration for webpack "grunt-webpack" - compilation results in error (see below)

1) checkout the repository: git clone https://github.com/anbaran/ngtools-webpack-error.git
2) cd ngtools-webpack-error
3) install grunt cli: npm install -g grunt-cli
4) run: npm install
5) run: grunt

Result: 

ERROR in : TypeError: Cannot read property 'getTsProgram' of undefined
    at AngularCompilerPlugin._getTsProgram (<project-location>/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:189:62)
    at getTypeChecker (<project-location>/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:533:43)
    at ast_helpers_1.collectDeepNodes.filter (<project-location>/node_modules/@ngtools/webpack/src/transformers/remove_decorators.js:14:60)
    at Array.filter (<anonymous>)
    at standardTransform (<project-location>/node_modules/@ngtools/webpack/src/transformers/remove_decorators.js:14:14)
    at transformer (<project-location>/node_modules/@ngtools/webpack/src/transformers/make_transform.js:14:25)
    at <project-location>/node_modules/typescript/lib/typescript.js:2892:86
    at reduceLeft (<project-location>/node_modules/typescript/lib/typescript.js:2585:30)
    at <project-location>/node_modules/typescript/lib/typescript.js:2892:42
    at transformRoot (<project-location>/node_modules/typescript/lib/typescript.js:67846:82)
