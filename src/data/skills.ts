// src/data/skills.ts
import type { Lang } from './experience';

export interface SkillItem {
  name: Record<Lang, string>;
}

export const skills: SkillItem[] = [
  { name: { es: 'AWS', en: 'AWS' } },
  { name: { es: 'GCP', en: 'GCP' } },
  { name: { es: 'Linux (Ubuntu, Kali)', en: 'Linux (Ubuntu, Kali)' } },
  { name: { es: 'CI/CD (GitHub Actions)', en: 'CI/CD (GitHub Actions)' } },
  { name: { es: 'Docker', en: 'Docker' } },
  { name: { es: 'Git', en: 'Git' } },
  { name: { es: 'Python', en: 'Python' } },
  { name: { es: 'JavaScript', en: 'JavaScript' } },
  { name: { es: 'TypeScript', en: 'TypeScript' } },
  { name: { es: 'C++', en: 'C++' } },
  { name: { es: 'PHP', en: 'PHP' } },
  { name: { es: 'Pandas', en: 'Pandas' } },
  { name: { es: 'Scikit-learn', en: 'Scikit-learn' } },
  { name: { es: 'XGBoost', en: 'XGBoost' } },
  { name: { es: 'TensorFlow', en: 'TensorFlow' } },
  { name: { es: 'PyTorch', en: 'PyTorch' } },
  { name: { es: 'Matplotlib', en: 'Matplotlib' } },
  { name: { es: 'Jupyter Notebook', en: 'Jupyter Notebook' } },
  { name: { es: 'Spring Boot', en: 'Spring Boot' } },
  { name: { es: 'Angular', en: 'Angular' } },
  { name: { es: 'React', en: 'React' } },
  { name: { es: 'Node.js', en: 'Node.js' } },
  { name: { es: 'Android Studio', en: 'Android Studio' } },
  { name: { es: 'Selenium', en: 'Selenium' } },
  { name: { es: 'Mockito', en: 'Mockito' } },
  { name: { es: 'JUnit', en: 'JUnit' } },
  { name: { es: 'Postman', en: 'Postman' } },
  { name: { es: 'SQL', en: 'SQL' } },
  { name: { es: 'PostgreSQL', en: 'PostgreSQL' } },
  { name: { es: 'MongoDB', en: 'MongoDB' } }
];
