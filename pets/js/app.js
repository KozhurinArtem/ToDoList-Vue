
    Vue.createApp({
    data(){
        return{
            openClose: 'Развернуть',
            add:'Добавить',
            taskList:[],
            valueInput: '',
            needDoList: [],
            completeList: [],
            oneHidden: 'hidden',
            twoHidden: '',

            

        };
    },
    methods: {
        handleInput(event){
            this.valueInput = event.target.value;
        },
        addTask() {
            if(this.valueInput === ''){return};
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        },
        doCheck(index, type) {
            if(type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            } else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeList;
            toDoList.splice(index, 1);
        },
        openPageOne(){
            if(this.oneHidden === 'hidden') {
                this.oneHidden = ''
                this.twoHidden = 'hidden'
                this.openClose ='Cвернуть'
            } else {
                this.oneHidden = 'hidden'
                this.twoHidden = ''

            }

    },
    addPage() {
        this.taskList.push({
            id:Math.random
        })
    }
}
    }).mount('#app')