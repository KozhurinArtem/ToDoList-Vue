Vue.createApp({
    data: () => ({
        hidden: true,
        transition: false,
        open: true,


    }),
    methods: {

        start(){
        this.hidden === true ? this.hidden = false: this.hidden = true
        }



    }


}).mount('#app')