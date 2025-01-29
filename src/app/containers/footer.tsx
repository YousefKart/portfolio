import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary flex justify-center items-center py-4 border-t-2 border-tertiary">
      <FaRegCopyright className="mr-2" />
      <p>2025 Yousef Kart</p>
    </footer>
  );
}
