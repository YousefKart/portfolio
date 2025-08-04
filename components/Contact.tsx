import { ContactItem } from './ContactItem';

const contactData: any[] = [
  // Add contact data here
];

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Contact</h1>
      {/* Map through contactData and render ContactItem components */}
      {contactData.map((item, index) => (
        <ContactItem
          key={index}
          // pass props here
        />
      ))}
    </div>
  );
}
