/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from 'vue'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import store from './store'

if(localStorage.getItem('access_token')) {
    const token = localStorage.getItem('access_token')
    const strategy = localStorage.getItem('strategy')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    if(store.getters['admin/strategy'] === strategy) {
        store.dispatch('admin/login')
    } else {
        store.dispatch('user/login')
    }
}
import routes from './src/utils/routes'

const user = createApp({
})
import userApp from './src/layouts/app'

user.component('user-app', userApp);
user.use(store)
user.use(routes)
user.mount('#user')


const app = createApp({
})
import adminApp from './src/layouts/admin-app'

app.component('admin-app', adminApp);
app.use(store)
app.use(routes)
app.mount('#admin')



