import { AppDataSource } from '../ormconfig';
import { Book } from '../entities/book';

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async getAllBooks() {
    return this.bookRepository.find();
  }

  async getBookById(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  async createBook(bookData: Partial<Book>) {
    const book = this.bookRepository.create(bookData);
    return this.bookRepository.save(book);
  }

  async updateBook(id: number, bookData: Partial<Book>) {
    await this.bookRepository.update(id, bookData);
    return this.getBookById(id);
  }

  async deleteBook(id: number) {
    await this.bookRepository.delete(id);
    return { message: 'Book deleted successfully' };
  }
}
