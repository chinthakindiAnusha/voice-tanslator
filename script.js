function startVoice(){

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.start();

recognition.onresult = function(event){

let speechText = event.results[0][0].transcript;

document.getElementById("inputText").value = speechText;

}

}



function translateText(){

let text = document.getElementById("inputText").value;
let lang = document.getElementById("language").value;

fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl="+lang+"&dt=t&q="+encodeURIComponent(text))

.then(response => response.json())

.then(data => {

document.getElementById("outputText").value = data[0][0][0];

})

.catch(error => console.log(error));

}



function speakText(){

let text = document.getElementById("outputText").value;
let lang = document.getElementById("language").value;

let speech = new SpeechSynthesisUtterance();

speech.text = text;

// language mapping
if(lang === "te"){
speech.lang = "telugu";
}
else if(lang === "hi"){
speech.lang = "hi-IN";
}
else if(lang === "ja"){
speech.lang = "ja-JP";
}
else if(lang === "fr"){
speech.lang = "fr-FR";
}
else if(lang === "es"){
speech.lang = "es-ES";
}
else if(lang === "de"){
speech.lang = "de-DE";
}

speechSynthesis.speak(speech);

}