import { Component } from '@angular/core';
import { IPesanan } from 'src/app/interfaces/i-pesanan';

@Component({
  selector: 'app-pemesanan',
  templateUrl: './pemesanan.component.html',
  styleUrls: ['./pemesanan.component.css']
})
export class PemesananComponent {
  lspesanan: IPesanan[] = [];
  inppesanan: IPesanan;
  total:number = 0;
  pajak:number = 0.11;
  pembayaran:number = 0;
  kembalian:number = 0;
  grandtotal:number = 0;
  response:string = "";
  isCukup:boolean = false;

  constructor(){
    this.inppesanan = {
      nama: "",
      harga: 0,
      qty: 0,
      subtotal: 0
    }
  }

  addPesanan(){
    let temp:IPesanan = {
      nama: this.inppesanan.nama,
      harga: this.inppesanan.harga,
      qty: this.inppesanan.qty,
      subtotal: this.inppesanan.harga * this.inppesanan.qty
    }
    this.total += temp.subtotal;  
    
    this.lspesanan.push(temp);

  }

  removePesananIndex(index: number){
    this.total -= this.lspesanan[index].subtotal;
    this.lspesanan.splice(index, 1);
  }
  
  bayarPesanan(){
    this.grandtotal = this.total - (this.total * this.pajak)
    if(this.pembayaran >= this.grandtotal){
      this.kembalian = this.pembayaran - this.grandtotal;
      this.response = `Terima Kasih Bosku!`
      this.isCukup = true;
    }else if (this.grandtotal == 0){
      this.response = `Pesanan Masih Kosong, Silahkan Order Dahulu!`;
    }else{
      this.response = `Duit Kurang Bos!`
    }
  }
}
