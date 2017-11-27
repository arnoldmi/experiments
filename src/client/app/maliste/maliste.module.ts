import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MalisteRoutingModule } from './maliste-routing.module';
import { MalisteComponent } from './maliste.component';
import { ListeFormComponent } from './listeform.component';


@NgModule({
    imports: [MalisteRoutingModule, SharedModule, ReactiveFormsModule],
    declarations: [MalisteComponent, ListeFormComponent],
    exports: [MalisteComponent]
})

export class MalisteModule {}
