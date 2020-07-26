import { Component, OnInit, Output,Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() pageIndex=new EventEmitter<number>();
  localPageIndex: number=1;
  @Input() numberOfPages;
  pages: number[];

  constructor() { }

  ngOnInit(): void {
    this.pages=Array(this.numberOfPages).fill(0).map((x,i)=>i); 
  }

  ngOnChanges(): void{
    this.pages=Array(this.numberOfPages).fill(0).map((x,i)=>i); 
    this.localPageIndex=1;
  }

  showPage(pageIndex: number): void{
    this.localPageIndex=pageIndex;
    this.pageIndex.emit(pageIndex);
  }

  previousPage(): void{
    this.localPageIndex=this.localPageIndex-1;
    this.pageIndex.emit(this.localPageIndex);
  }

  nextPage(): void{
    this.localPageIndex=this.localPageIndex+1;
    this.pageIndex.emit(this.localPageIndex);
  }

}
