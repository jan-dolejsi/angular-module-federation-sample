# Angular micro-frontend module federation (remoteEntry.js) sample with dependency injection

This repo is the least repro sample to show the dependency injection issue I am facing when the Angular app is loaded via its remoteEntry.js to the app shell.

The sample uses Angular 16.
The general approach is described in [Dynamic Module Federation with Angular](https://www.angulararchitects.io/en/blog/dynamic-module-federation-with-angular/).

## Running the sample

|            | App shell                              | Micro-frontend |
| ---------- | -------------------------------------- | -------------- |
| sub-folder | [/remote_app_shell](/remote_app_shell) | [/mfe1](/mfe1) |
| serve      | cd remote_app_shell && npx ng serve    | cd mfe1 && npx ng serve |
| browse     | <http://localhost:3200/>               | <http://localhost:4201/> |

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

1. replace the [app.component.html](./remote_app_shell/src/app/app.component.html) `<p>Host application</p>`,
2. add `routerLink` to navigate to `/mfe1` and the router outlet.

Point your browser to <http://localhost:3200/>

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

Replace the [app.component.html](./mfe1/src/app/app.component.html) `<p>Standalone Micro-frontend 1</p>` and the router outlet.

Create the module that will become the micro-frontend exposed for remote consumption:

```bash
npx ng generate module module-a --project mfe1 --routing --routing-scope Child
```

Add simple _home_ component to the module A:

```bash
npx ng generate component module-a/home --standalone --style css --project mfe1
```

Add simple _feature_ component to the module A (the one that will require dependency injection later):

```bash
npx ng generate component module-a/feature --standalone --style css --project mfe1
```

Add a router link to the Home component to navigate to the Feature component.

To test the micro-frontend as a standalone Angualar app, point your browser to <http://localhost:4201/>

## Register Micro-frontend in the App Shell

Add webpack exposes/remotes configuration. The vital configuration is spread across following files:

/mfe1/webpack.config.js -> see the `exposes` field\
/remote_app_shell .. webpack.config.js -> see the `remotes` field\
/remote_app_shell .. app-routing.module.ts -> adds the lazy-loaded mfe1 routes
/remote_app_shell .. declarations.d.ts -> declare the remote module for the tsc compiler's sake

See commit # TBD for more detail.

## Add _Hello World_ services and inject it to the component

Then in the `mfe1` subfolder:

```bash
npx ng generate service module-a/hello --project mfe1 --skip-tests
```

And add the `greet(name: string)` method.\
Inject it into the `FeatureComponent` to show _Hello, World_.
