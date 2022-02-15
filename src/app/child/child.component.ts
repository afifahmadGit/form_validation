import { Component, Input, Inject, OnInit } from '@angular/core';
import { SerService } from '../ser/ser.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
// import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  id: any;
  data: any;
  constructor(
    private d_ref:MatDialogRef<ChildComponent>	,
    @Inject(MAT_DIALOG_DATA) public getData: any,
    private ser: SerService
  ) {}
  ngOnInit(): void {
    this.data = this.getData;
    this.id = this.data._id;
  }
  submit(e: any) {
    this.ser.update({ data: e, id: this.id }).subscribe((res) => {
      if(res){
        this.d_ref.close(res)
      }
    });
  }
}
