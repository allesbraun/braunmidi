
function playKeySound(idElementoAudio){
    element = document.querySelector(idElementoAudio).play();

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Element not found or invalid selector');
    }
}

const listOfKeys = document.querySelectorAll('.tecla');

for(let i = 0; i < listOfKeys.length; i++){
    const key = listOfKeys[i];
    const sound = key.classList[1]
    const idAudio = `#som_${sound}`

    key.onclick = function(){
        playKeySound(idAudio);
    }

    key.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('active');
        }
    }

    key.onkeyup = function(){
        key.classList.remove('active');
    }
}
