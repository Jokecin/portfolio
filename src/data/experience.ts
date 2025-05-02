// src/data/experience.ts
export type Lang = 'es' | 'en';

export interface ExperienceItem {
  title: Record<Lang, string>;
  period: Record<Lang, string>;
  company: Record<Lang, string>;
  desc: Record<Lang, string>;
}

export const experience: ExperienceItem[] = [
  {
    title: {
      es: 'Analista TI · Deloitte',
      en: 'IT Analyst · Deloitte'
    },
    period: {
      es: 'Septiembre 2024 – Presente',
      en: 'September 2024 – Present'
    },
    company: {
      es: 'Deloitte',
      en: 'Deloitte'
    },
    desc: {
      es: `Realicé evaluaciones integrales de riesgo tecnológico, incluyendo amenazas cibernéticas y vulnerabilidades en sistemas, impactando directamente en la seguridad financiera y operacional de la empresa. Supervisé el cumplimiento de los estándares de calidad en auditorías de tecnología de la información, enfocándome en mejorar la infraestructura y los procesos de TI. Colaboré con equipos interdisciplinarios para planificar y ejecutar mejoras de arquitectura y proporcioné orientación técnica y estratégica en la evaluación de controles automáticos. Redacté informes técnicos detallados con observaciones y recomendaciones para la mitigación de riesgos.`,
      en: `Performed comprehensive technology risk assessments—including cyber threats and system vulnerabilities—directly impacting the company’s financial and operational security. Oversaw adherence to IT audit quality standards, focusing on improving infrastructure and processes. Collaborated with cross-functional teams to plan and implement architectural enhancements and provided technical and strategic guidance on automated controls evaluation. Authored detailed technical reports with observations and risk mitigation recommendations.`
    }
  },
  {
    title: {
      es: 'Proyecto DataShip · Grupo Central',
      en: 'DataShip Project · Grupo Central'
    },
    period: {
      es: 'Marzo 2023 – Noviembre 2023',
      en: 'March 2023 – November 2023'
    },
    company: {
      es: 'Grupo Central',
      en: 'Grupo Central'
    },
    desc: {
      es: `Desarrollé y desplegué un modelo de predicción de ventas utilizando Python (Scikit-learn, XGBoost, Pandas). Realicé un estudio exhaustivo de algoritmos de machine learning, evaluando métricas de error y sensibilidad frente a variables como preferencias de consumidores y eventos externos; la comparación determinó que XGBoost ofrecía la mejor precisión. Construí pipelines de ingesta y limpieza de datos en Jupyter Notebook con visualizaciones en Matplotlib que guiaron la iteración del modelo en un entorno ágil.`,
      en: `Developed and deployed a sales prediction model using Python (Scikit-learn, XGBoost, Pandas). Conducted an exhaustive study of machine learning algorithms, evaluating error and sensitivity metrics against variables such as consumer preferences and external events; XGBoost proved the most accurate. Built data ingestion and cleaning pipelines in Jupyter Notebook with Matplotlib visualizations guiding model iteration in an agile environment.`
    }
  },
  {
    title: {
      es: 'Software Engineer · Inmetrics Latam',
      en: 'Software Engineer · Inmetrics Latam'
    },
    period: {
      es: 'Enero 2022 – Enero 2023',
      en: 'January 2022 – January 2023'
    },
    company: {
      es: 'Inmetrics Latam',
      en: 'Inmetrics Latam'
    },
    desc: {
      es: `Diseñé y desarrollé microservicios internos con JavaScript y Spring Boot, orquestados en AWS, e implementé pipelines de CI/CD con GitHub Actions que redujeron los tiempos de entrega de días a horas. Construí y mantuve más de 1000 scripts de pruebas de regresión (Java + Selenium + IBM RFT), ampliando la cobertura y reduciendo notablemente los tiempos de validación. Trabajé en squads ágiles (Scrum) participando en refinamiento de historias, revisiones de código y monitoreo de métricas para mantener una disponibilidad cercana al 99.9 % en producción.`,
      en: `Designed and developed internal microservices using JavaScript and Spring Boot on AWS, and implemented CI/CD pipelines with GitHub Actions that reduced delivery cycles from days to hours. Built and maintained over 1000 regression test scripts (Java + Selenium + IBM RFT), expanding coverage and significantly cutting validation times. Collaborated in agile squads (Scrum), participating in story refinement, code reviews, and metrics monitoring to sustain ~99.9% uptime in production.`
    }
  }
];
