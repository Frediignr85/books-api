import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { CtlBooks } from './entities/ctlBooks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtlBooks])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
