export type ExperienceData = {
  id: number;
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
