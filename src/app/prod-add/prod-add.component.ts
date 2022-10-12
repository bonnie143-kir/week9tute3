import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {
  prod = {name:'',price:0, company:''};
  constructor(private prodService: ProdService) { }

  ngOnInit() {}

  insertfunc(){
    this.prodService.productInsert(this.prod);
  }

}
