import { Injectable } from '@nestjs/common';
import { PhotoRepository } from './photo.repository';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(private readonly PhotoRepository: PhotoRepository) {}

  async findAll(): Promise<Photo[]> {
    return await this.PhotoRepository.findAll();
  }
}
