"use strict";

// let total: number = 33,
//   Gobar: boolean = true,
//   idList: number[] = [1, 2, 3];

// (function Hello() {
//   alert('Edward');
// })();

// enum size {
//   XL = 3,
//   L = 2,
//   M = 1,
//   S = 0,
// }

// class Test {
//   //name: string;
//   constructo(public name: string) {
//     //this.name = name;
//   }
//   showName() {
//     //console.log(this.name);
//   }
// }

/************************************************/
/************   購物車實作WORK CASE *************/
/************************************************/
/**************  建立會員enum   ******************/
//let price: number, qty: number;

const vip_dcPrice = 500,
  nobody_dcPrice = 1000,
  discount_8 = 0.8,
  discount_85 = 0.85,
  cp_qty = 3;

enum menberlv {
  vip = 0,
  nobody = 1,
  //supervip = 3,
}

//購物行為的行動器
interface shopCart {
  Calculate(price: number, qty: number): number;
}

//VIP會員購物行為
class vipShopCart implements shopCart {

  Calculate(price: number, qty: number): number {
    if (price * qty >= vip_dcPrice) {
      console.log('vip 8折');
      return price * qty * discount_8;
    } else {
      console.log('vip 原價');
      return price * qty;
    }
  }
}

//普通會員購物
class nobodyShopCart implements shopCart {

  Calculate(price: number, qty: number): number {
    if (price * qty >= nobody_dcPrice && qty >= cp_qty) {
      console.log('NOBODY 85折');
      return price * qty * discount_85;
    } else {
      console.log('NOBODY原價');
      return price * qty;
    }
  }
}

class whoyouare {
  checkout(you_lv: number) {
    switch (you_lv) {
      case menberlv.vip:
        return new vipShopCart();
      case menberlv.nobody:
      default:
        return new nobodyShopCart();


    }
  }
}

let level = menberlv.nobody,
  price = 1100,
  qty = 2;

let discounter = new whoyouare().checkout(level);
let payment = discounter.Calculate(qty, price);

console.log(`payment is: ${payment}`);