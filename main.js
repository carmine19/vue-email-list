//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        load: false,
        email:[],
        test:'',

    },
    methods: {


    },

    mounted() {
         for (var i = 0; i < 10; i++) {
             axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta) {
                if (app.email.includes(risposta.data.response) === false) {
                    app.email.push(risposta.data.response);
                }
            });
        }
        console.log(this.email);

        this.load = true;
    }
})