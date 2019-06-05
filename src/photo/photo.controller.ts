import { Controller, Get, Post, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    console.error('Pass in Photo Controller findAll');
    console.error("This photservice", this.photoService);
    return this.photoService.findAll();
  }

  @Post()
  create(@Body() photo: Photo) {
    return this.photoService.createPhoto(photo);
  }
}
