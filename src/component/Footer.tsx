import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sikaryosef-409821289' },
  { icon: FaGithub, url: 'https://github.com/sikar16' },
  { icon: FaTelegram, url: 'https://t.me/Sikuta_16' },
  { icon: FaInstagram, url: 'https://www.instagram.com/siku_1.6' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Service', href: '#service' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes('@')) return;

    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 lg:px-[6%]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Let’s Connect There</h1>
        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col lg:flex-row gap-10">
      
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#FF7D00] w-10 h-10 rounded-full flex items-center justify-center font-bold">
                SY
              </div>
              <h2 className="text-xl font-bold">Sikar Y</h2>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              I’m a passionate designer & developer focused on building
              user-centric, elegant, and scalable digital solutions.
            </p>

            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social link"
                  className="hover:text-[#FF7D00] transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
         
            <div>
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#FF7D00]" />
                  <span>+251 963 79 70 62</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF7D00]" />
                  <span>sikarmahi6123@gmail.com</span>
                </div>
              </div>
            </div>

  
            <div>
              <h2 className="text-xl font-bold mb-4">Navigation</h2>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h2 className="text-xl font-bold mb-4">Hire Me</h2>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-[#FF7D00] outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF7D00] py-2 rounded font-semibold hover:bg-[#e36f00] transition"
                >
                  {subscribed ? 'Subscribed ✅' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
