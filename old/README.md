# Angular Template App
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

# Customization and Features

### Names
The application automatically pulls data from the package.json file to display in the UI. Specifically the `name, longName, version` are special values that will be read into the applicaiton.

### Themes
This application uses the Angular Material Mixins to customize the colors of the application. These are located under the `theme.styles.scss` file and are easy to customize for light and dark mode users.

### Progressive Web App
The application is setup to funciton as a PWA using `@angular/pwa` package and a slightly customized `update.service.ts` file to help with some functions. An install button event is captured and displayed as a button on the side menu during the initial startup. As well a check for updates button is available that can trigger a manual check. The `update.service.ts` file handles displaying toast notification if an update is availabe.

### State Management
This application starts with a simple [https://github.com/datorama/akita] data store that will cache the theme color.

### Starting Components
This is meant to be a template that has a strong foundation for new application development. With that in mind I didn't see the need to include all of my custom components. For now the application comes with a simple floating button located in the bottom right of the screen.

### Organization
This application will be a great starting point for Angular developers that are looking to keep their directories clean. Everything has a place and a shared module to handle UI and outside module imports. When generating new UI components use this schematic: `ng g component <Name> --module Shared` don't forget to export the new declarations as well. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
