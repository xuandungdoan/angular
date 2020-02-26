"use strict";
class user {
    constructor(name) {
        this.name = name;
    }
}
function call(obj) {
    console.log('calll my name ' + obj.name);
}
let ab = new user('ecec');
call(ab);
