// Botón flotante de WhatsApp animado
(function() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/15551234567'; // Cambia por tu número
  btn.target = '_blank';
  btn.className = 'whatsapp-float-btn';
  btn.innerHTML = '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="19" fill="#25D366"/><path d="M28.5 21.5C27.8333 23.5 25.5 27.5 19 27.5C12.5 27.5 10.1667 23.5 9.5 21.5C8.83333 19.5 10.5 13.5 19 13.5C27.5 13.5 29.1667 19.5 28.5 21.5Z" fill="white"/><path d="M19 17.5C20.1046 17.5 21 18.3954 21 19.5C21 20.6046 20.1046 21.5 19 21.5C17.8954 21.5 17 20.6046 17 19.5C17 18.3954 17.8954 17.5 19 17.5Z" fill="#25D366"/></svg>';
  document.body.appendChild(btn);
})();
