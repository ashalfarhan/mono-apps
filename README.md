# Simple Monorepo Web Application

[![Main Workflow](https://github.com/ashalfarhan/mono-apps/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/ashalfarhan/mono-apps/actions/workflows/main.yml)

> This is a simple example of a monorepo TypeScript projects web application.

## Overview

The main goal of this repository is to demonstrate how to create a monorepo JavaScript/TypeScript project with Yarn Workspace (v1). And integrating a web application with internal library (not published to `npm` registry).

### Available Modules

#### Apps

- `spa` Client Side Rendering (CSR)

#### Libs

- `common` Internal shared utilities
- `ui` Internal UI Library
- `uicore` Foundation of the `ui` module

## Tech Stack

- `vite` build tool
- `vitest` unit test framework
- `Testing Library` testing utilities that encourage good testing practices
- `CSS Modules` styling flavour
- `React` library

## Get Started

- Clone this repo

  ```sh
  git clone https://github.com/ashalfarhan/mono-apps.git
  ```

- Install dependencies

  ```sh
  yarn install
  ```

## References

- [Setting Up Monorepo With Create React App](https://medium.com/geekculture/setting-up-monorepo-with-create-react-app-cb2cfa763b96)
- [You might not need TypeScript project references](https://turborepo.com/posts/you-might-not-need-typescript-project-references)
