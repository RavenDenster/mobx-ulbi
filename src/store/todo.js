import {makeAutoObservable} from 'mobx'

class Todo {
    todos = [
        {id:1, title: 'title-1', completed: false},
        {id:2, title: 'title-2', completed: false},
        {id:3, title: 'title-3', completed: false},
    ]
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }
    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo()