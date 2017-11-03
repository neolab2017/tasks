import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.css']
})
export class TableTasksComponent {

  through: boolean = false;
  @Input("tasksList") List: any[];

  finished(id) {
    this.List.forEach(task => {
      if (task.id === id) {
        task.finised = !task.finised
        task.data = task.data ? null : (new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString())
      }
    })
  }

  remove(id: number) {
    this.List.forEach(task => {
      if (task.id === id) {
        let index = this.List.indexOf(task)
        this.List.splice(index, 1)
      }
    })
  }
}
