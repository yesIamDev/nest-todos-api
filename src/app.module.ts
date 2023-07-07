import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TodosModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5050,
    username: 'postgres',
    password: 'postgres',
    database: 'todos_db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true

  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
