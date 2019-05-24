import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    constuctor() {
        console.error("In App service")
    }
    getHello(): string {
        return 'Hello World! Nest ';
    }
}
