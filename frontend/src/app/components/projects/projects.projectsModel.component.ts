export interface Project {
  title: string;
  author: any;
  thumbnail: string;
  technologies: any;
  description: string;
  detail: Array<{ text: string, image: string | null , line: boolean}>;
  date: string;
  urlGithub: string;
  urlDemo: string;
  status: string;
  }