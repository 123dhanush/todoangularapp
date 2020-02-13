import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { AutofocusModule } from "angular-autofocus-fix";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./component/todo-list/todo-list.component";
import { TodoItemComponent } from './component/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
