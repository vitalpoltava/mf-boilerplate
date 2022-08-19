# Microfrontends Architecture

## Brief description

1. Based on Webpack's plugin -- `ModuleFederationPlugin` (Webpack 5+);
2. Host loads remote chunks dynamically (see `host/src/loadFederatedModule.ts`);
3. You can expose single component or micro application (app fragment);
4. Host could be used as a remote to another host (bidirectional hosts);

## Running the app

First clone the repository, then go through every dir (`api-server`, `host-list`, `list-remote`, `login-remote` and `form-remote`) and do the following:
1. `cd api-server`
2. `yarn install`
4. `yarn start`

Run `http://localhost:3004/` in your browser, and you will see the following:

![login](login.png)

Personal token could be any non-empty string at the moment. After successful login you will be redirected to the list screen: 

![list](list.png)

this the list made by `list-remote` micro-frontend. Mind the list's `GET` request (`Authorization` header) - it uses `authToken` which arrived to `login` MF component -- we use `Generator`s to inject it safely all over the app. Clicking the `Refresh List` button will result applying for a new `authToken` based on your input token (a.k.a. `refresh token`).

If you click the left top button `Open External Form`, it will show you the popup with the form loaded as a micro-frontend from `form-remote`:

![ext-form](external-form.png)

In case you run the app from `http://localhost:3005/` address - different host would run the same MFs but with different layout -- for example, external form will appear as plain screen without popup (just to demonstrate that existing fragments could be used as MF in different ways in parallel).

![ext-form](external-form-plain.png)
