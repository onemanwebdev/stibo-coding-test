# Frontend Assignment

## App overiew
The goal of this exercise is to create an app that will display a collection of favourite photos. There is  "All pics" section on the left on the screen and user should be able to add some of those available to "My fav pics" section.

## Starting the assingment

Some code is already provided, so you don't have to start from scratch. 

The codebase uses React framework with Typescript. The app is scaffolded using [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). This means you will need to have Node.js version >=12.2.0. To run an app use those commands:

```
    npm install
    npm run dev
```
And you should be good to go ✅

## Tasks
We wanted to keep this simple so you don't have to spend weeks working on the app. We want you to complete `main tasks` as they should help us to understand the way you think and organise your code. There are some `extra tasks` that cover some additional scenarios - if you feel like doing them, don't hestitate to complete them.

There is one "Super extra task" - this one might take more time and probably will force you to reorganise the codebase a bit - if you feel comfortable with doing that, you know what to do 😉 If you don't want to overextend yourself - we get that and it is fine.

### Main tasks
1. Fill in a "addItem" method in "App.tsx" that should add an item to the collection.
2. If collection is empty - please display some info for the user e.g. "This collection has no item yet, please add some".
3. Add a possibility to remove specific item from collection. 
4. Add some styles to the collection list so displays 3 items in a row. The horizontal and vertical gaps between elements should be consistent.
5. Make sure that "All pics" section takes 100% of the browser height. If it has a content that overflows the screen, then this section should have the scrollbar, so user can see all the items on the list.
6. Create `Collection` component so we don't need to have all the collection related logic inside main `App` component.
7. Vertically center the elements within the "All pics" list [the element with "available-list-item" class name].
   
### Extra tasks
1. There are some tags attached to each picture. In "All pics" section, add a possibility to filter based on tags. User should be able to see filtered lists when clicking on some of the tags. Some super basic markup for this is already prepared.
2. Filtering in "All pics" section: since user might want to search for specific picture please add an input so the user can search for specific picture name or tag.

### Super extra task
Multiple collections - sometimes having one collection is not enough 🤷🏻‍♂️ Add a possibility to create completely new collection with editable name, so the user can store new items in it.

## Remarks
Those tasks should be achievable without using any external libraries but if you feel that they are necessary - let us know the reasoning why you believe they were needed.

The solution is not meant to be a production ready code, but if you want to write some test cases - feel free to do so. We're aware that this might mean introducing some testing library as a dependency.

Good luck 🤞🏻