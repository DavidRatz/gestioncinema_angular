
import { AbstractControlOptions } from "@angular/forms";

export type FormContent = {[key:string]: any};
export type FormStruct = [ FormContent, AbstractControlOptions | undefined ];