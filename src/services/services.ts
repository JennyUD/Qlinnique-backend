import { Injectable } from '@nestjs/common';
import {MockData} from '../entities/entity'

@Injectable()
export class QlinniqueServices{
    private mockData : MockData[]=
    [
        {

        id: 1,
        logo:"LOGO1",
        email: "igboanugouj9599@gmail.com",
        password:"Password"
    },
    {
        id:2,
        logo:'LOGO2',
        email:'jennifer@gmail.com',
        password:'password'
    }

];

getAll()
{return this.mockData}


    
}