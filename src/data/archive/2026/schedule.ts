// src/data/archive/2025/schedule.ts
import logoMeta from "../../../content/attending/2026attending.json";
import { buildLogoMap, type LogoMetaMap } from "../../../lib/buildLogos";
import type { Image } from "astro:assets";
import type { ImageMetadata } from "astro";

const logoMetaMap = logoMeta as LogoMetaMap;

const logoModules = import.meta.glob<ImageMetadata>("../../../assets/2026/talks/*.{avif,webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

const logos = buildLogoMap(logoModules, logoMetaMap);

function attachLogos(days: any[]) {
  return days.map((day) => ({
    ...day,
    items: day.items.map((item: any) => {
      if (!item.companyLogo) return item;

      const key = item.companyLogo.toLowerCase();
      const logoObj = logos[key];
      return {
        ...item,
        companyLogo: logoObj ?? { src: "", alt: item.companyLogo },
      };
    }),
  }));
}

export const schedule2026 = attachLogos([
  {
    dateLabel: "Thursday 5th March 2026",
    items: [
      {
        start: "09:30",
        end: "10:00",
        title: "QETLabs Coffee and Pastries",
        location: "Main Room",
        companyLogo: "qetlabs_alpha"
      },
      {
        start: "10:00",
        end: "10:15",
        title: "Opening Remarks",
        location: "Main Room",
      },
      {
        start: "10:20",
        end: "10:40",
        title: "Unique Career Paths in Quantum: Embracing the Journey",
        location: "Panel Room",
        speakers: "Antigoni Messaritaki (IOP Publishing)",
        companyLogo: "IOP",
        description: "Your career journey after graduation will be unique—a path shaped by your academic background, skills, interests, and the needs of the job market. As a physics graduate or postgraduate, you’ll find a wide range of opportunities open to you. Physics expertise is highly valued on other fields such as healthcare, engineering, data science, and green energy too. If you have expertise in quantum science, you are uniquely placed to make an impact in both academia and industry. According to the State of Quantum 2024 report, 33 countries now have national quantum initiatives, which means the demand for a skilled quantum workforce is growing rapidly.Physics skills have always been valued by many industries, even in those not traditionally associated with the physical sciences, like finance. The physics know-how is considered an advantage, as is the ability to creatively solve complex problems. In this talk, I’ll share my own career journey, as a physicist who is pursuing a career in scientific publishing as well as the non-conventional career journeys of some highly successful physicists, and discuss the current market landscape for physics expertise."
      },
      {
        start: "10:40",
        end: "11:00",
        title: "Quantum for All: Breaking Barriers, Building Opportunities",
        location: "Panel Room",
        speakers: "Diya Nair (Girls in Quantum)",
        companyLogo: "girlsin",
        description: "This session will explore the importance of diversity and inclusion in building a resilient and innovative quantum workforce. Drawing on the work of Girls in Quantum, it highlights existing barriers to participation in quantum science and technology and discusses practical, community-driven approaches to widening access across gender, geography, and background. The session reflects on why inclusive workforce development is critical for the long-term success of the quantum ecosystem and aims to connect with attendees at all stages of their academic and professional careers."
      },
      {
        start: "11:00",
        end: "11:20",
        title: "A Quantum Academic’s Journey Around the World",
        location: "Panel Room",
        speakers: "Alex Clark (QET Labs)",
        companyLogo: "qetlabs_alpha",
      },
      {
        start: "11:20",
        end: "12:10",
        title: "Panel: From Concept to Commercialisation",
        location: "Panel Room",
        description: "This panel will examine the future of quantum science and technology from the perspectives of industry and government experts. Panellists willThis panel focuses on how quantum ideas move from the lab to the market. The panel explores different routes to commercial success and shares practical lessons on turning research into real-world impact.",
        links: [{ label: "Panel details", href: "../panels?from=schedule#panel1" }],
      },
      {
        start: "12:10",
        end: "13:10",
        title: "Lunch",
        location: "Wessex Suite",
        description: "Caribbean Cuisine by Leon's Den",
      },
      {
        start: "13:10",
        end: "13:30",
        title: "The Future is Light: Careers in Photonic Quantum Technology",
        location: "Panel Room",
        speakers: "Oliver Sandberg (Sparrow Quantum)",
        description:
          "At Sparrow Quantum we produce nothing more and nothing less than one single particle of light, exactly when you need it. This challenging feat is the result of decades of research in light-matter interaction and photonic engineering and is readily compatible with multiple applications within photonic quantum information processing. In this talk we will take a brief look at the field of photonic quantum technologies and how they can benefit from high quality single-photon sources. We explain how these sources are created, and how you can help us make them even better by joining the Sparrow flock.",
        companyLogo: "sparrow",
      },
      {
        start: "13:30",
        end: "13:50",
        title: "Title TBC",
        location: "Panel Room",
        speakers: "Daisy Shearer (NQCC)",
        companyLogo: "nqcc-logo-blue-text",
      },
      {
        start: "13:50",
        end: "14:10",
        title: "Working with, and Computing with Light",
        location: "Panel Room",
        speakers: "Ben Burridge (PsiQuantum)",
        companyLogo: "psi",
      },
      {
        start: "14:10",
        end: "15:00",
        title: "Panel: Pathways to a Career in Quantum",
        location: "Panel Room",
        description: "From academic pathways to roles in industry and startups, the panel will offer practical insights, personal experiences, and advice for anyone curious about building a career in quantum technologies.",
        links: [{ label: "Panel details", href: "../panels?from=schedule#panel2" }],
      },
      {
        start: "15:00",
        end: "15:30",
        title: "Coffee Break",
        location: "Main Room"
      },
      {
        start: "15:30",
        end: "15:50",
        title:
          "From Quantum Lab to NHS Hospital: How integrated photonics will help change how eye care is delivered",
        location: "Panel Room",
        speakers: "Sabine Wollman (Siloton)",
        companyLogo: "siloton",
        description: "This talk will cover Siloton's work in applying photonic integrated circuits working at the single-photon level to eye care. We'll cover what we're doing, how we got there, and the impact the work will have on care in the UK and beyond."
      },
      {
        start: "15:50",
        end: "16:10",
        title: "What Does a Quantum Computing Application Company Actually Do?",
        location: "Panel Room",
        speakers: "Tim Thomas (Applied Quantum Computing)",
        companyLogo: "aqc",
        description: "What does it mean to be a quantum computing company focussed on applications?  What sort of problems/applications do we work on? How do we go about it? What does the work involve? When will the world be using quantum computing applications?  The talk will seek to answer these questions and more."
      },
      {
        start: "16:15",
        end: "16:30",
        title: "Closing Remarks",
        location: "Main Room",
        speakers: "Carrie Weidner (University of Bristol)",
      },
      {
        start: "16:40",
        end: "19:00",
        title: "Drinks Reception",
        location: "Panel Room",
      },
    ],
  },
] as const);
