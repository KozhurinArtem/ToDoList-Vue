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
        valueInput: '',
        float: true,
        Welcome: 'Добро пожаловать',
        Start: 'Поехали',
        End: 'Закончить',
        Add: 'Добавить',
        Remove: 'Удалить',
        FirstN: 'Имя',
        LastN: 'Фамилия',
        Ru: true,
        

        


    }),
    methods: {

        Eng(){
            this.Ru = false
            this.Welcome = 'Welcome!'  
            this.Start = 'Let`s go' 
            this.End =  'End'
            this.Add =  'Add'     
            this.Remove =  'Remove'
            this.FirstN =  'FirstName'     
            this.LastN =  'Lastname'    
        },

        Rus(){
            this.Ru = true
            this.Welcome = 'Добро пожаловать'  
            this.Start = 'Поехали' 
            this.End =  'Закончить'
            this.Add =  'Добавить'     
            this.Remove =  'Удалить'     
            this.FirstN =  'Имя'     
            this.LastN =  'Фамилия' 
    
            },


        start(){
            this.hidden = false
            this.openHidden = true
            this.exitHidden = false
            this.loginNone = false
            this.float = false


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
            this.loginNone = true
            this.float= true

        },
        toggleAcc(){
            this.accountV === true ?  this.accountV = false : this.accountV = true
        },

        login(){
            if(this.FirstName === '' && this.LastName ===''){ this.FirstName = 'Гость'}
            if(this.Ru === false ) {this.FirstName = 'guest' }
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
