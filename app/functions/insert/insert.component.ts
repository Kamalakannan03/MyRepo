import {Component} from '@angular/core';
import {ApiService} from '../../shared/api.service';

@Component({
  moduleId: module.id,
  selector: 'functions-insert',
  templateUrl: 'insert.component.html',
  styleUrls:['insert.component.scss']
})
export class InsertComponent {
  api: ApiService;
  constructor(api:ApiService) {
    this.api=api;
  }
}
