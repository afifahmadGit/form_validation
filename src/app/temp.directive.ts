import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTemp]'
})
export class TempDirective {

  constructor(private el:ElementRef,private rend:Renderer2) {
  }
  @HostBinding('class.cls') color:any
  @HostListener('click') mOver(){
    
    
    //  this.rend.setStyle(this.el.nativeElement,'color',"red") 
   }


}
