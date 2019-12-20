import { Component, AfterViewInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { employee } from '../classes/model.employee'
import { element } from 'src/app/models/element'

@Component({
    selector: 'list-employee',
    templateUrl: './list-employee.html',
    styleUrls: ['./list-employee.css']
})

export class EmployeeListComponent implements AfterViewInit {

    employees: employee[]
    navigationSubscription: any
    errorMessage: string = ''

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        console.log('constructor')
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            this.errorMessage = ''
            if (e instanceof NavigationEnd) {
                console.log('constructor navigation end')
                this.employees = this.activatedRoute.snapshot.data['employeeList']
            }
        })
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.changeColors()
    }

    getEmployee(employee: employee) {
        this.router.navigate(['../' + employee.id], {
            relativeTo: this.activatedRoute
        })
    }

}
