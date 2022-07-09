import {Body, Controller, Get, Patch, Post,Param,Res,HttpStatus, Delete} from '@nestjs/common';
import {QlinniqueServices} from '../services/services'
import { SignUpDto, UpdateDto } from 'src/dto/signup.dto';

@Controller('Qlinnique')
export class QlinniqueControllers{
    constructor(private readonly qlinniqueServices: QlinniqueServices){}

    @Get()
    getMockData(){
        return this.qlinniqueServices.getAll()
       //response.status(200).send('This action returns mock data')
    }
   
// @Post()
// SignUp(@Body() signUpDto : SignUpDto){
//     return this.qlinniqueServices.SignUp(signUpDto)
// }

// @Patch(':id')
// Update(@Param(':id') id:string, @Body() update : UpdateDto){
//     return this.qlinniqueServices.Update(id,update);
// }

@Delete(':id')
del(@Param('id') id: string){
    return `This action removes ${id}`
}

}