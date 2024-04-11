import { PartialType } from '@nestjs/swagger';
import { CreateUser2Dto } from './create-user2.dto';

export class UpdateUser2Dto extends PartialType(CreateUser2Dto) {}
