import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";

export const ADDRESS_FORM: FormContent = {
    street: ['', [V.required, V.minLength(2)]],
    number: ['', [V.required, V.minLength(2)]],
    postCode: ['', [V.required, V.minLength(2)]],
    city: ['', [V.required, V.minLength(2)]],
    country: ['', [V.required, V.minLength(2)]]
}

export const CINEMA_INSERT_FORM: FormContent = {
    name: ['', [V.required, V.minLength(2)]],
    dateCreation: [''],
    phoneNumber: [""],
    address: ADDRESS_FORM
}


