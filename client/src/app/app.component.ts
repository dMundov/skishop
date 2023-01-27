
import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'SkiShop';

  constructor() {}

  ngOnInit(): void {
    
  }

}
