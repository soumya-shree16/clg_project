const btn=document.getElementById("bttn");
const msg=document.getElementById("pop");

btn.addEventListener("click",()=>{
   msg.classList.add("popped");

 setTimeout(()=>{
    msg.classList.remove("popped");
 },5000);
});