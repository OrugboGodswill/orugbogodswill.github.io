// All site content lives here. Edit and push to update the site.
const gh = "https://github.com/OrugboGodswill/";

export const profile = {
  name: "Godswill Orugbo",
  role: "Data Scientist & Machine Learning Engineer",
  blurb: "I build end-to-end machine learning projects, from cleaning data to explaining models and shipping them as working apps. I am now moving into AI engineering and agents for automation.",
  photo: "/profile.jpg",
  socials: [
    ["GitHub", "https://github.com/OrugboGodswill"],
    ["LinkedIn", "https://www.linkedin.com/in/godswill-orugbo"],
    ["X", "https://x.com/GodswilllOrugbo"],
    ["Email", "mailto:godswillorugbo11@gmail.com"],
  ],
};

export const about = [
  "I take a messy question, find what the data says about it, and turn the answer into something people can use and trust.",
  "I am a data scientist and machine learning engineer based in Effurun, Delta State, Nigeria. I like the whole path of a project: cleaning and analysing the data, building and testing the model, explaining why it decides what it decides, then shipping it as an app. My time in IT support and technical documentation in oil and gas taught me to explain technical results to people who are not technical.",
  "Right now I am taking a Udacity course on AI agent engineering and building projects with NLP, OCR and explainable AI (SHAP).",
];

export const skills = [
  ["Programming & data", ["Python", "SQL", "Pandas", "NumPy", "SciPy", "Jupyter", "Google Colab", "Excel", "HTML", "CSS"], false],
  ["Machine learning & AI", ["Neural networks", "Deep learning", "Scikit-learn", "TensorFlow", "PyTorch", "Transformers", "NLP", "OpenCV", "OCR", "SHAP", "MLflow", "RAG", "AI agents"], true],
  ["Modelling & methods", ["Regression", "Classification", "Feature engineering", "Model evaluation", "Hyperparameter tuning", "Explainable AI", "Statistical modelling", "Correlation analysis", "Data cleaning"], false],
  ["Deployment & tools", ["Streamlit", "Flask", "FastAPI", "Docker", "Git & GitHub", "Render", "Vercel", "Netlify"], true],
  ["Visualisation & cloud", ["Power BI", "Tableau", "Matplotlib", "Plotly", "AWS", "Azure AI", "Google Cloud"], false],
];

export const experience = [
  { when: "2026", title: "Independent Data Analyst", text: "Analysed 1,579+ student records on how UTME scores relate to post-UTME scores, using logistic regression and Pearson and Spearman correlation. Found almost no correlation for 435 Computer Science applicants and presented it to a non-technical audience.", tags: ["Python", "Excel", "Statistics"] },
  { when: "2026 to now", title: "Technical Support Lead, TechPulse (volunteer)", text: "Led the technical side of the \"Breaking into Tech\" webinar: ran the live session on Google Meet and helped speakers with slides, screen sharing and real-time fixes." },
  { when: "Nov 2022 to Nov 2023", title: "IT Support Intern, Chacha Emu Global Limited", text: "Turned field data such as leak and pressure test results into standard technical reports for NMDPRA approvals, and standardised document templates for more consistent submissions.", tags: ["Technical documentation", "MS Office"] },
  { when: "Jul 2022 to Jul 2023", title: "Co-Lead, Google Developer Student Club, PTI", text: "Co-led tech workshops, events and community projects, and supported teams with resources and mentorship.", tags: ["Leadership", "Event planning", "Teamwork", "Collaboration"] },
];

// Strongest first. `art` picks the animated picture on the card.
export const projects = [
  { title: "Sentinel Network Intrusion Detection", text: "Classifies network traffic into threat types with a Random Forest model, and uses SHAP to show why each threat was flagged.", github: gh + "intrusion-detection-system", live: "https://intrusion-detection-system-8kuj.onrender.com/", tags: ["Random Forest", "SHAP", "Flask", "Docker"], art: "net" },
  { title: "Social Media Data Privacy Monitor", text: "Flags privacy violations in posts under Nigeria's NDPA 2023 using DistilBERT, regex rules for personal data and OCR for images.", github: gh + "social-media-data-privacy-monitoring-system", live: "https://social-media-data-privacy-monitoring.onrender.com/", tags: ["DistilBERT", "OCR", "NLP"], art: "priv" },
  { title: "Automated Resume Screening", text: "Scores and ranks applicants by combining rule-based features with a machine learning model.", github: gh + "automated-resume-screening", live: "https://automated-resume-screening-khaki.vercel.app", tags: ["Scikit-learn", "OCR", "Streamlit"], art: "rank" },
  { title: "Gallstone Risk Prediction App", text: "Predicts gallstone risk from clinical data, tuned to catch as many positive cases as possible, with SHAP explanations.", github: gh + "Gallstone-Prediction-App", live: "https://gallstone-app.onrender.com/", tags: ["Logistic Regression", "SHAP", "Plotly"], art: "gauge" },
  { title: "UTME vs Post-UTME Analysis", text: "Statistical study of 1,579+ student records across two departments, written up as a report and presentation.", github: gh + "UTME-VS-PTUME-Analysis", tags: ["Statistics", "Pandas"], art: "scatter" },
  { title: "British Airways Job Simulation", text: "Analysed customer reviews, worked out lounge access tiers and built a model to predict purchasing behaviour (71% accuracy).", github: gh + "British-Airway-Job-Simulation", tags: ["Classification", "Scraping"], art: "tiers" },
];

export const liveApps = [
  ["Sentinel IDS", "Network threat detection", projects[0].live],
  ["Privacy Monitor", "NDPA 2023 violations", projects[1].live],
  ["Resume Screening", "Applicant ranking", projects[2].live],
  ["Gallstone Risk App", "Clinical risk prediction", projects[3].live],
];

// Paste each certificate link as the third item of its row. "" shows a dead "#" link.
export const certifications = [
  ["AI Agent Engineering (in progress)", "Udacity", ""],
  ["Azure AI Essentials Professional Certificate", "Microsoft", "https://www.linkedin.com/learning/certificates/2e1e802d01c4b94fc2acffceccc1fa2680f00ef829f608759ea293501dd63106/?trk=share_certificate&contentTrackingId=EIaddqU4Stqp%2B40q6XDwDQ%3D%3D&viewName=premium-nav-upsell-text&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_text%3ANav%3AIn-Product"],
  ["Build Your First AI Productivity App", "AWS Scholars Program, project badge", "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/AWS%20AI%20%26%20ML%20Scholarship%20Badges%20-%20Project%20-%20Build%20your%20first%20AI%20-%20Dark%403x.jpg"],
  ["Amazon Bedrock Flows Chatbot", "AWS, project completion badge", ""],
  ["Data Science Job Simulation", "British Airways, via Forage", "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_6999ee5c09815524df858fef_1772291244970_completion_certificate.pdf"],
  ["AWS AI Practitioner Challenge", "Udacity", "https://www.udacity.com/certificate/e/531e01e4-31e8-11f1-9b91-5316d187b667"],
  ["British Airways Data Science Simulation", "Forage", "https://drive.google.com/file/d/1ia8AvSyq-D4cPVF3AkcSsjBBOP9kWXdn/view?usp=sharing"],
  ["Supervised Learning with Scikit-Learn", "DataCamp", "https://drive.google.com/file/d/1y4r7JmSJW0T4QW57pq67OZGRYg2TUwRw/view?usp=drive_link"],
  ["Introduction of LLM", "Online Course", "https://drive.google.com/file/d/12X01cOYI2f3inta2qcJSZRF4nvSkceXf/view?usp=drive_link"],
];
