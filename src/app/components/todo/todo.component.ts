import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tWorks:string [] = [];
  inputTWorks:string = "";
  
  addTasks(){
    this.tWorks.push(this.inputTWorks);
  }
  removeTasks(){
    this.tWorks.pop();
  }
  removeTaskIndex(index: number){
    this.tWorks.splice(index, 1);
  }
}
