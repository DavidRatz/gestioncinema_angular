import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";

export const SESSION_INSERT_FORM: FormContent = {
    refTheater: ['', [V.required, V.minLength(2)]],
    refRoom: [''],
    date: [""],
    refMovie: ['', [V.required, V.minLength(2)]]
};
