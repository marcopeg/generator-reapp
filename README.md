# Yeoman React App Generator

> This is a [Yeoman generator](http://yeoman.io/learning/) which helps you dealing with a 
_[React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/)_ application.

In order to work with this tool and the _React_ environment you need _[NodeJS 4.2+]()_ available on your machine. On a _Mac_ I suggest to install _[NodeJS](https://nodejs.org)_ using _[Brew](http://brew.sh/)_ ([click here for a tutorial](https://changelog.com/install-node-js-with-homebrew-on-os-x/)).

If you are new to _Yeoman_ you should install it:

	npm install -g yo
	
And then you can install `generator-reapp` (this package):

	npm install -g generator-reapp
	
Now _Reapp_ is ready to use on your development machine.

## Scaffold a React Client App

The first thing you may want to do with _Reapp_ is to scaffold a brand new _React Client Application_:

	yo reapp myNewApp
	
This command will guide you through the setup and eventually will **create a new folder** where to generate all the files that you need to work with _React_.

> If you already know which name to give to your app you should run `yo reapp myNewApp`.

Once the generator finish its job you can run your app:

	cd myNewApp
	npm start

> The newly generated application comes from 
> [es6-react-client](https://github.com/marcopeg/es6-react-client) project and you will
> find more informations about the file structure in it's 
> [readme](https://github.com/marcopeg/es6-react-client/blob/master/README.md).
> 
> The general architecture of this _React/Redux_ client application is explained in 
> details in the [React Fast & Right](http://noblackmagic.com/reactjs-book/) 
> book _(early stage writing)_.

## Scaffold a new Component

The most common piece of a _React_ application is a _dumb component_, so a _Component_ which doesn't know about the whole application and can be **coded in complete isolation** from it.

	yo reapp:component SpeedIndicator
	
This command will guide you throth the setup and you may optionally build a _Unit Test_ for your _Component_ and a _Styleguide_ page that load it.

The best way to work on a newly generated component is to run his _Styleguide_ page:

	npm run guide SpeedIndicator

> A _Styleguide_ is a dull application that renders one single component in many 
> different ways and allows for **isolated develpment and manual testing**.
> Give it a try!



