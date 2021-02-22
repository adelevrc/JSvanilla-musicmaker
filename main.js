window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds'); 
    const pads = document.querySelectorAll('.pads div'); 
    const visual = document.querySelector('.visual'); 
    const colors = [
        "#ff9a9e", 
        '#f6d365', 
        '#84fab0', 
        '#0ba360',
        '#09203f', 
        '#65379B'
    ];


    //On fait le son 
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime=0;
            sounds[index].play();

    createBubbles(index); 

        })
    })
    console.log(sounds); 

    // Create a function that makes bubbles

    const createBubbles = (index) => {
        const bubble = document.createElement("div"); 
        visual.appendChild(bubble); 
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';  
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this); 
        }); 
    }
})
