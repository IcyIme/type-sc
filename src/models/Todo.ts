import { nullCheck, allowedsizeOfSting } from "../utils/InputChecker"

export class Todo{
    private _title: string = ""
    private _description: string = ""
    private _dateOfCreation: Date

    constructor(){
        this._dateOfCreation = new Date
    }

    // Checks input form util lib. named InputChecker and if iinput is invalid returns an error.
    check(input: string, allowedSize: number, nameOfProperty: string) {
        let a = input.length
        if (nullCheck(input)) {
            throw new Error(`${nameOfProperty} must not be null or empty string`)
        }
        
        if (allowedsizeOfSting(input, allowedSize))  {
            throw new Error(`Size of your ${nameOfProperty} is out of allowed range, max allowed chars is ${String(allowedSize)}`) 
        }
    }

    // Getter and setters
    set title(input: string) {
         this.check(input, 15, "Title")
        this._title = input
    }

    get title() : string {
        return this._title
    }

    set description(input: string) {
        this.check(input, 40, "Description")
        this._description = input
    }

    get description() : string {
        return this._description
    }

    get dateOfCreation() {
        return String(this._dateOfCreation)
    }
}