const app = Vue.createApp({
    data() {
        return {
            todos: [],
            todo: '',
            isEditing: false,
            selectedIndex: null
        }
    },
    methods: {
        addTodo() {
            if(this.todo===''){
                alert("Field is empty!")
                return
            }
            this.todos.push(this.todo)
            this.todo = ''
        },
        editTodo(index, todo) {
            this.todo = todo
            this.selectedIndex = index
            this.isEditing = true
        },
        updateTodo() {
            if(this.todo===''){
                alert("Field is empty!")
                return
            }
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.todo = ''
            this.isEditing = false
        },
        deleteTodo(index) {
            this.todos.splice(index, 1)
            this.isEditing=false
        }
    }
})