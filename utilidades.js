function pedirDatos(){
  fetch ("https://json.extendsclass.com/bin/c43a83971051", {
      headers: {
        'Api-key': '9b6f0bba-6e8b-11ed-8b32-0242ac110002'
      }
  })
  .then(response => response.text())
  .then(data =>{
    let usuarios = JSON.parse(data).users;
    document.getElementById("objeto1").innerHTML = usuarios[0].name;
  });
}