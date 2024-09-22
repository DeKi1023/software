// Abrir la ventana emergente para el formulario de paciente
document.getElementById('openPatientForm').addEventListener('click', () => {
    window.open('patient.html', 'FormularioPaciente', 'width=600,height=700');
});

// Abrir la ventana emergente para mostrar citas agendadas
document.getElementById('viewAppointments').addEventListener('click', () => {
    window.open('appointments.html', 'CitasAgendadas', 'width=600,height=700');
});
