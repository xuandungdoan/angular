"use strict";
function show(a) {
    return a;
}
const c = show('123');
c.length;
var Huong;
(function (Huong) {
    Huong[Huong["DONG"] = 0] = "DONG";
    Huong[Huong["Tay"] = 1] = "Tay";
    Huong[Huong["Nam"] = 2] = "Nam";
    Huong[Huong["Bac"] = 3] = "Bac";
})(Huong || (Huong = {}));
class nha {
}
const s1 = new nha();
s1.huong = Huong.DONG;
