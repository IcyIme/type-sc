import { Todo } from "../models/Todo";
import { getUserInput } from "../utils/Input";

// This is ansync function that reading user input and returns Todo object.
export async function CreateTodo() : Promise<Todo>{
    while(true){
        // There we getting the input
        const Todotitle: string = await getUserInput("Enter name of your title: ")
        const Tdoodescription: string = await getUserInput("Enter your description of yout todo: ")

        /* There we checking and handling an errors what we defines in Todo model and assing values into todo model.
           This function returns completed Todo object*/
        try {
          let newTodo = new Todo();
          newTodo.title = Todotitle;
          newTodo.description = Tdoodescription;
          return newTodo
        }
        catch (error){
          console.log(String(error))
        }
    }
}