import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status,setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    const SERVICE_ID = 'service_rinkghz';
    const TEMPLATE_ID = 'template_allas1d';
    const PUBLIC_KEY = 'xgj0UWufxyBv64edO';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(()=>{ setStatus('sent'); form.current.reset(); })
      .catch(()=> setStatus('error'));
  }

  return (
    <section className="py-24 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input name="from_name" required placeholder="Your name" className="w-full p-3 rounded bg-gray-800 border border-gray-700"/>
        <input name="reply_to" type="email" required placeholder="Your email" className="w-full p-3 rounded bg-gray-800 border border-gray-700"/>
        <textarea name="message" required rows="6" placeholder="Your message" className="w-full p-3 rounded bg-gray-800 border border-gray-700"/>
        <div>
          <button type="submit" className="px-5 py-3 bg-blue-600 rounded">Send</button>
          <span className="ml-4 text-gray-300">
            {status==='sending'?'Sending...':status==='sent'?'Sent ✅':status==='error'?'Error ❌':''}
          </span>
        </div>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Replace Service/Template/Public key with your EmailJS keys. Messages will be sent to <b>Yousefsalehtwfiq202121623@gmail.com</b>.
      </p>
    </section>
  );
}
