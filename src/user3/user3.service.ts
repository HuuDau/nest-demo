import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User3 } from './entities/user3.entity';
import { CreateUser3Dto } from './dto/create-user3.dto';
import { UpdateUser3Dto } from './dto/update-user3.dto';


@Injectable()
export class User3Service {
  constructor(
    @InjectRepository(User3)
    private readonly user3Repository: Repository<User3>
  ) {

  }
  create(createUser3Dto: CreateUser3Dto) {
    return 'This action adds a new user2';
  }

  findAll() {
    return this.user3Repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user2`;
  }

  update(id: number, updateUser3Dto: UpdateUser3Dto) {
    return `This action updates a #${id} user2`;
  }

  remove(id: number) {
    return `This action removes a #${id} user2`;
  }
}
