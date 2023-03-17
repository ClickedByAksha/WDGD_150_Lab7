function myFunction() {                                  //Displays personality traits based on animals
  
  var checkBox1 = document.getElementById("Color1");
  var checkBox2 = document.getElementById("Color2");
  var checkBox3 = document.getElementById("Color3");
  
  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");
  var image3 = document.getElementById("img3");
  var image4 = document.getElementById("img4");

  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");
  var text4 = document.getElementById("text4");
  
  if (checkBox1.checked == true)
  {
    text1.style.display = "block"; 
    image1.style.display = "block";
  } 
  
  else if (checkBox2.checked == true)
  {
    text2.style.display = "block"; 
    image2.style.display = "block";
  } 

  else if (checkBox3.checked == true)
  {
    text3.style.display = "block"; 
    image3.style.display = "block";
  }

  else 
  {
    text4.style.display = "block"; 
    image4.style.display = "block";
  }

}
