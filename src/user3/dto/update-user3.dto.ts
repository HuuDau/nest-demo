import { PartialType } from '@nestjs/swagger';
import { CreateUser3Dto } from './create-user3.dto';

export class UpdateUser3Dto extends PartialType(CreateUser3Dto) {}
