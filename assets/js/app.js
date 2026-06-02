const btn = document.getElementById("btnEdit");

if(btn){

    btn.addEventListener("click", () => {

        const nombre = prompt("Nombre");

        const profesion = prompt("Profesión");

        if(nombre){
            document.getElementById("name").textContent = nombre;
        }

        if(profesion){
            document.getElementById("role").textContent = profesion;
        }

        alert("Perfil actualizado");
    });

}