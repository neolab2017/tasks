import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TableTasksComponent } from './models/table-tasks/table-tasks.component';


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
