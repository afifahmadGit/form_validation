// import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';
import { SerService } from './ser/ser.service';

// materials

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  i: any;
  stdData: any;
  selected = 'selected';
  form!: FormGroup;
  file: any;
  tm: any;
  // for unique value
  id: any;
  // gettig data from child to update
  // searching

  oneData(e: any) {
    console.log(e);
    this.stdData = e;
  }

  constructor(private ser: SerService, private http: HttpClient) {}
  ngOnInit() {


    setInterval(() => {
      let hh = new Date().getSeconds();
      let min = new Date().getMinutes();
      this.tm = `${new Date().getHours()}:${min}:${hh}`;
    }, 1000);
    this.ser.count().subscribe((data: any) => {
      this.i = data.count;
      this.stdData = data.data;
      // console.log()
    });
    this.form = new FormGroup({
      name: new FormControl(''),
      addr: new FormControl(''),
      contact: new FormControl(''),
      gender: new FormControl(''),
      batch: new FormControl(),
      html: new FormControl(false),
      css: new FormControl(false),
      js: new FormControl(false),
      ng: new FormControl(false),
      // file: new FormControl(''),
    });
  }
  change(e: any) {
    this.file = e.target.files[0];
  }
  // submit(){
  //     console.log(this.form)
  // }
  submit() {
    // if (typeof(this.i)==Number){
    //   i++
    // }
    console.log(this.form)
    let value = this.form.value;
    const formData = new FormData();
    if (this.file != undefined) {
      formData.append('file', this.file);
      formData.append('addr', value.addr);
      formData.append('gender', value.gender);

      const formMsg = document.getElementById('formMsg');
      let num = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (value.name.length >= 3) {
        formData.append('name', value.name);
        if (num.test(value.contact) == true) {
          formData.append('contact', value.contact);
          if (value.batch == null) {
            if (formMsg) {
              setTimeout(() => {
                formMsg.innerText = '';
              }, 2000);
              formMsg.innerText = 'Please Select Batch';
            }
          } else {
            formData.append('batch', value.batch);
            if (
              value.html == true ||
              value.css == true ||
              value.js == true ||
              value.ng == true
            ) {
              formData.append('html', value.html);
              formData.append('css', value.css);
              formData.append('js', value.js);
              formData.append('ng', value.ng);
              if (formMsg) {
                setTimeout(() => {
                  formMsg.innerText = '';
                }, 2000);
                formMsg.innerText = 'Form Succesfully Submitted ';
                this.ser.formDetails(formData).subscribe((res: any) => {
                  this.i = res.count;
                  this.stdData = res.data;
                });
              }
            } else {
              if (formMsg) {
                setTimeout(() => {
                  formMsg.innerText = '';
                }, 2000);
                formMsg.innerText = 'Please Select One or More Subjects';
              }
            }
          }
        } else {
          if (formMsg) {
            setTimeout(() => {
              formMsg.innerText = '';
            }, 2000);
            formMsg.innerText = 'Please Enter Valid Number';
          }
        }
      } else {
        if (formMsg) {
          setTimeout(() => {
            formMsg.innerText = '';
          }, 2000);
          formMsg.innerText = 'Please Enter more than 3 Characters in Name';
        }
      }
    } else {
      console.log('plz upload file');
    }

  }


}
