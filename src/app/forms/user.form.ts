import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";


export const USER_INSERT_FORM: FormContent = {
    lastname: ['', [V.required, V.minLength(2)]],
    firstname: ['',[V.required, V.minLength(2)]],
    email: ['', [V.required, V.email]],
    phoneNumber: ['', [V.required, V.minLength(2)]],
    userName: ['', [V.required, V.minLength(2)]],
    password: ['', [V.required, V.minLength(2)]],
    active: [true]
}
