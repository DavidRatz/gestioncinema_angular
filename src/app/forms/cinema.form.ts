import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";


export const CINEMA_INSERT_FORM: FormContent = {
    name: ['', [V.required, V.minLength(2)]],
    dateCreation: [''],
    phoneNumber: [""],
    active: [true],
}
