const nombre = document.getElementById("Nombre");
const apellidos = document.getElementById("Apellidos");
const correo = document.getElementById("Correo");
const celular = document.getElementById("Celular");
const tagenda = document.getElementById("tagenda");
const Presupuesto = document.getElementById("Presupuesto");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("Nombre", "Nombre no valido*");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("Apellidos", "Apellido no valido");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("Correo", "Correo no valido*");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("Celular", "Celular no valido*");
    condicion = false;
  }
  if (tagenda.value.length < 1 || tagenda.value.trim() == "") {
    mostrarMensajeError("tagenda", "Tipo de agenda no valido*");
    condicion = false;
  }
  if (Presupuesto.value.length < 1 || Presupuesto.value.trim() == "") {
    mostrarMensajeError("Presupuesto", "presupuesto no valido*");
    condicion = false;
  }
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}
