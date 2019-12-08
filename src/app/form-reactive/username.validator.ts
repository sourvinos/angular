import { AbstractControl, ValidatorFn } from "@angular/forms"

// Custom validation
// Expects a string to check and returns a Validator Function
// If the check is true, it returns a key-value pair named 'forbiddenName'
// If the check is false, it returns null
export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
	// IMPORTANT: The AbstractControl refers to the FormGroup NOT the userName field
	// With this, we can check against multiple fields.
	// Check the password validator to see it in action!
	return (control: AbstractControl): { [key: string]: any } | null => {
		const forbidden = forbiddenName.test(control.value)
		// 'forbiddenName' will be returned. Use it inside the template
		return forbidden ? { 'forbiddenName': { value: control.value } } : null
	}
}
