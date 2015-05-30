# Atons Competence meeting 18-06-2015

Gebaseerd op https://github.com/angular/material-start

## Installatie
 * Installeer NodeJS voor de Node Package Manager (NPM) https://www.npmjs.org/ 
 * clone de repository
 * npm install
Als je een foutmelding krijgt op npm-gyp vanwege een missende PYTHON omgevingsvariabele, geen paniek. Dit is niet essentieel om het project te runnen.

## Test
 * node node_modules\protractor\bin\webdriver-manager start
 Als de selenium server niet automatisch start, start dit commando om de seleniem server los op te starten.
 Verwijder 'proctor_webdriver:e2e', uit de test task in GruntFile.js 


## Extra informatie

### Tutorials

The repository contains both ES5 and ES6 versions of the application. Traditional development with
ES5 standards and solutions are presented here by default. Tutorials are included: step-by-step
instructions that clearly demonstrate how the Starter application can be created in minutes.

> These tutorials will be presented live, on-stage at **ng-conf 2015, Utah**.

Developers should checkout the following repository branches for:

* Branch [**Starter - ES5 Tutorials**](https://github.com/angular/material-start/tree/es5-tutorial):
for  ES5 Tutorial steps & development process.
* Branch [**Starter - ES6 Tutorials**](https://github.com/angular/material-start/tree/es6-tutorial):
for  ES6 Tutorial steps & development process.
* Branch [**Starter - ES6**](https://github.com/angular/material-start/tree/es6): for example
implementation of Angular Material 1.x (and Angular 1.x) within an ES6 application.

> The **README** for the ES6 branches will provide all details showing how easy, <u>more simplifed</u>,
and <u>more manageable</u> it is to develop ES6 applications with Angular Material 1.x.<br/><br/>

## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/

