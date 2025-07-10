import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  console.log('EmailJS Public Key:', publicKey); // Debug
  if (!publicKey) {
    throw new Error('Missing EmailJS public key');
  }
  emailjs.init(publicKey);
};