import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signal-ejemplo4',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './signal-ejemplo4.component.html',
  styleUrl: './signal-ejemplo4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEjemplo4Component {
todoName = " "
todos: WritableSignal<string[]> = signal([])

addTodo(todo:HTMLInputElement) {
  const item = todo.value;
  this.updateTodos(item)
  this.resetAndFocus(todo)

}

updateTodos(todo:string){
  if(todo.length>0){
  this.todos.update((todos) => [todo, ...todos] ) //operador Explayarse los 3 puntos, toma un array, extrae todos los elementos y los pone en donde  estoy haciendo eso
  }
}

resetAndFocus(todo: HTMLInputElement){
  todo.value = '';
  todo.focus();
}
}
