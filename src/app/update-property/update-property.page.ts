import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.page.html',
  styleUrls: ['./update-property.page.scss'],
})
export class UpdatePropertyPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private api_servive: ApiService,
    private alert_service: AlertService) { }
  property_id: String = "";

  file: any;
  property_formgroup = this.formBuilder.group({
    stand_number: [''],
    property_number: [''],
    street_number: [''],
    street_name: [''],
    suburb: [''],
    city: [''],
    postal_code: [''],
    latitude: [''],
    longitude: [''],
    stand_size: [''],
    building_size: [''],
    file: [''],
  });

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.property_id = params['id'];
    });
  }
  
  update_property() {
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

    this.api_servive.update_property(this.property_id, formData).subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    });
  }

  inputChange(fileInputEvent: any) {
    this.file = fileInputEvent.target.files[0];
    console.log(this.file);
  }

  remove_property() {
    this.alert_service.InputValidationAlert(this.property_id, (is_valid: boolean) => {
      if (is_valid) {
        this.api_servive.remove_property(this.property_id).subscribe((response) => {
          console.log(response);
          this.alert_service.SuccessfulAlert();
        },
          (error) => {
            console.error(error);
            this.alert_service.internalErrorAlert();
          })
      }
      else{
        this.alert_service.badRequestAlert();
      }
    });

  }
}
