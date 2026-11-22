# devops-labs

[![CI](https://github.com/balaziuk/devops-labs/actions/workflows/ci.yaml/badge.svg)](https://github.com/balaziuk/devops-labs/actions/workflows/ci.yaml)

A GitHub Actions lab project with Node.js and TypeScript.

## CI pipeline

The workflow runs on push and pull request to `main`:

```
lint → build → unit → integration (PostgreSQL)
dependency-check (pull requests only)
```

- **lint**: runs ESLint.
- **build**: compiles TypeScript to `dist/` and uploads it as the `build-artifacts` artifact.
- **unit**: runs unit tests from `tests/unit` and uploads the JUnit report as `test-reports`.
- **integration**: starts a PostgreSQL service container, runs tests from `tests/integration` against it and uploads the JUnit report as `integration-test-reports`.
- **dependency-check**: reviews new or changed dependencies for known vulnerabilities.

`main` is protected: all five checks are required before a pull request can be merged.

You can download the artifacts from any run in the **Actions** tab.

## Run locally

    npm ci
    npm run lint
    npm run build
    npm run test:unit

Integration tests need a running PostgreSQL and a `DATABASE_URL` environment variable.
