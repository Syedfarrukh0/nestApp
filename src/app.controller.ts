import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";


@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    // add book
    @Post('/add')
    addBook() : string{
       return this.bookService.addBook();
    } 

    // update book
    @Put('/update')
    updateBook() : string{
        return this.bookService.updateBook();
    }

    // delete book
    @Delete('/delete')
    deleteBook() : string{
        return this.bookService.deleteBook();
    }

    // get all books
    @Get('/getAll')
    getAllBooks() : string{
        return this.bookService.getAllBooks();
    }

    // get book by id
    @Get('/getBook/:bookId')
    getBook(@Param() params) : any{
     return this.bookService.getBook(params.bookId);   
    }
}