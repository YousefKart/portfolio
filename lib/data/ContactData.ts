import { ContactType } from '@/lib/types/ContactType';
import { FileCode, Linkedin, Github, Mail, Phone } from 'lucide-react';

export const contactData: ContactType[] = [
  {
    title: 'Resume',
    href: '/resume',
    target: '_self',
    icon: FileCode,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yousef-kart/',
    target: '_blank',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/YousefKart',
    target: '_blank',
    icon: Github,
  },
  // {
  //   title: 'yousefkart21@gmail.com',
  //   href: 'mailto:yousefkart21@gmail.com',
  //   target: '_blank',
  //   icon: Mail,
  // },
  // {
  //   title: '+1 (519) 991-6921',
  //   href: 'tel:+15199916921',
  //   target: '_self',
  //   icon: Phone,
  // },
];
