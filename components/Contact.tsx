import { ContactItem } from './ContactItem';
import { contactData } from '../lib/data/ContactData';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {contactData.map((item, index) => (
          <ContactItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
