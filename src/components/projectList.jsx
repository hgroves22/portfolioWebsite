let id = 1;

const projectList = [
  {
    id: id++,
    title: "This Website",
    link: "/",
    timeline: "Dec 2024 - Present",
    langLib: "React, JSX, CSS",
    scope: "Single-page application (SPA) with multiple views, using React Router.",
    collab: "Solo Project",
    image: "src/assets/websiteProject.jpg",
    side: "right",
    summary: "I started building this website on 12/12/2024 as a side project to showcase my skills, projects, and experience. The site is built from scratch using JSX and CSS with the React library, focusing on creating an intuitive user experience. I earned a certification in Responsive Web Design on 12/9/2024, which provided me with foundational knowledge in HTML and CSS. This project allows me to apply and expand on what I learned, creating a personal website that reflects my technical abilities and creativity.",
  },
  {
    id: id++,
    title: "Robot Fleet Management System",
    link: "https://github.com/hgroves22/cleanSquad_course_project",
    timeline: "Sept 2024 - Dec 2023",
    langLib: "C++, CMake",
    scope: "Led a Scrum development team to build a robot management system.",
    collab: "Four-Person Team",
    image: "src/assets/AgileCLI.jpg",
    side: "left",
    summary: "A fully functional management system written in C++ that enables users to send custom-designed robots to clean simulated rooms through a Command Line Interface (CLI). Throughout this four-month project, my team applied the Scrum framework to practice effective Agile development. This project was developed by me and three classmates in the fall of 2023 as part of our Software Engineering elective and we used  GitHub to collaborate with student developers and resolve 90+ distinct issues.",
  },
  {
    id: id++,
    title: "Computer in Logisim",
    link: "something",
    timeline: "Sept 2023 - Dec 2023",
    langLib: "Assembly, C++, Logisim",
    scope: "Designed a simulated computer with extended functionality.",
    collab: "Two-Person Team",
    image: "src/assets/Logisim.jpg",
    side: "right",
    summary: "We began this project by writing C++ code to convert MIPS assembly instructions into binary code, which could then be executed on our computer. After successfully developing the converter, we went on to design a functional CPU in Logisim, including a register file, ALU, control unit, and ROM. This functionality was later expanded into a fully simulated computer by adding a keyboard, terminal, monitor, and RAM.",
  },
  {
    id: id++,
    title: "Traffic Simulator",
    link: "https://github.com/hgroves22/trafficSimulator",
    timeline: "Feb 2023 - May 2023",
    langLib: "C++",
    scope: "",
    collab: "Two-Person Team",
    image: "src/assets/websiteProject.jpg",
    side: "left",
    summary: "This is summary",
  }
]

export default projectList