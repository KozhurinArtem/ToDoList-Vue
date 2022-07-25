const App = {
    data(){
        return{
            counter: 0,
            valueInput: '',
            needDoList: []
        }
    },
    methods: {
        handlyInput(event) {
            this.valueInput = event.target.value;
        },
        addTask () {
            if(this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        }
    }
}


Vue.createApp(App).mount('#app')