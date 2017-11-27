import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'sd-formmalist',
  template: `
    <form [formGroup]="formGroupListe">
        <input formControlName="kadoNom" placeholder="Designation du cadeaux"/>
        <span [hidden]="formGroupListe.controls.kadoNom.valid">3 caractères minimum</span>
        <br>
        <textarea matInput placeholder="Description du cadeaux" formControlName="kadoDescription"></textarea>
        <br>
        <input formControlName="kadoPoids" placeholder="Préférence"/>
        <br>
        <button>Ajouter</button>
    </form>
    <br><br>
    <p>Valeurs du formulaire: {{ formGroupListe.value | json }}</p>
    <p>Validation status: {{ formGroupListe.status }}</p>
`

})

export class ListeFormComponent {
    formGroupListe: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.formGroupListe = fb.group ({
            kadoNom: ['',[Validators.required,Validators.minLength(3)]],
            kadoDescription: '',
            kadoPoids: ['',Validators.maxLength(5)]
        });
    }

}
