export class ContactData{
    id: number=1;
    phoneNumber: String;
    email: String;
    address: String;
    description: String;

    constructor(phoneNumber: string, email: string, address: string, description: string){
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.address=address;
        this.description=description;
    }
}