import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import TodoItem from './components/TodoItems.js';
import TodoForm from './components/TodoForm.js';

class TodoList extends React.Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.state = {
      tasks:[{
        name:"Click AA",
        completed:false
      },
      {
        name:"Click BB",
        completed:false
      },
      {
        name:"Click CC",
        completed:false
      }],
      currentTask: '' 
    }
 }

addTask(event){
    event.preventDefault();
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
        name: currentTask,
        completed: false
    })

    this.setState({
        tasks,
        currentTask: ''
    })
}

deleteTask(index){
    let tasks = this.state.tasks;
    tasks.splice(index,1);
    this.setState({
        tasks
    })
}

updateTask(newValue){
    this.setState({
        currentTask: newValue.target.value
    })

}

editTask(index, newValue){
    console.log(index, newValue);
    var tasks = this.state.tasks;
    var task = tasks[index];
    task['name'] = newValue;
    this.setState({
        task
      })
}
changeStatus(index){
 var tasks = this.state.tasks;
 var task = tasks[index];
 task.completed = !task.completed;
 this.setState({
   tasks:tasks
 })
}
 render() {
    return (
        <section>
            <TodoForm 
            currentTask={this.state.currentTask} 
            updateTask={this.updateTask} 
            addTask={this.addTask}
            />
        <ul>
        {
            this.state.tasks.map((task, index) => {
            return <TodoItem key={index} 
            clickHandler={this.changeStatus} 
            index={index} 
            details={task}
            deleteTask = {this.deleteTask}
            editTask = {this.editTask}
            />
            })
        }
        </ul>
        </section>
    )
  }
}

ReactDOM.render(<TodoList />,document.getElementById('root'))