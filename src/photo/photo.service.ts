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
    return await this.photoRepository.find();
  }

  async createPhoto(photo: Photo) {
    const createdPhoto = await this.photoRepository.save(photo);
    return createdPhoto;
  }
}
