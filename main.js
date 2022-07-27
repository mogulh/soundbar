let sounds = ["drama","fall","impact","reveal","suspend","wow"]


// create new elemnts from js


// loop through all sounds
sounds.forEach(sound=>{

    // create a button
    const btn = document.createElement("button")


    // add event listener to that button
    btn.addEventListener('click',()=>{
        // stop all playing souns
        stopSounds()
        // play the specific sound
        document.getElementById(sound).play()    
    })
// change the inne text to that sound
    btn.innerHTML=sound


    // add the button the the document
    document.getElementById("buttons").appendChild(btn)

})

// 

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}