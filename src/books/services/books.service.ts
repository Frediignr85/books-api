import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CtlBooks } from '../entities/ctlBooks.entity';
import { getBooksModel } from '../models/getBookModel';
import { CreateBookDto, UpdateBookDto } from '../dtos/books.dtos';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(CtlBooks) private booksRepository: Repository<CtlBooks>,
    private dataSource: DataSource,
  ) {}

  /**
   * This method will be used to be able to paginate all the records of the table
  ctl_books found in the system
   * @param payload : getBooksModel
   * @returns data
   */
  async findAll(payload: getBooksModel) {
    try {
      const data = await this.dataSource
        .getRepository(CtlBooks)
        .createQueryBuilder('ctl_books')
        .select(['ctl_books.id', 'ctl_books.name', 'ctl_books.active'])
        .where('ctl_books.name ilike :search', {
          search: `%${payload.search}%`,
        })
        .orderBy(payload.orderField, payload.directionOrder)
        .skip(payload.take * payload.page)
        .take(payload.take)
        .getManyAndCount();
      return data;
    } catch (error) {
      throw new NotFoundException('No book records found', error);
    }
  }

  /**
   * This method is used to bring the record of a specific book
   * @param id : string
   * @returns book
   */
  async findOne(id: string) {
    const book = await this.booksRepository.findOne({
      where: { id },
    });
    if (!book) {
      throw new NotFoundException('The book was not found in the process.');
    }
    return book;
  }

  /**
   * This method is used to create a new record of a book
   * @param data : CreateBookDto
   * @returns dataBook
   */
  async create(data: CreateBookDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const dataBook = await queryRunner.manager.save(CtlBooks, [
        {
          id: uuidv4(),
          name: data.name,
          active: data.active,
        },
      ]);
      await queryRunner.commitTransaction();
      return dataBook;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new NotFoundException(error);
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * This method is used to update a record of an existing book in the database
   * @param id : string
   * @param payload : UpdateBookDto
   * @returns bookReturn
   */
  async update(id: string, payload: UpdateBookDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(
        CtlBooks,
        {
          id,
        },
        {
          name: payload.name,
          active: payload.active,
        },
      );
      await queryRunner.commitTransaction();
      const bookReturn = await this.findOne(id);
      return bookReturn;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new NotFoundException(error);
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * This method is used to activate a record of a book
   * @param id : string
   * @returns bookReturn
   */
  async activate(id: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(
        CtlBooks,
        {
          id,
        },
        {
          active: true,
        },
      );
      await queryRunner.commitTransaction();
      const bookReturn = await this.findOne(id);
      return bookReturn;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new NotFoundException(error);
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * This method is used to deactivate a record of a book
   * @param id : string
   * @returns bookReturn
   */
  async deactivate(id: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(
        CtlBooks,
        {
          id,
        },
        {
          active: false,
        },
      );
      await queryRunner.commitTransaction();
      const bookReturn = await this.findOne(id);
      return bookReturn;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new NotFoundException(error);
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * This method is used to soft-delete a record from a book
   * @param id : string
   * @returns book
   */
  async remove(id: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const book = await this.findOne(id);
      await queryRunner.manager.softDelete(CtlBooks, {
        id: id,
      });
      await queryRunner.commitTransaction();
      return book;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new NotFoundException(error);
    } finally {
      await queryRunner.release();
    }
  }
}
