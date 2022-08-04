Vue.createApp({
    data: () => ({
        hidden: true,
    
        FirstName: '',
        LastName: '',
        openHidden: false,
        exitHidden: true,
        accountV: false,
        userName: true,
        loginNone: true,
        table: true,
        notes: [],
        valueInput: ''
        


    }),
    methods: {



        start(){
            this.hidden = false
            this.openHidden = true
            this.exitHidden = false
            this.loginNone = false


        },

        exit(){
            this.hidden = true 
            this.exitHidden = true
            this.openHidden = false
            this.accountV = false
            this.userName = true
            this.table = true
            this.FirstName = ''
            this.LastName = ''

        },
        toggleAcc(){
            this.accountV === true ?  this.accountV = false : this.accountV = true
        },

        login(){
            if(this.FirstName === '' && this.LastName ===''){ this.FirstName = 'Гость'}
            if (this.accountV === true &&  this.openHidden === false) {
                this.accountV = true} else { this.accountV = false}
                this.userName = false
                this.table = false
                this.loginNone = true
            
        },
        handleInput(event){
            this.valueInput = event.target.value;
        },
        addNote() {
            if(this.valueInput === ''){return}
            this.notes.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        },

        removeBtn(index){
            this.notes.splice(index, 1)
        }


    }
}).mount('#app')