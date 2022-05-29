# Vue-Datalayer 
## for Vue and Nuxt.js with TS

###vue-datalayer is a plugin for direct use, its functionality is based on the need to implement clicks and mouseOver observers for traffic management for marketing.

* install:
  * yarn add vue-datalayer
  * npm i vue-datalayer

* Use with vue3^:
  ```ts
  import { createApp } from "vue";
  import App from "./App.vue";
  const app = createApp(App)
  
  import vueDatalayer from 'vue-datalayer'
        
  app.directive('datalayer', vueDatalayer)
  ```

* Use with nuxt3^:
  ```ts
  import { defineNuxtPlugin } from "#app";
  import vueDatalayer from 'vue-datalayer';
      
  export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("datalayer", vueDatalayer);
  });
  ```
  
* On component:
  ```vue
  <button
    id="cancelProduct"
    v-datalayer="{ click: true, hover: true }"
  >
    Cancel Product
  </button>
  ```
  
* ### All trafic is saved on global var 'window.datalayer'.

* For visualization in browser devTools check:
  ```js
  console.log(window.datalayer)
  ```
