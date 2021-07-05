let stage = +prompt('Введите количество ярусов пирамиды')
let sym = "*";
sym1 = '';
sym2 = ' ';
let obj = {
    stage,
    star: '**',
}
for (i = 0; i < stage; i++) {
    for (j = obj['stage'] - 1; j > 0; j--) {

        sym1 = sym1 + sym2
    }
    obj['stage']--;
    sym1 = sym1 + sym + '\n';
    sym = sym + obj.star;
}

console.log(sym1);

