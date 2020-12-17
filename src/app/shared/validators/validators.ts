import { AbstractControl } from '@angular/forms';

export function questionValidator(answer: string) {
    return (control: AbstractControl) => {
        if (control.value.toLowerCase() === answer.toLowerCase()) {
            return null;
        }
        return {'questionValidator': answer};
    }
}