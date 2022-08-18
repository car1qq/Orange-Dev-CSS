function copy1(){

var copyText = document.getElementById("code1");

copyText.select();
copyText.setSelectionRange(0, 99999); 

navigator.clipboard.writeText(copyText.value);

document.getElementById("copy1").innerHTML = "Copied!";
}
function copy2(){

var copyText = document.getElementById("code2");

copyText.select();
copyText.setSelectionRange(0, 99999); 

navigator.clipboard.writeText(copyText.value);

document.getElementById("copy2").innerHTML = "Copied!";
}
//go to top where
