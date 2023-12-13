const { createApp } = Vue

createApp({
    data() {
        return {
            todo_list: [
                {
                    text: "Doing homework",
                    done: false
                },
                {
                    text: "Go shopping",
                    done: false
                },
                {
                    text: "Take the dog for a walk",
                    done: false
                },
                {
                    text: "Finish washing the dishes",
                    done: false
                },
                {
                    text: "Wash the bathroom",
                    done: false
                },
            ]
        }
    },
    methods: {
        deleteTask(index){
            let conf = confirm("Are you sure you want to delete this task?");
            if (conf) {
                this.todo_list.splice(index, 1);
            }
        },
        addNewTask(){
            let obj = {
                text: this.newTask,
                done: false
            };

            this.todo_list.push(obj);
            this.newTask = '';
        }
    },
}).mount('#app')