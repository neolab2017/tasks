import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  List: any[] = [];
  id: number = 1;

  saveTask(form: NgForm) {
    this.List.push(new Task(this.id++, form.value.title, form.value.description));
    form.resetForm()
  }

}
