
import { CVData } from './types';

export const cvData: CVData = {
  profile: {
    name: "Antonio Esquivel Gaytan",
    title: "Physician-Scientist & AI Lead",
    subtitle: "Physician-Scientist (MD, MSc, PhDc) bridging Clinical Cardiology & Applied AI.",
    summary: "Strategic innovator at the intersection of medicine and technology. I specialize in architecting auditable, regulation-compliant (MDR/GCP) AI systems for healthcare. My expertise spans translational heart failure research, biomarker discovery, and the deployment of privacy-first Large Language Model workflows in clinical environments.",
    tags: ["Clinical AI Governance", "Heart Failure Research", "Privacy-Preserving ML", "Python/FastAPI"],
    image: "https://raw.githubusercontent.com/anthony-89/jaeg-cv/main/IMG_3134.jpg" 
  },
  experience: [
    {
      period: "Jun 2025 – Sep 2025",
      role: "Clinical Research Investigator & AI Lead",
      company: "Pangaea Oncology",
      location: "Barcelona, Spain",
      description: "Spearheaded the integration of AI-assisted visit management systems within a clinical setting. Orchestrated human-in-the-loop governance frameworks for automated reporting, ensuring strict adherence to MDR/GCP compliance standards. Successfully reduced LLM hallucinations through advanced prompt engineering strategies and rigorous Standard Operating Procedures (SOPs).",
      badges: ["Clinical Trials AI", "GCP Compliance", "Prompt Engineering"]
    },
    {
      period: "2024 – 2025",
      role: "Co-founder & CTO (MVP)",
      company: "QGuard-Med",
      location: "Groningen, Netherlands",
      description: "Co-founded a med-tech initiative recognized as a finalist at 'Break The Gap 2025'. Architected a transparent, explainable AI scoring system for cardiovascular patient prioritization. Built the full-stack MVP using FastAPI and Docker, focusing on interpretability for non-technical clinicians.",
      badges: ["Medical Entrepreneurship", "FastAPI", "Explainable AI"]
    },
    {
      period: "Nov 2018 – Present",
      role: "PhD Researcher (Experimental Cardiology)",
      company: "University Medical Center Groningen (UMCG)",
      location: "Groningen, Netherlands",
      description: "Leading translational research into 5-oxoproline/OPLAH as novel biomarkers for heart failure. Managing high-throughput screening assays and complex datasets. Specialized in bridging wet-lab methodology with robust statistical analysis (Z′, S/B) to validate cardiorenal interaction models.",
      badges: ["Biomarker Discovery", "Data Science", "Translational Medicine"]
    }
  ],
  education: [
    {
      degree: "PhD Biomedical Sciences",
      institution: "UMCG / University of Groningen (2018 - Present)",
      details: "Focus: Experimental Cardiology & Heart Failure"
    },
    {
      degree: "MSc Nanotechnology & Regenerative Medicine",
      institution: "University College London (UCL) - Distinction (2016 - 2017)",
      details: "Focus: Biomaterials & Tissue Engineering"
    },
    {
      degree: "MD (Doctor of Medicine)",
      institution: "National Autonomous University of Mexico (UNAM) (2009 - 2016)",
      details: "Clinical Training & General Medicine"
    }
  ],
  competencies: [
    "LLM Architecture (RAG)", "Clinical Trial Regulations (MDR/GCP)", "Python (FastAPI, Pandas)", "Docker & CI/CD", "Biostatistics", "Omics Data Analysis"
  ],
  languages: "Spanish (Native) · English (Full Professional/C2) · Dutch (Intermediate/B1-B2)",
  projects: [
    {
      title: "Offline RAG Guidelines",
      description: "Local-first clinical guideline assistant with zero PHI leakage.",
      icon: "fa-shield-halved",
      tag: "Privacy-First Architecture",
      longDescription: "Engineered a fully local Retrieval-Augmented Generation (RAG) system designed specifically for restrictive hospital network environments. The system allows clinicians to query complex clinical guidelines with citation-backed answers while ensuring zero Protected Health Information (PHI) leaves the local infrastructure, addressing critical data privacy concerns."
    },
    {
      title: "SOP Lab Assistant",
      description: "Voice-activated digital assistant for laboratory compliance.",
      icon: "fa-flask",
      tag: "Lab Automation",
      longDescription: "Developed a digitized Standard Operating Procedure (SOP) assistant featuring a 'bench run' mode. The tool utilizes voice recognition to allow researchers to navigate protocols hands-free during experiments, automatically logging steps to ensure reproducibility and audit readiness for GLP/GCP compliance."
    },
    {
      title: "QGuard-Med Triage Engine",
      description: "Explainable AI for cardiovascular patient prioritization.",
      icon: "fa-heart-pulse",
      tag: "Clinical Decision Support",
      longDescription: "Designed and deployed the core algorithm for QGuard-Med, a clinical decision support system. The engine integrates traditional risk scores (e.g., TIMI, GRACE) with novel biomarker inputs to generate a dynamic urgency score. Built with a focus on 'White Box' AI principles to ensure clinicians understand the 'why' behind every recommendation."
    }
  ],
  publications: [
    {
      title: "404-error “Disease not found”: Redefining Heart Failure",
      journal: "European Journal of Heart Failure (2024)",
      description: "Co-authored a pivotal paper challenging conventional HF classifications by integrating multi-omics data to propose new molecular phenotypes."
    },
    {
      title: "Glutathione deficiency and Heart Failure: A Systematic Review",
      journal: "ESC Heart Failure (2025)",
      description: "Conducted a comprehensive systematic review analyzing the pathophysiological role of glutathione and oxidative stress in the progression of heart failure."
    },
    {
      title: "Genotype–phenotype correlation in KLHL24-related disorders",
      journal: "British Journal of Dermatology (2022)",
      description: " contributed to the genetic analysis and clinical characterization of a translation re-initiation variant in the KLHL24 gene."
    },
    {
      title: "Elevated 5-Oxoproline Levels Predict Adverse Outcomes",
      journal: "Redox Biology (Under Review)",
      description: "Lead author on a study integrating clinical cohort data with experimental models to establish 5-oxoproline as a prognostic marker in cardiorenal syndromes."
    }
  ],
  contact: {
    email: "j.esquivel.gaytan@gmail.com",
    location: "Groningen, The Netherlands",
    links: [
      { label: "Email", url: "mailto:j.esquivel.gaytan@gmail.com", icon: "fa-envelope" },
      { label: "LinkedIn", url: "#", icon: "fa-linkedin" },
      { label: "ResearchGate", url: "#", icon: "fa-researchgate" } 
    ]
  }
};

export const getCVContextString = (): string => {
  return `
    Candidate: ${cvData.profile.name}
    Title: ${cvData.profile.title}
    Profile Summary: ${cvData.profile.summary}
    Core Specializations: ${cvData.profile.tags.join(', ')}
    
    Professional Experience:
    ${cvData.experience.map(e => `
    - Role: ${e.role}
      Company: ${e.company}
      Location: ${e.location}
      Period: ${e.period}
      Key Achievements: ${e.description}
      Skills Applied: ${e.badges.join(', ')}`).join('\n')}
    
    Education:
    ${cvData.education.map(e => `- ${e.degree}, ${e.institution}. ${e.details || ''}`).join('\n')}
    
    Technical Competencies: ${cvData.competencies.join(', ')}
    Languages: ${cvData.languages}
    
    Key Projects:
    ${cvData.projects.map(p => `
    - Project: ${p.title}
      Type: ${p.tag}
      Summary: ${p.description}
      Technical Detail: ${p.longDescription}`).join('\n')}
    
    Selected Publications:
    ${cvData.publications.map(p => `
    - Title: "${p.title}"
      Journal: ${p.journal}
      Abstract: ${p.description}`).join('\n')}

    Contact Info:
    Email: ${cvData.contact.email}
    Location: ${cvData.contact.location}
  `;
};
