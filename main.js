prev1 = "";
prev2 = "";

Webcam.set({
    width: 350,
    height: 350,
    imageFormat: "png",
    pngQuality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function capturar(){
    Webcam.snap(function (data_uri){
        document.getElementById("foto").innerHTML = "<img id='imagem' src=" + data_uri + "/>";
    });
}

console.log("ml5 versão: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qf66zB8hH/model.json", modelLoaded);

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function speak(){
    apivar = window.speechSynthesis;

    fala1 = "A primeira previsão é " + prev1;
    fala2 = "A segunda previsão é " + prev2;
    fala3 = new SpeechSynthesisUtterance(fala1 + fala2);

    apivar.speak(fala3);
}
