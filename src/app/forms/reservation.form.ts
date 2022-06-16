import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";

import { FormContent } from "./forms";

export const RESERVATION_INSERT_FORM: FormContent = {
    refSession : ['', [V.required, V.minLength(2)]],
    username: ['', [V.required, V.minLength(2)]],
    quantity: ['', [V.required, V.minLength(2)]]

}