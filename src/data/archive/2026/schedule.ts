// src/data/archive/2025/schedule.ts
import LTP from "../../../assets/company_logos/LTP.webp";
import sparrow from "../../../assets/company_logos/sparrow.webp";
import qontrol from "../../../assets/company_logos/qontrol.webp";
import phasecraft from "../../../assets/company_logos/phasecraft.webp";
import riverlane from "../../../assets/company_logos/riverlane.png";
import UKRI from "../../../assets/company_logos/UKRI.webp";
import DSIT from "../../../assets/company_logos/DSIT.svg";
import KETS from "../../../assets/company_logos/KETS.png";
import BT from "../../../assets/company_logos/BT.png";
import zeroPointMotion from "../../../assets/company_logos/zeroPointMotion.png";

export const schedule2025 = [
  {
    dateLabel: "Friday 4 April 2025",
    items: [
      {
        start: "09:00",
        end: "09:45",
        title: "Coffee Break",
        location: "Wessex Suite",
      },
      {
        start: "09:45",
        end: "10:00",
        title: "Welcome and Introduction",
        location: "Wessex Suite",
      },
      {
        start: "10:00",
        end: "10:20",
        title: "Quantum Skills Taskforce: meeting the skills needs of the quantum sector",
        location: "Panel Room",
        speakers: "Andrew Martin (DSIT)",
        companyLogo: { src: DSIT.src, alt: "DSIT Logo" },
      },
      {
        start: "10:20",
        end: "10:40",
        title: "The Future is Light: Careers in Photonic Quantum Technology",
        location: "Panel Room",
        speakers: "Carlos Faurby (Sparrow Quantum)",
        description:
          "At Sparrow Quantum we produce nothing more and nothing less than one single particle of light, exactly when you need it. This challenging feat is the result of decades of research in light-matter interaction and photonic engineering and is readily compatible with multiple applications within photonic quantum information processing. In this talk we will take a brief look at the field of photonic quantum technologies and how they can benefit from high quality single-photon sources. We explain how these sources are created, and how you can help us make them even better by joining the Sparrow flock.",
        companyLogo: { src: sparrow.src, alt: "Sparrow Quantum Logo" },
      },
      {
        start: "10:40",
        end: "11:00",
        title: "Neuroinclusion in quantum",
        location: "Panel Room",
        speakers: "Daisy Shearer (NQCC)",
        description:
          "How can we create working environments that are inclusive for neurodivergent physicists? Recent research indicates that the neurodivergent population is drawn to STEM fields, meaning that a larger proportion of the STEM workforce falls under this umbrella. Despite this, many neurodivergent individuals encounter challenges that cause them to leave academic and research roles despite their potential to greatly contribute to research and innovation. In this talk, you will learn about neurodiversity and the many ways that neurodivergent individuals demonstrate strengths and encounter challenges in the physics workplace. We will then explore ways in which we can break down barriers for neurodivergent people in physics, focusing on cultivating a culture of neuroinclusion in your own working practices and how you can encourage colleagues to follow your lead.",
        companyLogo: { src: UKRI.src, alt: "UKRI Logo" },
      },
      {
        start: "11:00",
        end: "11:20",
        title: "Crafting phases for quantum simulation",
        location: "Panel Room",
        speakers: "Jan Lukas Bosse (Phasecraft)",
        description:
          "As an introduction I will recapitulate the career path that led me to do a PhD in quantum computation in Bristol and start working at Phasecraft. Following that I will give a glimpse into my work at Phasecraft and what working in industry on near-term quantum algorithms looks like.",
        companyLogo: { src: phasecraft.src, alt: "Phasecraft Logo" },
      },
      {
        start: "11:20",
        end: "12:00",
        title: "Panel: What does the future of quantum look like?",
        location: "Panel Room",
        description:
          "This panel will examine the future of quantum science and technology from the perspectives of industry and government experts. Panellists will discuss anticipated developments, key challenges, and important considerations for the future impact of the field. The discussion will cover the evolving role of policy, investment, and workforce development.",
        links: [{ label: "Panel details", href: "/archive/2025/panels/panel-1" }],
      },
      {
        start: "12:00",
        end: "13:00",
        title: "Lunch",
        location: "Wessex Suite",
        description: "(vegetarian, vegan, gluten free)",
      },
      {
        start: "13:00",
        end: "13:20",
        title:
          "Transforming Sensing with Silicon Photonics: Building the Future of Quantum-Enabled Consumer Sensors",
        location: "Panel Room",
        speakers: "Lia Li (Zero Point Motion)",
        description:
          "What if we could transform every semiconductor sensor with silicon photonics, bringing the precision of Nobel Prize-winning gravitational wave detection—and eventually, quantum effects—to everyday consumer devices? Our team is pioneering this vision by leveraging breakthroughs in cavity optomechanics, silicon photonics, and MEMS to create a new generation of optical sensors that deliver unprecedented performance at consumer scale.We’re actively seeking photonics, software and machine learning engineers to join us on this journey—come meet the team at the talk to learn how you can be part of redefining what’s possible in sensing.",
        companyLogo: { src: zeroPointMotion.src, alt: "Zero Point Motion Logo" },
      },
      {
        start: "13:20",
        end: "13:40",
        title: "Light Trace Photonics",
        location: "Panel Room",
        speakers: "Dominic Sulway (Light Trace Photonics)",
        description:
          "Light Trace Photonics is a Bristol-based start-up focused on advancing rapid, low-risk photonic integrated circuit (PIC) development. We have created a cutting-edge pipeline designed to accelerate the development of PIC products, offering comprehensive support through technical feasibility studies, proven component IP, and circuit-on-a-chip evaluation modules. In this talk, I will introduce Light Trace Photonics, share our mission, and highlight the progress we've made so far.",
        companyLogo: { src: LTP.src, alt: "Light Trace Photonics Logo" },
      },
      {
        start: "13:40",
        end: "14:00",
        title: "Enabling Useful Quantum Computing",
        location: "Panel Room",
        speakers: "Matthew Stafford (Riverlane)",
        description:
          "Riverlane's mission is to make quantum computing useful, sooner. We achieve this by building the quantum error correction (QEC) stack. In this talk we will discuss the need for QEC and our roadmap to unlocking the MegaQuop: the one million reliable quantum operations needed for useful quantum computing. We will highlight some recent key advancements we have made in the field on this journey. Finally, we will discuss life at Riverlane and how to come work with us.",
        companyLogo: { src: riverlane.src, alt: "Riverlane Logo" },
      },
      {
        start: "14:00",
        end: "15:00",
        title: "Panel: What does a career in quantum look like?",
        location: "Panel Room",
        description:
          "This panel will explore the various career paths available to PhD students in quantum science and technology. Panellists from academia, industry, and startups will discuss the types of roles in their respective sectors, the skills and experience that are valuable in the field, and the transitions from PhD research to different career opportunities. The session will provide insights into the current quantum job market and considerations for those looking to pursue careers in this evolving area.",
        links: [{ label: "Panel details", href: "/archive/2025/panels/panel-2" }],
      },
      {
        start: "15:00",
        end: "15:30",
        title: "Coffee Break",
        location: "Wessex Suite",
      },
      {
        start: "15:30",
        end: "15:50",
        title: "BT's Quantum Approach",
        speakers: "Emilio Hugues Salas (BT)",
        description:
          "BT’s approach to quantum involves building a “network for quantum” while adopting “quantum for networks”. We achieve this by delivering R&D that started with secure quantum communications. In this talk, we will describe our current quantum activities and we will briefly discuss a view of the future quantum internet.",
        location: "Panel Room",
        companyLogo: { src: BT.src, alt: "BT Logo" },
      },
      {
        start: "15:50",
        end: "16:10",
        title: "Careers in Quantum without a Quantum Background",
        speakers: "Charles Shaw (KETS)",
        description:
          "As quantum technologies advance, opportunities are emerging for professionals from diverse fields to contribute to the growing quantum industry. While quantum computing, sensing, and communication are often associated with physics and advanced mathematics, many roles in this field do not require a deep background in quantum mechanics. Engineers, software developers, project managers, and business strategists can all play essential roles in quantum-focused organizations. In this talk I will be talking about the journey of an FPGA engineer at KETS, a cutting edge quantum cryptography startup.",
        location: "Panel Room",
        companyLogo: { src: KETS.src, alt: "KETS Logo" },
      },
      {
        start: "16:10",
        end: "16:30",
        title: "Powering large-scale photonics",
        speakers: "Jeremy Adcock (Qontrol)",
        description:
          "Qontrol has been at the forefront of complexity in photonic integrated circuits for the best part of a decade. Our controllers - made in Bristol - have been used to drive the some of the most powerful photonic devices out there, from LIDAR systems to neuromorphic photonics. Here, I will talk about Qontrol's journey in powering photonic chips, from building quantum computers at the University of Bristol to developing our own silicon to power the next generation of speed, scale and complexity in photonics.",
        location: "Panel Room",
        companyLogo: { src: qontrol.src, alt: "Qontrol Logo" },
      },
      {
        start: "16:45",
        end: "17:00",
        title: "Closing Remarks",
        location: "Panel Room",
        speakers: "Jorge Barreto (QECDT/QIST)",
      },
      {
        start: "17:00",
        end: "19:00",
        title: "Drinks Reception",
        location: "Wessex Suite",
      },
    ],
  },
] as const;
