# devops-labs

[![CI](https://github.com/balaziuk/devops-labs/actions/workflows/ci.yaml/badge.svg)](https://github.com/balaziuk/devops-labs/actions/workflows/ci.yaml)

A GitHub Actions lab project with Node.js and TypeScript.

## CI

The workflow runs on push and pull request to `main`:

- **build**: compiles TypeScript to `dist/` and uploads it as the `build-artifacts` artifact.
- **test**: runs after `build` (`needs`), downloads the artifact and runs the tests.

You can download the artifact from any run in the **Actions** tab.

## Run locally

    npm ci
    npm run build
    npm test