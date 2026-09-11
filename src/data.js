// src/data.js
export const personalInfo = {
  name: "Kishan Patoriya",
  title: "MERN Stack Developer",
  location: "Jamnagar, Gujarat, India",
  email: "kishanpatoriya2007@gmail.com",
  phone: "+91 78599 93086",
  github: "https://github.com/kishanpatoriya",
  linkedin: "https://www.linkedin.com/in/kishan-patoriya/",
  about: "MERN Stack Developer with hands-on experience in building responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Passionate about crafting scalable backends, clean UI, and interactive web experiences."
};

export const skills = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Vite"],
  Backend: ["Node.js", "Express.js", "REST APIs", "PHP"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git & GitHub", "JWT Auth", "Hostinger", "WordPress", "Figma"]
};

export const projects = [
  {
    title: "Real Estate Portal",
    description: "Interactive real estate platform for property exploration, listing filters, and property detail views.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/real-estate.png",
    github: "https://github.com/kishanpatoriya",
    demo: "https://real-estate-5-hello.onrender.com/" // <-- Yahan apni live link dalein
  },
  {
    title: "Hotel Booking System",
    description: "Full-stack hotel booking platform with real-time room browsing, detail pages, offers, and booking APIs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Figma"],
    image: "/projects/hotel-booking.png",
    github: "https://github.com/kishanpatoriya",
    demo: "https://your-hotel-booking.vercel.app" // <-- Yahan apni live link dalein
  },
  {
    title: "Neelkanth Electronics",
    description: "Modern e-commerce platform for home appliances featuring dynamic category filtering, shopping cart management, and seamless order flow.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/ecommerce.png",
    github: "https://github.com/kishanpatoriya",
    demo: "https://neelkanth-electrical.onrender.com" // <-- Live deployment link
  },
  {
    title: "Smart Resale",
    description: "A dynamic buy-and-sell marketplace built with PHP and MySQL. Features secure user authentication, product listings with image uploads, category filtering, and an integrated admin moderation panel.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    image: "/projects/smart-resale.png",
    github: "https://github.com/kishanpatoriya",
    demo: "https://smartresale.infy.click/" // <-- Yahan apni live link dalein
  },
  {
    title: "Corporate IT Company Website",
    description: "Enterprise web application featuring service catalogs, case studies, career portals, and sleek UI animations.",
    tech: ["React.js", "Vite"],
    image: "/projects/corporate-it.png",
    github: "https://github.com/kishanpatoriya",
    demo: "https://sharpstar-tech.vercel.app/" // <-- Yahan apni live link dalein
  },
  {
    title: "Home Services & Maintenance",
    description: "Professional handyman and maintenance service portal designed in WordPress. Features dedicated service catalogs, instant quote inquiries, customer trust metrics, and responsive mobile-first UI.",
    tech: ["WordPress", "Elementor", "PHP", "Responsive UI"],
    image: "/projects/home-services.png",
    demo: "#contact" // WordPress me request modal hi open hoga
  }
];

export const experience = [
  {
    role: "MERN Stack Developer (Part-time)",
    company: "MDIDM Infoway",
    period: "Dec 2025 - Present",
    desc: "Building responsive React apps, REST APIs, and handling end-to-end full stack features with MongoDB."
  },
  {
    role: "Web Developer (Part-time)",
    company: "The Agentz Studio",
    period: "Jul 2026 - Present",
    desc: "Translating complex Figma designs into responsive, component-driven client interfaces."
  },
  {
    role: "Web Developer Intern",
    company: "Astrakavach Technologies",
    period: "May 2026 - Jun 2026",
    desc: "Collaborated on UI improvements, responsive web layouts, and frontend component optimization."
  }
];