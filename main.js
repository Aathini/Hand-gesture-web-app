var prediction1 = ""; 
var prediction2 = "";
//Code for setting the web camera
Webcam.set({ 
    width: 350, //Live view properties 
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera_var = document.getElementById("camera");
Webcam.attach(camera_var); 

//Code for capturing the image
function take_snapshot() {
    Webcam.snap(function(data_uri){ //Webcam.snap is a webcam.js function which captures the image and the captured image is stored under data_uri.
        document.getElementById("result") = '<img id = "captured_image" src ="' +data_uri+'"/>'; 
    })

}
//Checking if the ml5 library is loaded correctly
console.log('ml5 version', ml5.version);

trained_model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded); 
function modelLoaded() { 
    console.log("modelLoaded"); 
}

//Code for capturing the image
function take_snapshot() {
    Webcam.snap(function(data_uri){ //Webcam.snap is a webcam.js function which captures the image and the captured image is stored under data_uri.
        document.getElementById("result") = '<img id = "captured_image" src ="' +data_uri+'"/>'; 
    })

}
//Checking if the ml5 library is loaded correctly
console.log('ml5 version', ml5.version);

trained_model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded); 
//trained_model is the variable in which we are storing the trained model. imageClassifier is a ml5 function which compares the image of the trained model.
function modelLoaded() { //Written because otherwise it will not start the classification.
    console.log("modelLoaded"); 
}

function SPEAK() {
    var synth = window.speechSynthesis; //This is the API that gives us the functions to convert text to speech
    speak_data_1 = "The first prediction is" + prediction_1; //This is the variable which will hold the speech about the first prediction
    speak_data_2 = "And the second prediction is" + prediction_2; //This will also hold the speech about the second prediction
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); //Function of the API which converts the text to speech
    synth.speak(utterThis);
}
function check() {
    img = document.getElementById('captured_image'); //Taking the captured image and storing it into the img variable
    trained_model.classify(img,gotResult); //trained_model is the variable where we will be storing the trained model.
//The classify function checks the snapshot and ocmpares it with the trained model. This is an ml5 function.
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        SPEAK();
        if (results[0].label == "thumbs-up") 
        {
            document.getElementById("update_hand").innerHTML = "&#128077;"; 
        }
        if (results[0].label == "OK") 
        {
            document.getElementById("update_hand").innerHTML = "&#128076;";
        }
        if (results[0].label == "peace") 
        {
            document.getElementById("update_hand").innerHTML = "&#9996;";
        }
        if (results[1].label == "fist") 
        {
            document.getElementById("update_hand").innerHTML = "&#9994;"; 
        }
        if (results[1].label == "palm") 
        {
            document.getElementById("update_hand").innerHTML = "&#9995;";
        }
        if (results[1].label == "point") 
        {
            document.getElementById("update_hand").innerHTML = "&#9757;";
        }
    }}
