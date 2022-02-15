import { HttpClient } from '@angular/common/http';
// import { HtmlParser } from '@angular/compiler';
import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { SerService } from '../ser/ser.service';
import { MatDialog } from '@angular/material/dialog';
import { ChildComponent } from '../child/child.component';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
})
export class GetComponent implements OnInit {
  @ViewChild('deb') deb!: ElementRef;
  search: any | undefined;
  @Output() oneData = new EventEmitter();
  @Input() data: any;
  html!: string;
  js!: string;
  ng!: string;
  css!: string;
  constructor(
    private http: HttpClient,
    private ser: SerService,
    public dialog: MatDialog
  ) {}
  del(id: string) {
    this.ser.del(id).subscribe((res: any) => {
      this.data = res.data;
    });
  }
  find(id: any) {
    this.ser.find({ id: id, data: this.data }).subscribe((res) => {
      // this.oneData.emit(res);
      this.dialog
        .open(ChildComponent, { data: res })
        .afterClosed()
        .subscribe((res) => {
          this.oneData.emit(res);
        });
    });
  }
  scrl(){
    console.log(!this.deb)
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.deb.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000)
      
      )
      .subscribe((result) => {

        this.ser.debSearch(result).subscribe((res: any) => {
              // console.log(res)
              this.data=res

        });
      });
  }
}
