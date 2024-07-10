import { Request, Response } from 'express';
import { BookService } from '../services/bookService';

export class BookController {
  private bookService = new BookService();

  getAllBooks = async (req: Request, res: Response) => {
    try {
      const books = await this.bookService.getAllBooks();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: (err as any).message });
    }
  };

  getBookById = async (req: Request, res: Response) => {
    try {
      const book = await this.bookService.getBookById(Number(req.params.id));
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: (err as any).message });
    }
  };

  createBook = async (req: Request, res: Response) => {
    try {
      const book = await this.bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ message: (err as any).message });
    }
  };

  updateBook = async (req: Request, res: Response) => {
    try {
      const book = await this.bookService.updateBook(Number(req.params.id), req.body);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      res.status(400).json({ message: (err as any).message });
    }
  };

  deleteBook = async (req: Request, res: Response) => {
    try {
      const result = await this.bookService.deleteBook(Number(req.params.id));
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: (err as any).message });
    }
  };
}
