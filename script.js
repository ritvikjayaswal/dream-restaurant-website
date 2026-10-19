// script.js — small demo scripts
document.getElementById('reserveForm').addEventListener('submit', function(e){
  e.preventDefault();
  const fm = e.target;
  const name = fm.name.value || 'Guest';
  const contact = fm.contact.value || '(none)';
  const dt = fm.datetime.value || '(no time)';
  alert(`Thanks ${name}!\nWe received your reservation request for ${dt}.\nWe will contact you at ${contact}.\n\n(This is a demo submission.)`);
  fm.reset();
});
