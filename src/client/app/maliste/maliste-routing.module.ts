import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MalisteComponent } from './maliste.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'maliste', component: MalisteComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MalisteRoutingModule { }
