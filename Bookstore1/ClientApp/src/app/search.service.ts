import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchBase } from './search-base';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  toFormGroup(terms: SearchBase<string>[]) {
    const group: any = {};

    terms.forEach(term => {
      group[term.key] = term.required ? new FormControl(term.value || '', Validators.required)
        : new FormControl(term.value || '');
    });
    return new FormGroup(group);
  }
}
