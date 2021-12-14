function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6ApG9AnSx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('dog barking.gif');
    img1 = document.getElementById('cat mewoning.png');
    img2 = document.getElementById('lion roaring.gif');
    img3 = document.getElementById('cow mooing.gif');

    if (results[0].label == "Barking") {
      img.src = 'dog barking.gif';
    } else if (results[0].label == "Meowing") {
      img.src = 'mewoning.png';
    } else if (results[0].label == "Roaring") {
      img.src = 'lion roaring.gif';
    } else if (results[0].label == "Meowing") {
      img.src = 'cat mewoning.gif';
  }
  }
}
