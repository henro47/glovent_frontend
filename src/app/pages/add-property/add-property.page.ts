import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private api_service: ApiService) { }
  file: any;
  property_formgroup = this.formBuilder.group({
    stand_number: ['', Validators.required],
    property_number: ['', Validators.required],
    street_number: ['', Validators.required],
    street_name: ['', Validators.required],
    suburb: ['', Validators.required],
    city: ['', Validators.required],
    postal_code: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required],
    stand_size: ['', Validators.required],
    building_size: ['', Validators.required],
    file: ['', Validators.required],
  });

  ngOnInit() {
  }

  create_property() {
    console.log(this.property_formgroup.value);

    let formData: FormData = new FormData();
    if (this.file != null) {
      formData.append('image', this.file, this.file.name);
    }

    formData.append('stand_number', String(this.property_formgroup.value.stand_number));
    formData.append('property_number', String(this.property_formgroup.value.property_number));

    const address = {
      street_no: this.property_formgroup.value.street_number,
      street_name: this.property_formgroup.value.street_name,
      suburb: this.property_formgroup.value.suburb,
      city: this.property_formgroup.value.city,
      postal_code: this.property_formgroup.value.postal_code
    };

    formData.append('address', String(JSON.stringify(address)));

    const GPS_lat_lng = {
      lat: this.property_formgroup.value.latitude,
      lng: this.property_formgroup.value.longitude
    };

    formData.append('GPS_lat_lng', String(JSON.stringify(GPS_lat_lng)));

    formData.append('stand_size', String(this.property_formgroup.value.stand_size));
    formData.append('building_size', String(this.property_formgroup.value.building_size));

    this.api_service.create_property(formData).subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    })

    this.property_formgroup.reset();
  }

  inputChange(fileInputEvent: any) {
    this.file = fileInputEvent.target.files[0];
    console.log(this.file);
  }
}
