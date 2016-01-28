# <%= appName %>

> Starter kit to buid `React/Redux` based _Single Page Apps_.  
> You can easily create new apps based on this project by using the
> [Yeoman Reapp Generator](https://github.com/marcopeg/generator-reapp).

## First Setup

	npm install

## Run the App - development

During development you run the app through _WebpackDevServer_ so to have development and debug facilities like:

- hot module reloading
- source maps
- Redux Dev Console

```
npm start
```

## Run the App - production

You can run the application in _production mode_ (minified bundle, without development & debug facilities):
	
```
npm run app
```

## Run a Single Component

During the development of a single component it is useful to run a mini-app in which to test controlled versions of that specific component.

This can be acheved by creating a _Styleguide Page_ for the component and running it with the following command:

```
npm start ComponentName
```

> Use `yo reapp:component` to easily scaffold a new component and it's _Styleguide_ page.  
> [more info here](https://github.com/marcopeg/generator-reapp)

## Run the Styleguide

Sometimes you need to take a look at the ensable of _Components_ that are defined in you application. The _Styleguide_ is exactly what you need:

```
npm start styleguide
```


## Code Quality (eslint)

```
// through NPM interface (*)
npm run eslint
	
// or direct invocation
./node_modules/eslint/bin/eslint.js ./**/*.js
```

_(*) In case of errors it shows an horrible NPM related error trace which is completely unrelated to the real code investigation. Just ignore it or run the direct invocation command._

## Testing

The testing environment is based on `KarmaJS` and requires some packages that are not installed by default.

```
// install test suite modules
npm run install-tdd
```

Single run test:

```
npm test
```

Continuous Integration: it runs the tests and watch for changes in the source code:

```
npm run tdd
```

## Test Coverage Report

Test coverage requires few more dependecies to be installed:

```
npm run install-cov
```

Then you can run:

```
npm run cov
```



