// projects.js
const PROJECTS = [
    {
        id: "height-wise-object-detection",
        title: "Height Wise Object Detection using PLC",
        tagline: "Segregating objects based on height using PLC and sensors.",
        year: 2025,
        role: "Hardware programming and integration.",
        tech: ["PLC", "PNP Sensors", "Conveyor Belt"],
        summary: `
    Developed a system to detect and sort objects on a conveyor belt
    using PLC logic and height-based sensors.
  `,
        images: [
            "media/plc.jpg",
        ],
        more_images: [
            "media/plc0.png",
            "media/plc1.png",
            "media/plc2.png",
            "media/plc3.png",
            "media/plc4.png",
            "media/plc5.png",

        ],
        github: "",
        live: ""
    },
    {
        id: "routemate",
        title: "RouteMate – AI Navigation Assistant (EV-Optimized)",
        tagline: "Smart EV-focused navigation with speech, battery-aware routing & real-time updates.",
        year: 2025,
        role: "Full-stack + system design: UI, TTS, routing logic, EV battery modeling, and integrations.",
        tech: [
            "React",
            "Django",
            "JavaScript",
            "Mapbox",
            "Web Speech API",
            "AI-based Routing",
            "Battery Modeling"
        ],
        summary: `
    RouteMate is an AI-powered in-car navigation assistant built for Electric Vehicles.
    It speaks directions in real time, predicts battery drain along the route,
    warns if charge may not be sufficient, and re-routes to the nearest charging station
    when needed. Made with Mapbox navigation APIs, a custom EV consumption model,
    intelligent voice guidance, and a polished automotive-style UI.
  `,
        images: [
            "media/routemate.png",
        ],

        more_images: [
            "media/routemate.png"
        ],

        github: "https://github.com/anushka7220/RouteMate",
        live: ""
    },
    {
        id: "metro-report",
        title: "Electrical System Analysis Report of Raja Nahar Singh Metro Station",
        tagline: "A concise research report on Raja Nahar Singh Metro electrical system & infrastructure.",
        year: 2025,
        role: "Data collection, Cost Estimation & report formatting.",
        tech: ["Research", "Data Analysis", "Documentation"],
        summary: `
    Created a structured, easy-to-read metro system analysis highlighting
    electrical system configurations, infrastructure details, station data, and operational insights.
    Presented as a professionally formatted report for academic & portfolio use.
  `,

        // Main screenshots (shown in sidebar)
        images: [
            "media/metro.png",
        ],

        // Extra images for the slider only
        more_images: [
            "media/metro1.jpg",
            "media/metro2.JPG"
        ],

        // Document (Google Drive link)
        document: "https://drive.google.com/file/d/15Q9EppWCv--rgl2FUcau_efF7PVcx6Uf/view?usp=sharing",

        github: "",
        live: ""
    },
    {
        id: "solar-research",
        title: "Solar Panel Degradation & Performance Prediction Using Hybrid Machine Learning and Physics-Informed Features",
        tagline: "IEEE Research paper on solar power degradation and efficiency prediction(under progress).",
        year: 2025,
        role: "Research, data analysis & academic report writing.",
        tech: ["Renewable Energy", "Research Paper", "Data Analysis"],
        summary: `
    Conducted a detailed study on solar photovoltaic systems covering
    efficiency factors, panel types, environmental impact, and potential
    for scalable renewable energy adoption in India.
    Includes calculations, comparison tables, and real-world feasibility analysis.
  `,

        // Shown in sidebar
        images: [
            "media/solar.png",
        ],

        // Additional images used only for slider
        more_images: [
            "media/solar1.png",
            "media/solar2.png"
        ],

        // Solar research document
        document: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",

        github: "https://colab.research.google.com/drive/1uJl7GICOgPC3JWxSqF1feybfBRbzC0Sm?usp=sharing",
        live: ""
    },
    // add more…
];
