import CertificateItem from '../components/certificateItem';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

const certificates = [
  {
    year: '2022, 2023, 2024, 2025',
    title: 'Dean\'s Honour Roll',
    provider: 'University of Windsor',
    description:
      'Recognized for outstanding academic performance with a GPA of 3.8 or higher.',
  },
  {
    year: 'December 2023',
    title: 'Artificial Intelligence',
    provider: 'ICTC',
    description:
      'Completed a comprehensive course on Artificial Intelligence, covering fundamental concepts and applications.',
  },
  {
    year: 'March 2020',
    title: 'Mechanical CAD',
    provider: 'St. Clair College',
    description:
      'Participated in the SCNC and achieved a Silver Medal in Mechanical CAD.',
  }
];

export default function Certificates() {
  return (
    <div id="certificates" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Certificates
      </h1>
      <ul className={`${commonStyles} gap-4 mt-4 mb-8`}>
        {certificates.map((certificate, index) => (
          <CertificateItem
            key={index}
            year={certificate.year}
            provider={certificate.provider}
            title={certificate.title}
            description={certificate.description}
          />
        ))}
      </ul>
    </div>
  );
}
