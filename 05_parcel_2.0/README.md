# Parcel v2

https://v2.parceljs.org/
<br />

## Setting up the project

Create package.json file
```npm init``` 
or
```npm init -y```

Install Parcel
```npm install parcel@next --save-dev```

For starters create `src` folder and an `index.html` file.
Then add `scripts` to the `package.json` to run Parcel.
```
"scripts": {
    "dev": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html"
  },
```

To resolve vulerabilites install node-forge and highlight.js:
```
npm install node-forge --save-dev
npm install highlight.js --save-dev
```

For JS transpiling purposes we need to set up Browserlist. We are going to do that in package.json file:
```
"browserslist": "> 0.2%",
```
or
```
"browserslist": [
    "last 1 version",
    "> 1%",
    "IE 10"
  ]
```
<br />

## Project structure