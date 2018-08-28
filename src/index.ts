import Vue from 'vue';
import App from './component/App.vue';

const app = new Vue({
    el: '#app',
    render: h => h(App),
});

if (!(<any>window)['dev']) (<any>window)['dev'] = {};
Object.assign((<any>window)['dev'], {
    app,
});
