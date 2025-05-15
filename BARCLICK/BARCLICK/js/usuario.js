// Datos de barberos disponibles
const barberos = [
  {
    nombre: "juan",
    zona: "Zona Norte",
    edad: 28,
    localidad: "Usaquén",
    experiencia: 5,
    horario: ["8:00-10:00", "18:00-20:00"],
    telefono: "3131111111",
    email: "juan@barclick.com",
    imagen: "../img/barbero1.png",
    mapa: "../img/mapakennedy.png"
  },
  {
    nombre: "cristofer",
    zona: "Zona Centro",
    edad: 32,
    localidad: "Chapinero",
    experiencia: 4,
    horario: ["10:00-12:00", "16:00-18:00"],
    telefono: "3132222222",
    email: "cristofer@barclick.com",
    imagen: "../img/barbero2.jpg",
    mapa: "../img/mapakennedy.png"
  },
  {
    nombre: "jonny",
    zona: "Zona Sur",
    edad: 30,
    localidad: "San Cristóbal",
    experiencia: 3,
    horario: ["6:00-8:00", "14:00-16:00"],
    telefono: "3133333333",
    email: "jonny@barclick.com",
    imagen: "../img/barbero3.jpeg",
    mapa: "../img/mapakennedy.png"
  },
  {
    nombre: "camilo",
    zona: "Zona Oeste",
    edad: 30,
    localidad: "Kennedy",
    experiencia: 5,
    horario: ["12:00-14:00", "20:00-22:00"],
    telefono: "3134444444",
    email: "camilo@barclick.com",
    imagen: "../img/barbero4.jpg",
    mapa: "../img/mapakennedy.png"
  }
];

// Evento al hacer clic en la lupa
document.querySelector(".search-btn").addEventListener("click", () => {
  const localidad = document.querySelectorAll("select")[0].value;
  const experiencia = parseInt(document.querySelectorAll("select")[1].value) || 0;
  const horario = document.querySelectorAll("select")[2].value;

  let filtrados = barberos.filter(barbero => {
    const cumpleLocalidad = localidad === "Localidad" || barbero.localidad === localidad;
    const cumpleExperiencia = isNaN(experiencia) || barbero.experiencia >= experiencia;
    const cumpleHorario = horario === "Horario" || barbero.horario.includes(horario);
    return cumpleLocalidad && cumpleExperiencia && cumpleHorario;
  });

  const seleccionado = filtrados.length > 0 ?
    filtrados[Math.floor(Math.random() * filtrados.length)] :
    barberos[Math.floor(Math.random() * barberos.length)];

  mostrarPerfil(seleccionado);
});

function mostrarPerfil(barbero) {
  const perfilHTML = `
    <div class="barber-info">
      <div class="profile">
        <img src="${barbero.imagen}" alt="${barbero.nombre}">
        <h3>${barbero.nombre}</h3>
        <p>Edad: ${barbero.edad}</p>
        <p>Localidad: ${barbero.localidad}</p>
        <p>Tel: ${barbero.telefono}</p>
        <p>Email: <a href="mailto:${barbero.email}">${barbero.email}</a></p>
      </div>
      <div class="schedule">
        <p><strong>Horarios disponibles:</strong></p>
        ${barbero.horario.map(h => `<p>${h}</p>`).join('')}
        <button class="reserve-btn">RESERVAR</button>
      </div>
    </div>
    <div class="map">
      <img src="${barbero.mapa}" alt="Mapa de ${barbero.localidad}">
    </div>
  `;

  const container = document.getElementById("randomProfile");
  container.innerHTML = perfilHTML;
  container.style.display = "flex";
}
