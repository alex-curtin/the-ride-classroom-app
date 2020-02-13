# The Ride Technical Task

## Description

React app with Node/Express backend. Tested with Jest & Enzyme.

## Installation

```bash
git clone https://github.com/alex-curtin/the-ride-classroom-app.git
cd the-ride-classroom-app
npm install
cd client
npm install
cd ..
```

## Start  

```zsh
npm run dev
```

## Testing  

### Backend

```zsh
npm run test
```

### Frontend

```zsh
cd client
npm test
```

## Dependencies

* [jest](https://jestjs.io/) - Test framework
* [enzyme](https://airbnb.io/enzyme/) / [jest-enzyme](https://www.npmjs.com/package/jest-enzyme) / [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16) - Testing React components
* [moxios](https://www.npmjs.com/package/moxios) - Mocking axios
* [node-mocks-http](https://www.npmjs.com/package/node-mocks-http) - Mocking http requests & responses
* [nodemon](https://nodemon.io/) - Automatic server restart
* [cors](https://www.npmjs.com/package/cors)  - Cross origin resourse sharing
* [axios](https://www.npmjs.com/package/axios) - Making API calls
* [moment](https://momentjs.com/) / [react-moment](https://www.npmjs.com/package/react-moment) - Formatting dates
