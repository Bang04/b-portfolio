import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';


export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);




  function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) return;


      if (name.length === 0 ) {
      setStatus({ ok: false, msg: "이름을 입력해주세요 " });
      return;
    }
      if (email.length === 0 ) {
      setStatus({ ok: false, msg: "이메일은 필수입니다."});
      return;
    }
  
    if (!validateEmail(email)) {
      setStatus({ ok: false, msg: "유효한 이메일 형식이 아닙니다."});
      setEmail("");
      return;
    } else {
      setStatus({ ok: true, msg: '' });
    }
    
     if (subject.length === 0 || subject.length > 30) {
      setStatus({ ok: false, msg: "제목은 30자 이하로 입력해주세요" });
      return;
    }
 
  
    if (message.length === 0 || message.length > 200) {
      setStatus({ ok: false, msg: "메세지 200자 이하로 입력해주세요 " });
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setName(""); setEmail(""); setSubject(""); setMessage("");
        setStatus({ ok: true, msg: "메일이 전송되었습니다 ✨" });
      })
      .catch(() => {
        setStatus({ ok: false, msg: "메일 전송 실패" });
      })
      .finally(() => setLoading(false));
  };


  useEffect(() => {
  if (status) {
    const timer = setTimeout(() => setStatus(null), 2500);
    return () => clearTimeout(timer);
  }
}, [status]);

  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Contact</h2>

      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/40">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-300"
            />
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-300"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-purple-300"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-md text-sm ${status.ok ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}
          >
            {status.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};