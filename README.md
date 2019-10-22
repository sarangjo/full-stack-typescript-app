# full-stack-typescript-app

A template for a full-stack Typescript application with shared package.json and TS configurations.

## Choices

- TSLint and Prettier
- `loglevel` over `console.log`
- `esModuleInterop`
- Doesn't have all the webpack loaders

## Downsides

- Post-ejected CRA

## Issues

- `baseUrl`/`paths` doesn't work on built server because we don't use webpack. Works fine when developing
