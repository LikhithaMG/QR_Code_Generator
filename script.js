var qr_container=document.querySelector(".container")
var qr_enter=document.querySelector(".enter")
var qr_btn=document.querySelector(".btn")
var qr_img=document.querySelector(".one")
qr_btn.onclick=function(){
    if(qr_enter.value.length>0){
    qr_btn.innerText="Generating QR Code...";
    qr_img.src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="+qr_enter.value;
    qr_img.onload=function(){
        qr_container.classList.add("active");
        qr_btn.innerText="Generate QR Code";
    }
    }
else{
    alert("Please enter the text");
}
}
