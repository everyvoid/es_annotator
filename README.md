# es_annotator

A tag annotator prototype developed as a internship project for expertsystem.


## RUN PROJECT

1) Download `final_internship_ver` directory;
2) Run `npm run serve` in `final_internship_ver`;
2.1) run `npm install` if node_modules is missing;
3) Copy localhost port in your browser.

Works fine in Safari.
Some problems in Chrome and Firefox.


## IMPLEMENTATION 

•   My code is placed in `src` directory:
    `es_annotator/final_internship_ver/src`
    
•   In `src` you can find the following relevant files:
    
    - `App.vue` --> main VUE file. Displays all the components;
    
    - `main.js` --> main JS file. Here all the libs are loaded.
    
    - `./components`:
       
        - `history.vue` --> regarding history (lower placed div);
       
        - `myTag.vue` --> my tag renders (tag style, popover, etc..).
                          Also includes add/remove tag functions (used by
                          popover window) and update history function.
       
        - `tag.vue` --> here myTag is passed as a component and uses the right
                        passed props. This is the tag components used in App.vue.
       
        - `tree.vue` --> renders the (right placed div) list of temple@fields menu.
                         Also includes add/delete tag, update history functions.
    
    - `./docs` --> the document file is loaded from this here.
    
    Files ending with BU are non relevant backup files.
    

## FRAMEWORKS AND STUFF

For this project I've used:

• Vue 2.0

• Element UI

• Vuex
