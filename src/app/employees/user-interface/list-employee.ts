import { Component } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { employee } from '../classes/model.employee'
import { EmployeeService } from '../classes/service.employee'

@Component({
    selector: 'list-employee',
    templateUrl: './list-employee.html',
    styleUrls: ['./list-employee.css']
})

export class EmployeeListComponent {

    employees: employee[]
    navigationSubscription: any

    constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                console.log('Constructor Navigation end')
                this.employeeService.getEmployees().subscribe(result => {
                    this.employees = result
                })
            }
        });

    }


    ngOnInit() {
        this.employeeService.getEmployees().subscribe(result => {
            this.employees = result
        })
    }

    getEmployee(employee: employee) {
        this.router.navigate(['../' + employee.id], {
            relativeTo: this.activatedRoute
        })
    }

}
