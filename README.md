# vouched-functions

This cloud functions will be responsible for helping vouched app with specific actions that need to be triggered when specific data changes on the firebase firestore database

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node
npm
firebase-tools
```

### Installing

Install Firebase CLI

```
npm install -g firebase-tools
```

Initialize Firebase SDK for Cloud Functions

```
firebase login
```

Install dependecies

```
cd fucntions; npm install
```

## Deployment

Deploy
```
firebase deploy --only functions
```

## Running

```
Change data on the invite collection of the vouched firebase firestore
```

## Built With

* [Node.js](https://nodejs.org) - The Language
* [TypeScript](https://www.typescriptlang.org/) - The Language
* [NPM](https://www.npmjs.com/) - Package Manager
* [Firebase](https://firebase.google.com/) - Used to store data and trigger the function



## Authors

* **Rodrigo Serviuc Pavezi** - *Initial work* - [rodrigopavezi](https://gitlab.com/rodrigopavezi)
* **Eduardo Nunes Pereira** - [eduardonunesp](https://gitlab.com/eduardonunesp)
* **Arya Soltanieh** - [lostcodingsomewhere](https://gitlab.com/lostcodingsomewhere)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
