interface haveName{
    name: string
}
class user implements haveName {
    name:string
    constructor(name:string){
        this.name = name
    }
}

function call(obj: haveName){
    console.log('calll my name ' + obj.name);   
}
let ab = new user('ecec')
call(ab);