import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { getBooksModel } from '../models/getBookModel';
import { CreateBookDto, UpdateBookDto } from '../dtos/books.dtos';

@Controller('books')
@ApiTags('Books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  @ApiOperation({
    summary: 'Endpoint to be able to list the books with pagination',
  })
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('orderField') orderField: string,
    @Query('directionOrder') directionOrder: 'ASC' | 'DESC',
  ) {
    const payload: getBooksModel = {
      skip,
      take,
      page,
      search,
      orderField,
      directionOrder,
    };
    return this.booksService.findAll(payload);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Endpoint to be able to search for a specific book.',
  })
  get(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Endpoint to register a book.',
  })
  create(@Body() payload: CreateBookDto) {
    return this.booksService.create(payload);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Endpoint to update the record of a specific book.',
  })
  update(@Param('id') id: string, @Body() payload: UpdateBookDto) {
    return this.booksService.update(id, payload);
  }

  @Put('activate/:id')
  @ApiOperation({
    summary: 'Endpoint to activate the registration of a specific book.',
  })
  activate(@Param('id') id: string) {
    return this.booksService.activate(id);
  }

  @Put('deactivate/:id')
  @ApiOperation({
    summary: 'Endpoint to deactivate the registration of a specific book.',
  })
  deactivate(@Param('id') id: string) {
    return this.booksService.deactivate(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'This endpoint deletes with softDelete a record from a book.',
  })
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
