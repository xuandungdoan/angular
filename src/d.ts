function show<T>(a:T):T{
    return a
}

const c = show('123')
c.length

enum Huong  { DONG, Tay,Nam, Bac}

class nha{
    huong:Huong
}
const s1 = new nha()
s1.huong = Huong.DONG