const barbers = {
  corte1: [
    { name: "Luis Cortés", img: "../img/barbero1.png" },
    { name: "Carlos Fade", img: "../img/barbero2.jpg" }
  ],
  corte2: [
    { name: "Andrés Tijeras", img: "../img/barbero3.jpeg" }
  ],
  corte3: [
    { name: "Mario Estilo", img: "../img/barbero4.jpg" },
    { name: "Carlos Fade", img: "../img/barbero2.jpg" }
  ],
  corte4: [
    { name: "BarberX", img: "../img/barbero1.png" }
  ]
};

function showBarbers(corteId) {
  const profile = document.getElementById('barberProfile');
  const list = document.getElementById('barberList');
  const selectedBarbers = barbers[corteId] || [];

  list.innerHTML = '';
  selectedBarbers.forEach(barber => {
    const div = document.createElement('div');
    div.className = 'barber';
    div.innerHTML = `
      <a href="agendar.html?barbero=${encodeURIComponent(barber.name)}&corte=${encodeURIComponent(corteId)}" 
         style="text-decoration: none; color: black;">
        <div style="display: flex; align-items: center;">
          <img src="${barber.img}" alt="${barber.name}">
          <div>
            <h4>${barber.name}</h4>
            <p>Experto en este estilo</p>
          </div>
        </div>
      </a>
    `;
    list.appendChild(div);
  });

  profile.classList.remove('hidden');
}

function filterGallery() {
  const selected = document.getElementById("filter").value;
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    if (selected === "all" || img.classList.contains(selected)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
