
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TableTasksComponent } from './table-tasks/table-tasks.component';
import { TasksComponent } from './task/tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TableTasksComponent
  
 
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot ([
      {path: '', component: TasksComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
