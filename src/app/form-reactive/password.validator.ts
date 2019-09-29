import { AbstractControl } from "@angular/forms";

// Custom validation
// Expects a control (FormGroup) and returns an object
// If the check is true, it returns a key-value pair
// If the check is false, it returns null
export function PasswordValidator(control: AbstractControl): { [key: string]: any } | null {
	const password = control.get('password');
	const confirmPassword = control.get('confirmPassword');
	const validationFailed = password && confirmPassword && !password.pristine && !confirmPassword.pristine && password.value !== confirmPassword.value;

	// console.log('Password ' + password.value);

	return validationFailed ? { 'mismatch': { value: true } } : null;
}
