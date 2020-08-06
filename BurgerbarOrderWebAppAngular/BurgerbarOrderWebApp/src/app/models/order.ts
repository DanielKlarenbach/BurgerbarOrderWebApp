import { User } from './user'
export class Order {
    id: number;
    user: User;
    date: Date;
    isActive: boolean;

    constructor(id: number, user: User, date: Date, isActive: boolean) {
        this.id=id;
        this.user=user;
        this.date=date;
        this.isActive=isActive;
    }
}