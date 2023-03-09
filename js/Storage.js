const form = document.querySelector('form');
const Usr = document.querySelector('#name');
const Mail = document.querySelector('#mail');
const Msg = document.querySelector('#msg');
const user = [
  {
    userName: '',
    Email: '',
    msg: '',
  },
];
form.addEventListener('submit', () => {
  user[0].userName = Usr.value;
  user[0].Email = Mail.value;
  user[0].msg = Msg.value;
  localStorage.setItem('user', JSON.stringify(user));
});
function fill() {
  const retf = JSON.parse(localStorage.getItem('user'));
  Usr.value = retf[0].userName;
  Mail.value = retf[0].Email;
  Msg.value = retf[0].msg;
}
fill();
