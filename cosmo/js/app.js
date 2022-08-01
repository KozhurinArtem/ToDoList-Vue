Vue.createApp({
    data: () => ({
        hidden: true,
    
        FirstName: '',
        LastName: '',
        openHidden: false,
        exitHidden: true,
        accountV: false,
        userName: true,
        table: true,


    }),
    methods: {



        start(){
            this.hidden = false
            this.openHidden = true
            this.exitHidden = false


        },

        exit(){
            this.hidden = true 
            this.exitHidden = true
            this.openHidden = false
            this.accountV = false
            this.userName = true
            this.table = true

        },
        toggleAcc(){
            this.accountV === true ?  this.accountV = false : this.accountV = true
        },

        login(){
            if (this.accountV === true &&  this.openHidden === false) {
                this.accountV = true} else { this.accountV = false}
                this.userName = false
                this.table = false
            
        },



    }
}).mount('#app')