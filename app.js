// Datos básicos
const CONTACT = {
  sitio: "https://tu-dominio.com/tarjeta"
};

// Generar QR
new QRCode(document.getElementById("qrcode"), {
  text: CONTACT.sitio,
  width: 160,
  height: 160,
  colorDark: "#0f172a",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
