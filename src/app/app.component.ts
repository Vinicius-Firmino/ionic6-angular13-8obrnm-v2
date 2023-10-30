import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ionic 6.2 Angular ' + VERSION.major;
  list:Array<Task> = [];
  nameTask:string;

  constructor() {}

  ionViewDidEnter() {}

  add(){
    this.list.push(new Task(this.nameTask));
    
  }

  remove(index){
    this.list.splice(index,1);
  }
}

class Task{
  name: string;
  isConclued:boolean;


  constructor(name:string){
    this.name = name;
  }
}


