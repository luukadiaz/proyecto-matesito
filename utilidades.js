function pedirUsuarios(email, password){
  fetch ("https://json.extendsclass.com/bin/c43a83971051", {
      headers: {
        'Api-key': '9b6f0bba-6e8b-11ed-8b32-0242ac110002'
      }
  })
  .then(response => response.json())
  .then(data =>{
    let usuarios = data.users;
    for(let i = 0; i < usuarios.length; i = i + 1) {
      if(usuarios[i].email == email) {
        console.log("email encontrado", usuarios[i]);
        if (usuarios[i].password == password) {
          cerrarModalLogueo()
          return;
        } else {
          const error = document.createElement("span");
          error.style.color = "red";
          error.innerHTML = "contraseña incorrecta";
          document.getElementById("div-logueo").appendChild(error);
        }

      }
    }
    
    console.log("email no encontrado")
  });
}

function pedirProductos(){
  fetch ("https://json.extendsclass.com/bin/c5e2a7b6e668", {
      headers: {
        'Api-key': '9b6f0bba-6e8b-11ed-8b32-0242ac110002'
      }
  })
  .then(response => response.json())
  .then(data =>{
    let productos = data.productos;
    let producto;
    document.getElementById("productos").innerHTML="";
    for(let i = 0; i < productos.length; i = i + 1){
      producto = document.createElement("div");
      producto.className = "productos";
      producto.innerHTML =
      '<img class="cuadradoImagen" src=' + productos[i].imagen + '></img><br/>'
      + productos[i].descripcion;
      document.getElementById("productos").appendChild(producto)
    }
  });
}
function abrirModalLogueo() {
  document.getElementById("logueo").style.display = "flex";
}
function cerrarModalLogueo() {
  document.getElementById("logueo").style.display = "none";
}