# smooth_site_builder

## What is

smooth_site_builder is a web app built with React and Next.js.
The app is a site builder, like the repo name says...  
It is structured in an outer layer that contains and manage the main
tools and functionality - almost all related to the inner layer,
the builder module that contains the actual site object and logic to render it for the user.

*In the future, this app will integrate a bigger ecosystem to manage other parts of a website*

***This is a work in progress***

***Expect future prints***

## Usage

### Dependencies

First, install [Node.js](https://nodejs.org/en/download), preferably with [pnpm](https://pnpm.io/pt/installation), but not exclusevily.  

### Running

Clone this repository, open your terminal and navigate to the project folder.
Next, run one of the commands, depending on which package manager you are using:  

```console
pnpm install
```

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

```console
npm run dev
```  

```console
yarn run dev
```  

Now, if the server is running, you will be able to open the app through http://localhost:3000

## Project Folder Structure

**Note: NextJS boilerplate and other personal dev dependency configurations will be ommited for clarity.**

```
smooth_site_builder
├── app                     # app folder and root route for app; since this is a SPA, it only have layout and page
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── src                                       # source folder for the app structure
│   ├── app                                   # contain app inner layer and outer layer structure
│   │   ├── builder                           # inner layer folder
│   │   ├── ...
│   │   └── app.tsx                           # main app component
│   ├── components                            # components used to build the app outer layer
│   │   ├── button.tsx                        # component example
│   │   └── ...
│   ├── contexts                              # contexts for the application (maybe will drop in the future)
│   │   ├── eventListenerBus.tsx              # context example
│   │   └── ...
│   └── utils
│       ├── findMissingNumberFromArray.ts
│       └── ...
├── package.json
└── tsconfig.json
```