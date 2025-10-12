let messageArray = ["Hello, I am Maaz Khan, a Software Engineer and AI Researcher."]; 
let textPosition = 0; 
let speed = 100; 


typewriter = () => {
    document.querySelector(".typewriter").innerHTML = 
    messageArray[0].substring(0, textPosition + 1) + "<span>\u25ae</span>"; 

    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed); 
    }

}

window.addEventListener("load", typewriter);
