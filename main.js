Webcam.set({
    width: 350,
    height:350,
    image_format: "jpeg",
    jpeg_quality: 90
});
Camera = document.getElementById("camera");
Webcam.attach("#camera");

function click()
{
    Webcam.snap(function(data_uri){
        document.getElementById("Capture").innerHTML = '<img id="capturedImage" src="'+data_uri+'">';
    });
}
console.log('ml5.version: '+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hdvDxbXLi/model.json',modelLoader);

function modelLoader()
{
console.log("Model Loaded!");

}
 function Press()
 {
     Img = document.getElementById("capturedImage");
     classifier.classify(Img, Result);
 }
 function Result(error, results)
 {
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("Object_name").innerHTML = results[0].label;
        document.getElementById("Accurate").innerHTML = results[0].confidence.toFixed(3);

    }  
 }