import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly svc: TodosService) {}

  @Get()
  list() {
    console.log('GET /todos called');
    return this.svc.findAll();
  }

  @Post()
  create(@Body() body: { title: string }) {
    console.log('POST /todos body:', body);
    if (!body?.title?.trim()) {
      return { error: 'title is required' };
    }
    return this.svc.create(body.title.trim());
  }
}
