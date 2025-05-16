window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const barberoParam = params.get('barbero');
  const corteParam = params.get('corte');

  const barberoInput = document.getElementById('barbero');
  const corteInput = document.getElementById('corte');
  const barberoSelect = document.getElementById('barberoSelect');
  const corteSelect = document.getElementById('corteSelect');

  // Mostrar input readonly o select para barbero según si viene en URL
  if (barberoParam) {
    barberoInput.value = barberoParam;
    barberoInput.style.display = 'block';
    barberoInput.readOnly = true;
    barberoSelect.style.display = 'none';
  } else {
    barberoSelect.style.display = 'block';
    barberoInput.style.display = 'none';
  }

  // Mostrar input readonly o select para corte según si viene en URL
  if (corteParam) {
    corteInput.value = corteParam;
    corteInput.style.display = 'block';
    corteInput.readOnly = true;
    corteSelect.style.display = 'none';
  } else {
    corteSelect.style.display = 'block';
    corteInput.style.display = 'none';
  }

  // Fecha mínima (hoy)
  const fechaInput = document.getElementById('fecha');
  const hoy = new Date().toISOString().split('T')[0];
  fechaInput.setAttribute('min', hoy);

  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nombreUsuario = form.nombreUsuario.value.trim();

    const barberoValue = barberoInput.style.display === 'block'
      ? barberoInput.value.trim()
      : barberoSelect.value;

    const corteValue = corteInput.style.display === 'block'
      ? corteInput.value.trim()
      : corteSelect.value;

    if (!barberoValue || !corteValue) {
      alert('Por favor, selecciona barbero y tipo de corte.');
      return;
    }

    const fechaValue = fechaInput.value;
    const horaValue = form.hora.value;
    const telefonoValue = form.telefono.value.trim();

    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.color = 'green';
    mensajeDiv.textContent = `¡Hola ${nombreUsuario}! Tu cita con ${barberoValue} para el corte ${corteValue} está reservada para el día ${fechaValue} a las ${horaValue}.`;

    // Opcional: limpiar campos fecha, hora y teléfono
    form.fecha.value = '';
    form.hora.value = '';
    form.telefono.value = '';
  });
});
