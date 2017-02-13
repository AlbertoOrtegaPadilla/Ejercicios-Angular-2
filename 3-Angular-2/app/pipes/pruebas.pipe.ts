import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "pruebas"})
export class PruebasPipe implements PipeTransform{
    transform(value, por) : string {
        
        let valuev = parseInt(value);
        let porv = parseInt(por);
        
        let result = "la multiplicación:" + valuev + "x" + porv + " = " + (valuev*porv);

        return result; 
    }
}