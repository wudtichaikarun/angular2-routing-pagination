export interface Book {
    id?: number;
    title: string;
    description: string;
    content?: string;
    reviews?: string[];
    prevId?: number;
    nextId?:number;

}


