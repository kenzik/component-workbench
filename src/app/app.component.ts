import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  testForm: FormGroup;

  ngOnInit() {
    this.testForm = new FormGroup({
      count: new FormControl({ value: 7, disabled: false }, [Validators.required]),
      bool: new FormControl({ value: true, disabled: false }, [Validators.required]),

    });
  }

}
