export type ExperienceType = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  tools: {
    title: string;
    tools: string[];
  }[];
};
