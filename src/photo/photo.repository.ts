import { Photo } from './photo.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PhotoDto } from './interfaces/photo.dto';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
    findAll = async() => {
        console.error('Pass in Photo Repository');
        return await this.find();
    }
}
