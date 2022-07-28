# Microfrontends simple boilerplate

## How to run the app

First we need to prepare a remote fragment to be available.
1. `cd remote`
2. `yarn install`
3. `yarn build`
4. `yarn start`

Then we should prepare a host
5. `cd ../host`
6. `yarn install`
7. `yarn start`

Then run `http://localhost:3000/` in your browser, and you will (probably) see the following:

![result](result.jpg)

The left part -- is a component from the host application itself, yet the right hand side -- is a remote component (a.k.a. micro frontend fragment) which is loaded by the module federation plugin.
