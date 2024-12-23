import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Website ini dibangun oleh Raja
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://instagram.com/zhaa.raja/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaInstagram size={20} className="text-white" />
            <span className="text-sm">zhaa.raja</span>
          </a>
          <a
            href="https://wa.me/6281364440831"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp size={20} className="text-white" />
            <span className="text-sm">+62 813-6444-0831</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
