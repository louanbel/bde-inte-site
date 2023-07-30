# BdeInteSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

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

## EN / FR language support

To generate the messages file containing all the text of the website :

1. Add i8n parameter to each tag that needs to be translated :

```html
<button id="basic" type="button" mat-button i18n>
  <!-- <==== ici-->
  Basic button
</button>
```

2. Then use :

```zsh
ng extract-i18n
```

3. Then copy the file `messages.xlf` and rename it `messages.en.xlf`.
   after each `<source>` tag, add a `<target>` tag containing the translation of the previous sentence :

```xml
<source> Basic button </source>
<target> Bouton basique </target>
```

==> More detail : [Link](https://lokalise.com/blog/angular-i18n/)

## Conventionnal width in media

1. 900px
2. 800px
3. 650px
