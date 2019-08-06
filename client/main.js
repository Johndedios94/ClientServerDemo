$(document).ready(startApp)

function startApp(){
getData()
getFoodData()
}



function getData(){
  var settings = {
    url: "../server/getnames.json ",
    method: "GET",
    dataType: "json",
    success: handleDataFromServer,

  }
  $.ajax(settings)
}

function getFoodData(){
  var settings = {
    url: "../server/favfood.json ",
    method: "GET",
    dataType: "json",
    success: handleDataFromServer,

  }
  $.ajax(settings)
}

function handleDataFromServer(response){
  console.log(response)
}
