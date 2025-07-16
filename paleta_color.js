 let selectedEneagrama = null;
    let selectedSocionica = null;

    const eneagramaBoton = document.querySelectorAll("#eneagrama-buttons button");
    const socionicaBoton = document.querySelectorAll("#socionica-buttons button");

    eneagramaBoton.forEach(btn => {
      btn.addEventListener("click", () => {
        eneagramaBoton.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedEneagrama = btn.dataset.value;
      });
    });

    socionicaBoton.forEach(btn => {
      btn.addEventListener("click", () => {
        socionicaBoton.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedSocionica = btn.dataset.value;
      });
    });

    document.getElementById("crear_boton").addEventListener("click", () => {
      if (!selectedEneagrama || !selectedSocionica) {
        alert("Por favor, selecciona un número y un código primero.");
        return;
      }


      const colores = ["#F44336", "#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#00BCD4", "#FF5722", "#3F51B5", "#E91E63", "#795548"];
      const paleta = [];

      while (paleta.length < 5) {
        const color = colores[Math.floor(Math.random() * colores.length)];
        if (!paleta.includes(color)) paleta.push(color);
      }

      const result = document.getElementById("result");
      result.innerHTML = `
        <h2>Si fueras una paleta de color serías:</h2>
        <p>Basado en Eneagrama ${selectedEneagrama} y Socionics ${selectedSocionica}</p>
        <div class="palette">
          ${paleta.map(color => `<div class="color-box" style="background-color:${color};"></div>`).join("")}
        </div>
      `;
    });


