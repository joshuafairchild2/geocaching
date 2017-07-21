# Geocaching &#128270;

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

##### By **Joshua Fairchild, July 21, 2017**

## Description

This application uses the Google Maps Geocoding API to allow a user to convert addresses into longitude/latitude coordinates or vice versa.

This application was created primarily using Angular 2.


## Installation Requirements

* You must install or have installed a current version of:

  * [Node and npm](https://nodejs.org/en/)

  * [TypeScript](https://www.typescriptlang.org/#download-links)

## Setup

* Clone this repository

  `$ git clone https://github.com/joshuafairchild1/geocaching`


* Run the following commands from the root directory:

  `$ npm install`

  `$ bower install`

  This will download the project's dependencies

* Create a file inside of the directory `/src/app` called `api-keys.ts` and add the following code (replace the X's with your API key). Instructions for obtaining a Google Maps API key can be found [here](https://developers.google.com/maps/documentation/geocoding/get-api-key)

  ```
  export const geoKey = 'XXXX';
  ```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Technologies Used

* JavaScript
* TypeScript
* Angular CLI
* Bootstrap
* Google Maps Geocoding API

## Known Bugs

* None known

## License

This project is licensed under the MIT License

**Joshua Fairchild Copyright (c) 2017**
