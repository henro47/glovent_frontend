import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  property_formgroup = this.formBuilder.group({
    stand_number: ['', Validators.required],
    property_number: ['', Validators.required],
    street_number: ['', Validators.required],
    street_name: ['', Validators.required],
    suburb: ['', Validators.required],
    city: ['',Validators.required],
    postal_code: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required],
    stand_size: ['', Validators.required],
    building_size: ['', Validators.required],
    file: [],
  });

  ngOnInit() {
  }

  create_property(){
    console.log(this.property_formgroup.value);
  }

  inputChange(fileInputEvent: any){
    let file = fileInputEvent.target.files[0];
    console.log(file);
  }
}
