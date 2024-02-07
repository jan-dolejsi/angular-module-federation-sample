# Angular micro-frontend module federation (remoteEntry.js) sample with dependency injection

This repo is the least repro sample to show the dependency injection issue I am facing when the Angular app is loaded via its remoteEntry.js to the app shell.

The sample uses Angular 16.
The general approach is described in [Dynamic Module Federation with Angular](https://www.angulararchitects.io/en/blog/dynamic-module-federation-with-angular/).

Here are the steps how to reproduce this:

## App shell

```bash
npm install @angular/cli@16.2.10 -g
ng new remote_app_shell --prefix app-shell --routing --style scss
npm uninstall @angular/cli -g

cd remote_app_shell
npm install
npx ng add @angular-architects/module-federation@16.0.4 --type host --project remote_app_shell --port 3200
```

Then in the `remote_app_shell` subfolder:

```bash
npx ng serve
```

## Microfrontend

```bash
npm install @angular/cli@16.2.10 -g
ng new mfe1 --prefix mfe1 --routing --style scss
npm uninstall @angular/cli -g

cd mfe1
npm install
npx ng add @angular-architects/module-federation@16.0.4 --type remote --project mfe1 --port 4201
```

Then in the `mfe1` subfolder:

```bash
npx ng serve
```
