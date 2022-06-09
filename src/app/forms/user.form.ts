import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";


export const USER_INSERT_FORM: FormContent = {
    lastname: ['', [V.required, V.minLength(2)]],
    firstname: ['',[V.required, V.minLength(2)]],
    email: ['', [V.required, V.email]],
    phoneNumber: ['', [V.required, V.minLength(2)]],
    username: ['', [V.required, V.minLength(2)]],
    password: ['', [V.required, V.minLength(2)]],
    active: [true]
}

export const USER_CONNEXION_FORM : FormContent = {
    'username': [ '', [V.required] ],
    'password': [ '', [V.required] ]
}