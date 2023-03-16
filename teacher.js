

document.getElementById("B2").onclick = function(){
  let str_typed = document.getElementById("fun2").value.toLowerCase();
  fetch("https://hp-api.onrender.com/api/spells")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    let filterd_Array = data.filter((element) => {
      if(str_typed === ""){return element;}
      else
       {
        let str_i = element["name"].toLowerCase();
        if(str_i.includes(str_typed))
            return element;
       }
      });
   if(filterd_Array.length != 0){
    document.getElementById('demo2').innerHTML = "";
    filterd_Array.forEach(element => {
      document.getElementById('demo2').innerHTML += "<br><hr><strong> name:</strong> " + element["name"] 
      +"<br><strong> info:</strong> " + element["description"];        
    });
  }
  else{document.getElementById('demo2').innerHTML="no suchs pell... <br>maybe try to write it differently and check your spelling like \"lviosa\" insted of \"l<strong>e</strong>viosa\""}
  })
  .catch(function(){console.log("error")});
}

document.getElementById("ftch").onclick = function(){
    let teacher;
    if(document.getElementById("Gryffindor").checked)
    teacher = "Minerva McGonagall";
    if(document.getElementById("Ravenclaw").checked)
    teacher = "Filius Flitwick";
    if(document.getElementById("Slytherin").checked)
    teacher = "Severus Snape";
    if(document.getElementById("Hufflepuff").checked)
    teacher = "Pomona Sprout";
    //console.log(teacher);
    fetch("https://hp-api.onrender.com/api/characters/staff")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
     // console.log(data);
      data.forEach(element => {
        if(element["name"] === teacher)
        {
         //document.getElementById('demo').innerHTML = JSON.stringify(element);
         document.getElementById('demo').innerHTML = "Name: " + element["name"] + "<br> Gender: "+ element["gender"] +
         "<br>House: " + element["house"] + "<br> Birth Year: "+ element["yearOfBirth"]+
         "<br>wizard: " + element["wizard"] + "<br> ancestry: "+ element["ancestry"]+
         "<br>wand detailes: <br> - wood: " + element["wand"]["wood"] + "<br> - core: "+ element["wand"]["core"] +"<br> - length: "+ element["wand"]["length"] +
         "<br>Patronus: " + element["patronus"];
         
         document.getElementById("t_p").innerHTML = "<img width=\"300\" height=\"450\"" + "src ="+element["image"]+">";
        }
    });
    })
}   
   