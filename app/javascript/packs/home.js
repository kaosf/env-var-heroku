import Crypto from 'crypto-js';
const button = document.getElementById('masterkeybutton');
button.addEventListener('click', () => {
  const e = document.getElementById('masterkey');
  e.innerHTML = Crypto.AES.decrypt(e.innerHTML, 'password').toString(Crypto.enc.Utf8);
  e.parentNode.removeChild(button);
});
