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
var vip_dcPrice = 500, nobody_dcPrice = 1000, discount_8 = 0.8, discount_85 = 0.85, cp_qty = 3;
var menberlv;
(function (menberlv) {
    menberlv[menberlv["vip"] = 0] = "vip";
    menberlv[menberlv["nobody"] = 1] = "nobody";
    //supervip = 3,
})(menberlv || (menberlv = {}));
//VIP會員購物行為
var vipShopCart = (function () {
    function vipShopCart() {
    }
    vipShopCart.prototype.Calculate = function (price, qty) {
        if (price * qty >= vip_dcPrice) {
            console.log('vip 8折');
            return price * qty * discount_8;
        }
        else {
            console.log('vip 原價');
            return price * qty;
        }
    };
    return vipShopCart;
}());
//普通會員購物
var nobodyShopCart = (function () {
    function nobodyShopCart() {
    }
    nobodyShopCart.prototype.Calculate = function (price, qty) {
        if (price * qty >= nobody_dcPrice && qty >= cp_qty) {
            console.log('NOBODY 85折');
            return price * qty * discount_85;
        }
        else {
            console.log('NOBODY原價');
            return price * qty;
        }
    };
    return nobodyShopCart;
}());
var whoyouare = (function () {
    function whoyouare() {
    }
    whoyouare.prototype.checkout = function (you_lv) {
        switch (you_lv) {
            case menberlv.vip:
                return new vipShopCart();
            case menberlv.nobody:
            default:
                return new nobodyShopCart();
        }
    };
    return whoyouare;
}());
var level = menberlv.nobody, price = 1100, qty = 2;
var discounter = new whoyouare().checkout(level);
var payment = discounter.Calculate(qty, price);
console.log("payment is: " + payment);
