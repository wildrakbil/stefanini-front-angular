import { Service } from './service';
import { User } from './user';

export class  Reserva {

    id: Number;
    user: User;
    service: Service;
    day: string;
    startTime: Number;
}
