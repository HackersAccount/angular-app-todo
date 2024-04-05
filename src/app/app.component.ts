import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-todo';

  private list = new TodoList("Munashe", [
    new TodoItem("Learn flutter page navigation.", true),
    new TodoItem("Handling data assets in flutter."),
    new TodoItem("Testing the Flutter User Interface", true),
    new TodoItem("Working with Firebase and Flutter"),
    new TodoItem("Introducing Cloud Services"),
    new TodoItem("Organizing On-Screen Data", true)
]);

get username(): string {
    return this.list.user;
}

get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
}

get items(): readonly TodoItem[] {
    return this.list.items
        .filter(item => this.showComplete || !item.complete);
}

addItem(newItem: string) {
    if (newItem != "") {
        this.list.addItem(newItem);
    }
}

showComplete: boolean = false;
}
