import { Employee } from './model.employee'

export class ResolvedEmployeeList {
    constructor(public employeeList: Employee[], public error: any = null) { }
}
