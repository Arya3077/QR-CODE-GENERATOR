const btn = document.getElementById("btn");
let inputfeild = document.getElementById("input");
const popup = document.getElementsByClassName("popup");
let qrimg = document.getElementById("qr");
let dtn=document.getElementById("dbtn");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let rbtn= document.getElementById("rbtn");


dbtn.style.display="none";
h2.style.display="none";
qrimg.style.display="none"
rbtn.style.display="none";



function dat(){

    if (inputfeild.value===" "){
        alert("enter data");
    }
   
else{
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputfeild.value;
    
    inputfeild.style.display="none";
    btn.style.display="none";

    setTimeout(()=>{
       qrimg.style.display="flex";
    dbtn.style.display="flex"; 
    rbtn.style.display="flex";
    },3000)
   
}
   
   
}

 rbtn.addEventListener("click",()=>{
        dbtn.style.display="none";
        h2.style.display="none";
        qrimg.style.display="none"
       rbtn.style.display="none";
   
     btn.style.display="block";
     h1.style.display="block";
     inputfeild.style.display="block";
     inputfeild.value=" ";
     

    })

dtn.addEventListener("click",()=>{
    const url= qrimg.src;
    link=document.createElement("a");
    link.href=url;
    link.download="QRcode.png";

    link.click();
})




