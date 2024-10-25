const blink=document.getElementById("text");





setInterval(() => {
    // Toggle visibility
    blink.style.visibility = blink.style.visibility === "hidden" ? "visible" : "hidden";

 
}, 1000); 
