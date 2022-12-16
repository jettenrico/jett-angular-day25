import { Component } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent {
  lstanah = 0;
  lsbangunan = 0;
  njoptanah = 0;
  njopbangunan = 0;
  hasil = 0;
  text = '';
  now:any = Date.now();
  
  hitungPBB(){
    this.hasil = ((((((this.lstanah * this.njoptanah) + (this.lsbangunan * this.njopbangunan)) - 12000000) * 0.2) * 0.005) - 15000);
    this.text =`Hasil : Rp.${this.hasil}`;
  }
}
