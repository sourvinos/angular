import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from '../classes/service.employees'
import { department } from './../classes/model.department'
import { Employee } from './../classes/model.employee'

@Component({
    selector: 'form-employee',
    templateUrl: './form-employee.html',
    styleUrls: ['./form-employee.css']
})

export class EmployeeFormComponent implements OnInit {

    employeeId: number
    employee: Employee
    isPreviewPhoto: boolean = false
    errorMessage: string = ''

    form = this.formBuilder.group({
        id: 0,
        name: ['', Validators.required],
        email: ['', Validators.required]
    })

    departments: department[] = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'Sales' },
        { id: 3, name: 'Human resources' },
        { id: 4, name: 'Marketing' }
    ]

    constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
        this.errorMessage = ''
        this.activatedRoute.params.subscribe(p => {
            this.employeeId = p['id']
        })
    }

    ngOnInit() {
        if (this.employeeId) {
            this.employeeService.getSingle(this.employeeId).subscribe(
                result => {
                    this.employee = result
                    this.form.setValue({
                        id: this.employee.id,
                        name: this.employee.name,
                        email: this.employee.email
                    })
                }
            )
        }
    }

    canDeactivate() {
        if (this.form.dirty) {
            let response = confirm('Please confirm')
            if (response) {
                return true
            }
        } else {
            return true
        }
    }

    updateEmployee() {
        if (this.form.value.id) {
            console.log('Updating', this.form.value.id)
            this.employeeService.update(this.form.value).subscribe(result => {
                console.log('After the update', result)
                this.form.reset()
                this.router.navigate(['/employees/list'])
            })
        }
        if (!this.form.value.id) {
            console.log('Saving')
            this.employeeService.create(this.form.value).subscribe(result => {
                this.form.reset()
                console.log('After the save', result)
                this.router.navigate(['/employees/list'])
            })
        }
    }

    deleteEmployee() {
        if (confirm('This will be deleted')) {
            this.employeeService.delete(this.form.value.id).subscribe(
                result => {
                    console.log('After the delete', result)
                    this.router.navigate(['/employees/list'])
                })
        }
    }

    onShowPreview() {
        this.isPreviewPhoto = !this.isPreviewPhoto
    }

    get name() {
        return this.form.get('name')
    }

    get email() {
        return this.form.get('email')
    }

}
