import { ContactItem } from './ContactItem';
import { contactData } from '../lib/data/ContactData';

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-8 w-9/10 md:w-2/3 mx-auto">
      <h1 className="text-center text-2xl font-semibold">Contact Info</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ContactItem data={contactData[0]} />
          <div className="flex flex-nowrap gap-4">
            <ContactItem data={contactData[1]} />
            <ContactItem data={contactData[2]} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {contactData.slice(3).map((item, index) => (
            <ContactItem key={index + 3} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
