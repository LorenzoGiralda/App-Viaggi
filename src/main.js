import { createApp } from 'vue'

import {createRouter, createWebHistory} from 'vue-router';



import store from './store/store.js';



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";




import App from './App.vue';

const app = createApp(App)



import bannerBase from './UI/bannerBase.vue';
import bannerFinale from './UI/bannerFinale.vue';
import filterButton from './UI/filterButton.vue';
import artComp from './page/articoli/artComp.vue';


app.component('banner-base', bannerBase);
app.component('banner-finale', bannerFinale);
app.component('filter-button', filterButton);
app.component('art-comp',artComp);



import homePage from './page/homePage.vue';
import blogPage from './page/blogPage.vue';
import navPage from './page/infonavPage.vue';
import carComp from './page/carrelloPage.vue';
import notFound from './page/notFound.vue';
import viaggiComp from './page/viaggi/viaggiComp.vue';


const router = createRouter({

history: createWebHistory(), 
    
    
routes: [
    
    // ROTTE BASE
{path: '/', component: homePage},
    
{path: '/blog', component: blogPage},
    
{path: '/destinazioni/:id', component: artComp},
    
{path: '/viaggi/:id', component: viaggiComp},

{path: '/infoNav', component: navPage},
    
{path: '/carrello', component: carComp},
    
// ROTTA NOT FOUND "inesistente"
 { path: '/:pathMatch(.*)*', component: notFound },

    ],
    
    
});

app.use(router);
app.use(store);
app.mount('#app');


