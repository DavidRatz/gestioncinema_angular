import { AbstractControl, FormArray, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";

export const MOVIE_INSERT_FORM: FormContent = {
    title: ['', [V.required, V.minLength(2)]],
    description: [''],
    releaseDate: [""],
    genres: new FormArray([]),
};
