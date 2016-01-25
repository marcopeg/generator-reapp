# <%= appName %>

> Starter kit to buid `React/Redux` based _Single Page Apps_.

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



