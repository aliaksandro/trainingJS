var ask = prompt('qwestion ','код дом мак там' );

function reverseString(s){

var arrsum=[];

arr = s.split(',');
for(var i=0 ; i<arr.length ; i++){

var value = arr[i].split('').reverse();
var val =value.join('');
arrsum.push(val);
}
var newStr = arrsum.join();
return newStr;
}
alert( reverseString(ask);
/* писал я на телефоне .
на тот момент я написал такую function ,
 но прочитав решение с другого сайта я понял . split |(c пустыми ковычками ),
   сразу разбивает всю строку (как по примеру charAt) на ячейки 
*/