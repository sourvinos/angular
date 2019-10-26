import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core'
import { employee } from './models/employees'
import { EmployeeService } from './services/employee.service'

@Component({
    selector: 'app-list-employees',
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
})

export class ListEmployeesComponent implements OnInit, AfterViewInit {

    currentItem: number = 0

    employees: employee[]

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe((result) => {
            this.employees = result
        })
    }

    ngAfterViewInit() {
        document.querySelectorAll('div.panel')[0].classList.add('selected')
        this.currentItem = 0
        console.log('Count', this.employees.length)
        console.log('After init', this.currentItem)
    }

    selectItem(i: number) {
        document.querySelectorAll('div.panel')[this.currentItem].classList.remove('selected')
        document.querySelectorAll('div.panel')[this.currentItem = i].classList.add('selected')
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { altKey: any; shiftKey: any; key: { toUpperCase: { (): string; (): string; (): string; (): string; (): string; }; }; }) {
        if (event.key == 'ArrowUp') {
            document.querySelectorAll('div.panel')[this.currentItem].classList.remove('selected')
            this.currentItem = --this.currentItem < 0 ? this.currentItem = this.employees.length - 1 : this.currentItem
            document.querySelectorAll('div.panel')[this.currentItem].classList.add('selected')

        }
        if (event.key == 'ArrowDown') {
            document.querySelectorAll('div.panel')[this.currentItem].classList.remove('selected')
            this.currentItem = ++this.currentItem >= this.employees.length ? this.currentItem = 0 : this.currentItem
            document.querySelectorAll('div.panel')[this.currentItem].classList.add('selected')
        }
        if (event.key == "Enter") {
            console.log("Enter pressed")
        }
    }

}
