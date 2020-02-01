import { EmployeeService } from '../../employees/classes/service.employees';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'
import { Component } from '@angular/core'
import { Employee } from 'src/app/employees/classes/model.employee';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})

export class SelectComponent {

    myControl = new FormControl()
    options: Employee[] = []
    filteredOptions: Observable<Employee[]>
    selectedId: string

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.populateDropDowns()
        this.listenForChanges()
    }

    displayFn(employee?: Employee) {
        if (employee) {
            this.selectedId = employee.id.toString()
            console.log(this.selectedId)
        }
        return employee ? employee.name : undefined
    }

    private _filter(name: string): Employee[] {
        const filterValue = name.toLowerCase()

        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0)
    }

    private populateDropDowns() {
        this.employeeService.getAll().subscribe(result => {
            this.options = result
        })
    }

    private listenForChanges() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => typeof value === 'string' ? value : value.name),
                map(me => me ? this._filter(me) : this.options.slice())
            )
    }

    onShopSelectionChanged(event) {
        // const selectedValue = event.option.id
        this.selectedId = event.option.id
        // console.log(selectedValue)
        // const selectedName = event.option.value
        // console.log(selectedName)
    }
}   