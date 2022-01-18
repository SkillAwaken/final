/*選號*/
document.getElementById("confirm").addEventListener("click",show);
let a =[];
function show(){
  a =[document.getElementById('num1').value,document.getElementById('num2').value,document.getElementById('num3').value,         document.getElementById('num4').value,document.getElementById('num5').value,document.getElementById('num6').value];
  a.sort(function(a,b){return a - b;});
  if(a[0]<1||a[0]>42){
    document.getElementById('show').innerHTML="請重新輸入!";
  }else if(a[1]<1||a[1]>42){
    document.getElementById('show').innerHTML="請重新輸入!";
  }else if(a[2]<1||a[2]>42){
    document.getElementById('show').innerHTML="請重新輸入!";
  }else if(a[3]<1||a[3]>42){
    document.getElementById('show').innerHTML="請重新輸入!";
  }else if(a[4]<1||a[4]>42){
    document.getElementById('show').innerHTML="請重新輸入!";
  }else if(a[5]<1||a[5]>42){
    document.getElementById('show').innerHTML="請重新輸入!";
  }else{
    document.getElementById('show').innerHTML="你選擇的號碼為"+a;
  }
}

/*抽獎*/
document.getElementById("draw").addEventListener("click",rand);
let arr = [];
let str = '';
let count = 0;
function rand(){
  if(count<6){
    str = Math.floor( Math.random()*42 );
      for(let j=0;j<arr.length;j++){
              if(arr[j]==str){
                  arr.splice(j,1);
                  count--;
              }
          }
      arr.push( str);
  }
  count++;
  /*arr.sort(function(a,b){return a - b;});*/
  document.getElementById('answer').innerHTML= arr;
}

/*兌獎*/
document.getElementById("get").addEventListener("click",money);
function money(){
  let good = 0;
  for(let x=0;x<6;x++){
    for(let y=0;y<6;y++){
      if(a[x] == arr[y]){
        good++;
        break;
      }
    }
  }
  if(good==6){
    document.getElementById("reward").innerHTML="您中了"+ good+"號碼，得到第一獎!";
  }else if(good==5){
    document.getElementById("reward").innerHTML="您中了"+ good+"號碼，得到第二獎!";
  }else if(good==4){
    document.getElementById("reward").innerHTML="您中了"+ good+"號碼，得到第三獎!";
  }else if(good==3){
    document.getElementById("reward").innerHTML="您中了"+ good+"號碼，得到第四獎!";
  }else if(good==2){
    document.getElementById("reward").innerHTML="您中了"+ good+"號碼，得到第五獎!";
  }else if(good==1){
    document.getElementById("reward").innerHTML="您中了"+ good+"號碼，得到第六獎!";
  }else{
    document.getElementById("reward").innerHTML="很抱歉您甚麼都沒中~";
  }
}
