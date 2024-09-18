import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService {
    // add book
    addBook() : string{
        return "This is the add book controller"
    } 

    // update book
    updateBook() : string{
        return "This is the update book controller"
    }

    // delete book
    deleteBook() : string{
        return "This is the delete book controller"
    }

    // get all books
    getAllBooks() : string{
        return "This is the get all books controller"
    }

    // get book by id
    getBook(bookId: any) {
        return `This is the get book by id# ${bookId} controller`
    }
}