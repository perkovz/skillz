# Parcel.js example

Using "parcel-bundler": "^1.12.4" https://parceljs.org/

## Installation

https://parceljs.org/getting_started.html

```
npm install parcel-bundler --save-dev
```

## Usage

NPM Command  |	Description
npm run dev  |	Local webserver for development (serve + watch)
npm run build  |	Build production server

## Addons and Plugins

https://github.com/ManzDev/parcel-document-blank

## package.json

Defining the build. Currently looking up 2 entry files.

## index.html

Defining JS and CSS modules.

## scripts

Notes:
   - index.js to group them together
   - support for JS 2015, 16 and 17 comes out of the box
   - transpiling to ES5 comes out of the box!!! check dist folder.

## styles

Notes:
  - index.scss to group them together
  - support for scss comes out of the box. if you use .scss extension, parcel will take care of dependencies
  - transpiling to css comes out of the box. check dist folder. dist folder is autogenerated.
  - scss files can be imported in js files. parcel will add them as a dependency in the html file. 
  - in this example i'm importing scss file straight to html. parcel knows that and automatically transpiles the file.

