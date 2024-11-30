# Frontend Setup and Execution Guide

This document provides a step-by-step guide to setting up and running the frontend of the project using Angular. It includes installation instructions, essential commands, and brief explanations to help you get started quickly.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Angular Installation

1. **Install Node.js** (if not already installed):

   Download and install Node.js from the [official website](https://nodejs.org/).

2. **Install Angular CLI Globally**:

   `npm install -g @angular/cli`

3. **Create a New Angular Application**:

   - Create a new Angular project: `ng new my-angular-app`
   - Navigate into the project directory: `cd my-angular-app`

4. **Install Dependencies**:

   `npm install`

5. **Serve the Application**:

   `ng serve`

---

## Useful Commands

### 1. Generate Service

  `ng generate service articles`

  `ng generate service auth`

### 2. Generate Static Components

  `ng generate component about-us`

  `ng generate component contact-us`

  `ng generate component footer`

  `ng generate component header`

  `ng generate component side`

### 3. Generate Components for Backend Connections

  `ng generate component create-post`

  `ng generate component post`

  `ng generate component home`

### 4. Add Styles

  `ng add @angular/material`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
