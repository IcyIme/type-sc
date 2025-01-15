/*
    This input checker util checks input and returns boolean value (true/false)
*/

// This function checking if input is not empty string or nulll
export function nullCheck(input: string) : boolean {
    return input.trim() === '' || input === null
}

// This function checking if input is no longer than allowed max size of string (couting spaces)
export function allowedsizeOfSting(input: string, masxSizeOfString: number) : boolean {
    return input.length > masxSizeOfString
}