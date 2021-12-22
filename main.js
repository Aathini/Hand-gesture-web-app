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