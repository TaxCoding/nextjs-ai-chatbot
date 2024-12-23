import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-100 dark:bg-zinc-900 text-sm text-gray-700 dark:text-zinc-400">
      <p>
        © 2024 Website ini dibangun oleh <strong>Raja</strong>.
      </p>
      <div className="flex gap-6">
        <a
          href="https://instagram.com/zhaa.raja/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
          zhaa.raja
        </a>
        <a
          href="https://wa.me/6281364440831"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
          +62 813-6444-0831
        </a>
      </div>
    </footer>
  );
};

export default Footer;
