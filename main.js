Webcam.set({
    width: 460,
    height: 300,
    img_format: 'png',
    png_quality: 200
});
camera = document.getElementById("Camera");
Webcam.attach(camera);
function Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Snap_shot").innerHTML = "<img src='"+ data_uri +"' id='Image_Captured'>";
    });
}
console.log("ml5 version: " + ml5.version);
var Classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
    Speaking();
}
function Speaking(){
    synth = window.speechSynthesis;
    speakData = "Model Loaded!";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}

function Predictor(){
    img = document.getElementById("Image_Captured");
    Classifier.classify(img, Result);
}
function Result(error, result){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("Obj_Name").innerHTML = result[0].label;
    }
}