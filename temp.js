var first=document.querySelector("#firsttemp");
var second=document.querySelector("#secondtemp");
var result1=document.querySelector(".result1");
var result2=document.querySelector(".result2");



function func1(){
 var a=Number(first.value);
  if(a==0){
    result1.innerHTML="<h2>Enter the temperature</h2>";
  }
  else{
    var r=a*1.8+32;
    var rr=r.toFixed(2);
   result1.innerHTML=`<h3>${rr}  Fahrenheit</h3>`;
  }   
}
function func2(){
    var b=Number(second.value);
    if(b==0){
      result2.innerHTML="<h2>Enter the temperature</h2>";
    }
    else{
        var r2=(b-32)*(5/9);
        var rr2=r2.toFixed(2);
        result2.innerHTML=`<h3>${rr2}  Celcius</h3>`;
    }
}