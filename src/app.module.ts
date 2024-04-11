import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User2Module } from './user2/user2.module';
import { User3Module } from './user3/user3.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs-api-v2',
    entities: ['src/**/*.entity.{ts,js}'],
    synchronize: true,
  }),
    ProductModule, UserModule, BookmarkModule, PrismaModule, User2Module, User3Module],
})
export class AppModule { }
