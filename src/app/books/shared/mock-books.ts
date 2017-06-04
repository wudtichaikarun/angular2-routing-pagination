import { Book } from './book';

const books: Book[] = Array.from({ length: 30 }, (_, index) => {
    const id = index +1;

    return {
        id,
        title: `Title#${id}`,
        description: `Description#${id}`,
        content: `Content#${id}`,
        review: Array.from({ length: 3 }, (_, index) => `Review#${index + 1}`)
    
    }
})

export const MockBooks = books;