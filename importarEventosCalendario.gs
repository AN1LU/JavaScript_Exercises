//this code is able to get the events from your calendar in google and paste a list in a google sheet
//to use this you need to add the apps script in your google document editor
//this .gs file is a lenguage built by google based on JavaScript

function importarEventosCalendario() {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  hoja.clear(); // Borra contenido anterior

  hoja.appendRow(["Título", "Fecha de inicio"]);

  const calendario = CalendarApp.getDefaultCalendar();

  const fechaInicio = new Date(); // Hoy
  const fechaFin = new Date();
  fechaFin.setFullYear(fechaInicio.getFullYear() + 1); // +1 año

  const eventos = calendario.getEvents(fechaInicio, fechaFin);

  eventos.forEach(evento => {
    if (evento.getTitle() === "English") {
      hoja.appendRow([
        evento.getTitle(),
        evento.getStartTime()
      ]);
    }
  });
}

