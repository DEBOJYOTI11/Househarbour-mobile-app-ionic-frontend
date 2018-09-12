import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IListing} from '../../data/interface';
import { DataproviderProvider } from '../../providers/dataprovider/dataprovider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listings:IListing[];

  constructor(public navCtrl: NavController,
              public dataService : DataproviderProvider) {

          this.dataService.getListings().subscribe(res=>{
            this.listings = res;
            console.log(this.listings);
          })
      }

}
