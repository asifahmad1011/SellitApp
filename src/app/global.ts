export class GlobalApp {

    constructor() {}
    
    public localStorageItem(matrikel_number: string): string {
        return localStorage.getItem(matrikel_number);
    }
}