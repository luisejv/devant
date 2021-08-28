import emailjs from 'emailjs-com';
emailjs.init('user_WfeP7LOOJFWd6geur3ZX9');
interface emailObject {
  name: string;
  subject: string;
  message: string;
  email: string;
}

const sendForm = ({ name, subject, message, email }: emailObject) => {
  emailjs
    .send('service_eyxqr4h', 'template_t440piy', {
      name,
      subject,
      message,
      email,
    })
    .then((response) => {
      const element = window.document.getElementById('loading');
      element?.classList.add('dis');
    })
    .then(() => {
      const element = window.document.getElementById('sent-message');
      element?.classList.remove('dis');
    })
    .catch((err) => {
      const element2 = window.document.getElementById('loading');
      element2?.classList.add('dis');

      const element = window.document.getElementById('error-message');
      element?.classList.remove('dis');
    })
    .finally(() => {
      setTimeout(() => {
        const e = window.document.getElementById('sent-message');
        if (e?.classList.contains('dis')) {
          window.document.getElementById('error-message')?.classList.add('dis');
        } else {
          window.document.getElementById('sent-message')?.classList.add('dis');
        }
      }, 3000);
    });
};

export default sendForm;
