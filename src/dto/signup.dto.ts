import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class SignUpDto{
    @IsString()
    readonly nameOfClinic:string;

    @IsString()
    readonly logoOfClinic:string;

    @IsString()
    readonly practicingLicence:string;

    @IsString()
    readonly licenceExpirationDate:Date;

    @IsString()
    readonly clinicAdministrativeEmail:string;

    @IsString()
    readonly Password:string;
}

export class UpdateDto{
    readonly nameOfClinic?:string;
    readonly logoOfClinic?:string;
    readonly practicingLicence?:string;
    readonly licenceExpirationDate?:Date;
    readonly clinicAdministrativeEmail?:string;
    readonly Password?:string;  
}


export class UpdateDtoExt extends PartialType(UpdateDto){
   
}