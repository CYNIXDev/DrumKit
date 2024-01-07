let soundsobj={
    'w':'crash.mp3',
    'a':'kick-bass.mp3',
    's':'snare.mp3',
    'd':'tom-1.mp3',
    'j':'tom-2.mp3',
    'k':'tom-3.mp3',
    'l':'tom-4.mp3'
}

function drumme(key) {
    let audio =  new Audio('./sounds/'+soundsobj[key]);
    console.log(audio)
    audio.play();
}

//Keybord
document.addEventListener('keydown', (e)=> {
    drumme(e.key);
})

//Mouse
drumItems=document.querySelectorAll('.items')
let i=0
for (let key in soundsobj){
    drumItems[i++].addEventListener('click',() => {
        drumme(key);
    });
}