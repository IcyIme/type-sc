import { Todo } from "./models/Todo"
import { CreateTodo } from "./services/CreateTodo"
import { getUserInput } from "./utils/Input"

let arrayOfTodos: Todo[] = [];

async function main() : Promise<void> {
  const menu: string = `
    1 - add todo
    2 - show todos
    3 - remove todo
    `;

  while (true) {
    // Prints menu.
    console.log(menu);

    // Getting input as string.
    const input: string = await getUserInput("Choose: ")

    //Comparing input and choose correct function.
    switch (input) {
        // Adding to array.
        case "1":
            const todo = await CreateTodo()
            arrayOfTodos.push(todo);
            break;

        // Shows all todos.
        case "2":
            for (let i = 0; i < arrayOfTodos.length; i++) {
            console.log(arrayOfTodos[i]);
            }
            break;

        // Remove item from todo.
        case "3":
            const indexToRemove = await getUserInput("Enter the index of the todo to remove: ");
            remnove(indexToRemove)
            break;

        default:
            console.log("Invalid choice. Please choose a valid option.")
    }
  }
}

// This function removes item from array.
function remnove(indexToRemove: string) : void{
    const index = parseInt(indexToRemove);

    if (!isNaN(index) && index >= 0 && index < arrayOfTodos.length) {
        arrayOfTodos.splice(index, 1)
        console.log(`Todo at index ${index} removed.`)
    } 
    else {
        console.log("Invalid index.")
    }
}

main()
