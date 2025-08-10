import { ContactType } from '@/lib/types/ContactType';
import { FileCode, Linkedin, Github, Mail, Phone } from 'lucide-react';

export const contactData: ContactType[] = [
  {
    title: 'Resume',
    href: '/Yousef_Kart_Resume.pdf',
    icon: FileCode,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yousef-kart/',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/YousefKart',
    icon: Github,
  },
  {
    title: 'yousefkart21@gmail.com',
    href: 'mailto:yousefkart21@gmail.com',
    icon: Mail,
  },
  {
    title: '+1 (519) 991-6921',
    href: 'tel:+15199916921',
    icon: Phone,
  },
];
