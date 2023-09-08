import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import type { OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }
  ngDoCheck() {
    console.log('ngDoCheck() called');
  }
  ngOnChanges() {
    console.log('ngOnChanges() called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }
}
