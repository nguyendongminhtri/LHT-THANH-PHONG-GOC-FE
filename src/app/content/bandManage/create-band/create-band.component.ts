import { Component, OnInit } from '@angular/core';
import {Band} from '../../../model/Band';
import {BandService} from '../../../service/band-service/band.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.scss']
})
export class CreateBandComponent implements OnInit {
form: any = {};
band: Band;
error: any = {
  message: "no_avatar_band"
}
success: any = {
  message: "create_success"
}
  status = 'Please fill in the form to create Band!';
  constructor(private bandService: BandService) { }

  ngOnInit(): void {
  }

  uploadAvatar($event: string) {
    this.form.avatarBand = $event;
  }

  createBand() {
    this.band = new Band(
      this.form.nameBand,
      this.form.avatarBand,
      this.form.description
    )
    this.bandService.createBand(this.band).subscribe(data =>{
        if(JSON.stringify(data)==JSON.stringify(this.error)){
            this.status = 'Please upload File!'
        }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Create success!'
      }
    })
  }
}
