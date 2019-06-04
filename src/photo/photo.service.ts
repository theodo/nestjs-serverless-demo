import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import {getConnection} from "typeorm";

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    console.error('this.photoRepository',this.photoRepository)
    let dataToReturn = await this.photoRepository.find();
    console.error('dataToReturn :', dataToReturn);
    const connection = await getConnection();
    console.error('final connection :', connection);
    let connectionClose = await connection.close();
    console.error('connectionClose :', connectionClose);
    return dataToReturn;
  }
}
