import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { BaseComponent } from './base/base.component';

@NgModule({
    declarations: [FormComponent, ListComponent, BaseComponent],
    imports: [CommonModule]
})

export class AddressesModule { }
