// src/data/projects.ts
import type { Lang } from './experience';

export interface ProjectItem {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
  link: string;
}

export const projects: ProjectItem[] = [
  {
    title: {
      es: 'DataShip · Predicción de Ventas',
      en: 'DataShip · Sales Prediction'
    },
    description: {
      es: `Pipeline de Machine Learning en Python (Scikit-learn, XGBoost, Pandas) y limpieza de datos históricos con visualizaciones en Matplotlib.`,
      en: `Machine Learning pipeline in Python (Scikit-learn, XGBoost, Pandas) with historical data cleansing and Matplotlib visualizations.`
    },
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/Jokecin/dataship'
  },
  {
    title: {
      es: 'Microservicios CI/CD en AWS',
      en: 'CI/CD Microservices on AWS'
    },
    description: {
      es: `Desarrollo de microservicios internos con Spring Boot y JavaScript, orquestados en AWS e integrados mediante pipelines de GitHub Actions.`,
      en: `Developed internal microservices using Spring Boot and JavaScript, orchestrated on AWS and integrated via GitHub Actions pipelines.`
    },
    tech: ['Spring Boot', 'JavaScript', 'AWS', 'GitHub Actions'],
    link: '#'
  },
  {
    title: {
      es: 'Automatización QA de Regresión',
      en: 'Regression QA Automation'
    },
    description: {
      es: `Implementación de más de 1000 scripts de regresión con Selenium, Java y Docker, ampliando la cobertura y reduciendo tiempos de validación.`,
      en: `Implemented over 1000 regression scripts using Selenium, Java, and Docker—expanding coverage and reducing validation times.`
    },
    tech: ['Selenium', 'Java', 'Docker'],
    link: '#'
  }
];
