import { AbstractControl } from '@angular/forms'

// Custom validation
// Expects a control (FormGroup) and returns an object
// If the check is true, it returns a key-value pair
// If the check is false, it returns null
export function PasswordValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')
    const verifyPassword = control.get('verifyPassword')
    const validationFailed = password && verifyPassword && !password.pristine && !verifyPassword.pristine && password.value !== verifyPassword.value

    // console.log('Password: ' + password.value)
    // console.log('Confirm password: ' + confirmPassword.value)
    // console.log('Validation: ' + !validationFailed)
    // const validationFailed = true

    return validationFailed ? { 'mismatch': { value: true } } : null
}
