# Parcel v2

https://v2.parceljs.org/


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
    "start": "parcel serve ./src/index.html",
    "build": "parcel build ./src/index.html"
  },
```