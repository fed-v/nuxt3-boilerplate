// Takes a date and displays it in yyyy-mm-dd format
export const displayDate = (date: string): string => {
    
    const options = { month: "short", day: "numeric", year: "numeric" };
    const dateString = date.substring(0, 10);
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
      
    return formattedDate;
}

// Clone an object
export const cloneObject = (obj: any): any => {
    return Object.assign({}, obj);
}

// This method simply takes a boolean and toggles it. 
export function toggleBoolean(ref: Ref<boolean>): void {
    ref.value = !ref.value;
};