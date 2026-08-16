function enterPCH(){
var b=document.querySelectorAll(".req");
for(var i=0;i<b.length;i++){
if(!b[i].checked){
alert("Please check every certification box before entering.");
return;
}}
document.getElementById("gate").style.display="none";
localStorage.setItem("pch_ruo_21_ack","yes");
}

window.onload=function(){
if(localStorage.getItem("pch_ruo_21_ack")=="yes"){
var g=document.getElementById("gate");
if(g)g.style.display="none";
}
};
