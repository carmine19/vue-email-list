//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        load: false,
        email:'',
        email2:'',
        email3:'',
        email4:'',
        email5:'',
        email6:'',
        email7:'',
        email8:'',
        email9:'',
        email10:'',


    },
    methods: {

    },

    mounted() {
        //creo un chiamata con axios alle api di boolean dove passo il link delle api
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email2 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email3 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email4 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email5 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email6 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email7 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email8 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email9 = risposta.data.response;
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            //qui creo la funzione dove la promise (cioè il then) mi risponderà con le propietà dell oggetto
            //che verranno passate ne elemento corrente (in questo caso è risposta), mi devo ricordare che axios passa
            //poi tutto ale elemnto data e da li posso recuperare tutti i valori
            .then((risposta) => {
                //assegno al data email il valore della risposta api, accedo con this in quanto fa riferimento all'oggetto
                //globale ed non alla funzione stessa
                this.email10 = risposta.data.response;
            })

        this.load = true;
    }
})