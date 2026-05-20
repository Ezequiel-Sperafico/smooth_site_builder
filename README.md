# smooth_site_builder

## What is

smooth_site_builder is an web app build in React, with NextJS.
The app is a site builder, like the repo name says...  
It is structured in an outer layer that contains and manage the main
tools and functionality - almost all related to the inner layer,
the builder module that contains the actual site object and logic to render it for the user.

**In the future, this app will integrate a bigger ecosystem to manage other parts of a website**  

***This is a work in progress***

> Expect future prints...

## Usage

### Dependencies

Firstly, install [Node.js](https://nodejs.org/en/download), preferably with [pnpm](https://pnpm.io/pt/installation), but not exclusevily.  

### Running

Clone this repo, open your bash and navigate to the app folder.
After, run one of the commands, depending on which package manager you installed with node:  

```console
pnpm install
```
or

```console
npm install
```  

```console
yarn install
```  

When all packages are set, run this for launching a dev server:

```console
pnpm run dev
```
or

```console
npm run dev
```  

```console
yarn run dev
```  

Now, if the server is running, you will be able to open the app through http://localhost:3000

## Project Folder Structure

**NextJS boilerplate and other personal dev dependencies configuration will be ignored**

```
smooth_site_builder
├── app
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── lib
│   ├── app
│   │   ├── builder
│   │   ├── ...
│   │   └── app.tsx
│   ├── components
│   │   ├── button.tsx
│   │   └── ...
│   ├── contexts
│   │   ├── eventListenerBus.tsx
│   │   └── ...
│   └── utils
│       ├── findMissingNumberFromArray.ts
│       └── ...
├── package.json
│
└── tsconfig.json
```