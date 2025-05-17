
import { images } from '.';

export const coverContent = {
    greeting: {
        emoji: "👋",
        text: "Hello, I am"
    },
    name: "Sharjeel Yunus",
    title: "Senior Software Engineer",
    currentRole: {
        position: "Senior Software Engineer",
        company: "Ensemble Technologies",
        companyUrl: "https://ensembleui.com",
        location: "Remote"
    },
    description: "I’m a Senior Software Engineer passionate about building intuitive developer tools, cross-platform apps, and AI-powered solutions. I focus on delivering clean, scalable systems that enhance user and developer experiences.",
    availability: {
        status: "Open to opportunities",
        type: "Remote / Hybrid"
    },
    cta: {
        primary: {
            text: "Download Resume",
            href: "https://drive.google.com/file/d/1j7XJT8H30Not-d8WYmqXCgNPzdGm6kbP/view?usp=sharing",
            icon: "HiDownload"
        },
        secondary: {
            text: "Get in Touch",
            href: "#Contact",
            icon: "HiMail"
        }
    },
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/sharjeel-yunus",
            icon: "BsLinkedin"
        },
        {
            platform: "GitHub",
            url: "https://github.com/sharjeelyunus",
            icon: "BsGithub"
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/sharjeelyunus",
            icon: "BsTwitter"
        }
    ],
    backgroundEffects: {
        gradientOrbs: [
            {
                position: "-top-40 -left-40",
                size: "w-80 h-80",
                color: "bg-primary/20"
            },
            {
                position: "-bottom-40 -right-40",
                size: "w-80 h-80",
                color: "bg-secondary/20"
            }
        ],
        gridPattern: {
            opacity: "0.02",
            className: "bg-grid-white"
        }
    }
};

export const techStack = [
    { img: images.react, tech: "ReactJS", level: "90" },
    { img: images.Nextjs, tech: "NextJS", level: "70" },
    { img: images.firebase, tech: "Firebase", level: "70" },
    { img: images.node, tech: "NodeJS", level: "80" },
    { img: images.ExpressJS, tech: "ExpressJS", level: "80" },
    { img: images.javascript, tech: "JavaScript", level: "95" },
    { img: images.mongodb, tech: "MongoDB", level: "80" },
    { img: images.flutter, tech: "Flutter", level: "60" },
];

export const certificates = [
    { name: "Next.js 11 - Build Modern Next.js Applications", platform: "codedamn", verify: "https://codedamn.com/certificate/verify/903b15d4d6c666d2316c86e4f18857b71b190f57" },
    { name: "React - The Complete Guide with React Hook Redux", platform: "Udemy", verify: "https://www.udemy.com/certificate/UC-60b5082f-587b-4106-81f4-607b831adefb/" },
    { name: "Elements of AI: Introduction to AI", platform: "University of Helsinki", verify: "https://certificates.mooc.fi/validate/myvuy9lt2u" },
    { name: "M001: MongoDB Basics", platform: "MongoDB University", verify: "https://university.mongodb.com/course_completion/7e386444-7145-4020-a41f-b1e9069728d6" },
    { name: "Javascript Beginner", platform: "Udemy", verify: "https://www.udemy.com/certificate/UC-7a2e4413-337f-4ec0-87c9-e4f3f39398a0/" },
    { name: "Introduction to Flutter Development", platform: "App Brewery", verify: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Certificates%2Fintroduction-to-flutter-development-1.jpg?alt=media&token=8d20f8a4-4a64-41e8-8174-dca33365ecce" },
    { name: "Graphic Design", platform: "DigiSkills", verify: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Certificates%2FDSTP_Certificate_%20EA3BXYKPQ-1.jpg?alt=media&token=458dc2df-6223-44e1-9edf-b1bf8826818d" },
    { name: "The Beginners Guide to Cyber Security", platform: "Udemy", verify: "https://www.udemy.com/certificate/UC-2c062c38-1c48-4f64-bd42-634a517938d8/" },
];

export const featuredPortfolio = [
    {
        id: 1,
        title: "Chat App",
        img: "https://raw.githubusercontent.com/alamorre/nextjs-chat-app/main/assets/nextjs-chat-tutorial.png",
        description: 'NextJS Chat App powered by ChatEngine.io',
        tags: ['NEXTJS'],
        projectLink: 'https://nextjs-chat-app-rho.vercel.app/',
        codeLink: 'https://github.com/sharjeelyunus/nextjs-chat-app'
    },
    {
        id: 2,
        title: "PEEK",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fpeek.jpg?alt=media&token=593d2461-cc03-427d-aaf9-831eee428102",
        description: 'A social platform, where users can share places (with images and location) with other users.',
        tags: ['MERN'],
        projectLink: 'https://peek-mern.web.app/',
        codeLink: 'https://github.com/sharjeelyunus/peek-mern'
    },
    {
        id: 3,
        title: "COVID TRACKER",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FCorona%20tracker.jpg?alt=media&token=9f40d54d-4a97-476b-b7c3-6fd92b981bfa",
        description: 'CoronaVirus 🦠 statistics around the world🌎',
        tags: ['FLUTTER'],
        codeLink: 'https://github.com/sharjeelyunus/covid19_tracker'
    }
];

export const webPortfolio = [
    {
        id: 1,
        title: "BUDGET",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fbudget.jpg?alt=media&token=875f2c17-2337-488c-91a3-f682b91dff0b",
        description: 'Track your transaction & keep your money safe',
        tags: ['REACT'],
        projectLink: 'https://budgetbysharjeel.web.app/',
        codeLink: 'https://github.com/sharjeelyunus/budget'
    },
    {
        id: 2,
        title: "PEEK",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fpeek.jpg?alt=media&token=593d2461-cc03-427d-aaf9-831eee428102",
        description: 'A social platform, where users can share places (with images and location) with other users.',
        tags: ['MERN'],
        projectLink: 'https://peek-mern.web.app/',
        codeLink: 'https://github.com/sharjeelyunus/peek-mern'
    },
    {
        id: 3,
        title: "SMART BRAIN",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fsmart-brain.jpg?alt=media&token=694bc634-806d-47d8-94e7-5a2c22823b72",
        description: 'Detects Faces from images using face recognition API',
        tags: ['REACT'],
        projectLink: 'https://sharjeelyunus.github.io/Smart-Brain/',
        codeLink: 'https://github.com/sharjeelyunus/Smart-Brain'
    },
    {
        id: 4,
        title: "Chat App",
        img: "https://raw.githubusercontent.com/alamorre/nextjs-chat-app/main/assets/nextjs-chat-tutorial.png",
        description: 'NextJS Chat App powered by ChatEngine.io',
        tags: ['MERN'],
        projectLink: 'https://nextjs-chat-app-rho.vercel.app/',
        codeLink: 'https://github.com/sharjeelyunus/nextjs-chat-app'
    },
    {
        id: 5,
        title: "Instagram Clone",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Finstagram%20clone.jpg?alt=media&token=e2fe7895-75c4-4312-8bae-f5b532f4ff88",
        description: 'Instagram Clone Instagram Clone (Replica of Instagram)',
        tags: ['REACT'],
        projectLink: 'https://instagrambysharjeel.web.app/',
        codeLink: 'https://github.com/sharjeelyunus/instagram-clone'
    },
    {
        id: 6,
        title: "Netflix Clone",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fdownload%20(2).jpg?alt=media&token=e0bcc4fc-9da1-43b7-b015-92905f82b89c",
        description: 'Replica of Netflix UI - Plays the trailer of movies',
        tags: ['MERN'],
        projectLink: 'https://github.com/sharjeelyunus/Netflix-Clone'
    }
];

export const mobilePortfolio = [
    {
        id: 1,
        title: "FLASH CHAT",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflash%20chat.png?alt=media&token=91b134f6-d2e0-47ab-af6e-6ae5850ba902",
        description: 'Realtime Social Messaging App',
        tags: ['FLUTTER'],
        projectLink: 'https://github.com/sharjeelyunus/flash-chat-flutter'
    },
    {
        id: 2,
        title: "COVID TRACKER",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FCorona%20tracker.jpg?alt=media&token=9f40d54d-4a97-476b-b7c3-6fd92b981bfa",
        description: 'CoronaVirus 🦠 statistics around the world🌎',
        tags: ['FLUTTER'],
        projectLink: 'https://github.com/sharjeelyunus/covid19_tracker'
    },
    {
        id: 3,
        title: "BMI CALCULATOR",
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2FBMI%20Calculator.jpg?alt=media&token=f8e2bae9-0c8d-4f06-96fa-fc21237aaf60",
        description: 'Body Mass Index Calculator a multi screen app with simple functionality',
        tags: ['FLUTTER'],
        projectLink: 'https://github.com/sharjeelyunus/bmi-calculator-flutter'
    }
];

export const designPortfolio = [
    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FJohn%20Wick.png?alt=media&token=395e7b66-0428-460e-b089-ab917c351c7d"
    },
    {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FMinal.png?alt=media&token=65426863-4f5c-44ac-9232-8ff2e6a25f8e"
    },
    {
        id: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FOsman.png?alt=media&token=5c56f915-0fc3-4cf5-ac2f-441e1770193c"
    }
];

export const webinars = [
    {
        id: 1,
        title: "HacktoberFest",
        date: "Oct 26, 2022",
        platform: 'GDSC IUB'
    },
    {
        id: 2,
        title: "HacktoberFest 2022",
        date: "Oct 16, 2022",
        platform: 'GDSC UET'
    },
    {
        id: 3,
        title: "The Web Ecosystem",
        date: "Sep 23, 2022",
        platform: 'MetaBlocks'
    },
    {
        id: 3,
        title: "UNDP: Sustainable Development Goals",
        link: 'https://youtu.be/H1zTELXc7og',
        date: "Feb 25, 2022",
        platform: 'SolutionFest'
    },
    {
        id: 4,
        title: "Introduction to Flutter",
        link: 'https://youtu.be/iv2eVi8AqOs',
        date: "Jan 19, 2022",
        platform: 'GDSC IUB'
    },
    {
        id: 5,
        title: "Git and GitHub",
        date: "Dec 26, 2021",
        platform: 'Hack Club IUB'
    },
    {
        id: 6,
        title: "Build simple a game with JS",
        date: "Nov 19, 2021",
        platform: 'GDSC IUB'
    },
    {
        id: 7,
        title: "Getting Started with HTML and CSS",
        date: "Oct 31, 2021",
        platform: 'GDSC IUB'
    },
    {
        id: 8,
        title: "#AndoidSeekho Informantion Session",
        date: "Oct 23, 2021",
        platform: 'GDSC IUB'
    },
    {
        id: 9,
        title: "Hack The Hacktoberfest",
        date: "Oct 9, 2021",
        platform: 'Hack Club IUB'
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Rashid Wassan",
        jobTitle: 'Founder & CEO KaamSay',
        img: "https://github.com/rashidwassan.png",
        recomendation: 'The smart & multitalented guy and a genuine person. Sharjeel is the person to reach out for the technical help or tasks. I was really inspired to see the work of this person on GitHub and got very inspired. Highly recommended person to work with!'
    },
    {
        id: 2,
        name: "Ehmad Saeed",
        jobTitle: 'β MLSA || Full Stack Developer',
        img: "https://github.com/justEhmadSaeed.png",
        recomendation: "Sharjeel has been working with different tech communities, on a mission to spread the knowledge and hands-on experience with students. His leadership skills are quite exceptional and he's a guy to look on to if you're planning on conducting a successful event."
    },
    {
        id: 3,
        name: "Meer Hamza",
        jobTitle: 'Google DSC Lead || β MLSA',
        img: "https://github.com/meerhamzadev.png",
        recomendation: "Being Sharjeel's fellow Lead in the Google Developer Student Clubs program was really a pleasure, he always went beyond the recommendations. He was always very open to discussion and feedback and had a very clear way to communicate his ideas. Sharjeel is very organized with his work, which helped him on developing solutions to the problems and made him excellent in executing his strategies. He is also technically sound which makes him an admirable professional."
    }
];

export const communityRoles = [
    {
        title: "Campus Lead – Google Developer Student Clubs (IUB)",
        duration: "Aug 2021 – Aug 2022",
        description: "Led the GDSC chapter at IUB, organizing 30+ tech events & bootcamps on campus. Facilitated workshops (e.g. Web, Flutter) and a university-wide hackathon, engaging hundreds of students."
    },
    {
        title: "Founder & President – Hack Club IUB",
        duration: "2021 – 2022",
        description: "Established the first Hack Club at IUB to foster a culture of coding and innovation. Hosted hackathons (e.g. Hacktoberfest) and weekly coding sessions, building a community of enthusiastic student developers."
    }
];

export const aboutContent = {
    title: {
        main: "About",
        highlight: "Me"
    },
    description: [
        "I’m a Senior Software Engineer with a passion for solving complex problems through clean, efficient code. I specialize in building modern web and mobile applications, intelligent interfaces, and scalable systems that deliver real impact.",
        "My journey has led me through developing low-code platforms, developer SDKs, and AI-driven tools — always with a focus on performance, usability, and growth."
    ],
    expertise: {
        title: {
            main: "My",
            highlight: "Expertise"
        },
        skills: [
            {
                title: "Frontend Development",
                icon: "BsCode",
                description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
                title: "Backend Development",
                icon: "BsServer",
                description: "Creating scalable server-side applications and APIs using Node.js and modern databases.",
                technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
            },
            {
                title: "Problem Solving",
                icon: "BsLightbulb",
                description: "Designing robust systems, debugging effectively, and delivering maintainable, high-performance solutions.",
                technologies: ["System Design", "Optimization", "Clean Code", "Testing"]
            }
        ]
    },
    image: images.Artwork
};

export const technicalSkills = {
    title: {
        main: "Technical",
        highlight: "Skills"
    },
    description: "A comprehensive overview of my technical expertise and proficiency in various technologies.",
    categories: [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript", icon: "SiJavascript", proficiency: 95 },
                { name: "TypeScript", icon: "SiTypescript", proficiency: 90 },
                { name: "HTML5", icon: "SiHtml5", proficiency: 95 },
                { name: "CSS3", icon: "SiCss3", proficiency: 90 },
                { name: "Dart", icon: "SiDart", proficiency: 75 }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: "SiReact", proficiency: 95 },
                { name: "Next.js", icon: "SiNextdotjs", proficiency: 90 },
                { name: "Redux", icon: "SiRedux", proficiency: 85 },
                { name: "Tailwind CSS", icon: "SiTailwindcss", proficiency: 90 },
                { name: "Flutter", icon: "SiFlutter", proficiency: 75 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: "SiNodedotjs", proficiency: 90 },
                { name: "Express", icon: "SiExpress", proficiency: 85 },
                { name: "MongoDB", icon: "SiMongodb", proficiency: 85 },
                { name: "PostgreSQL", icon: "SiPostgresql", proficiency: 80 },
                { name: "Firebase", icon: "SiFirebase", proficiency: 85 }
            ]
        },
        {
            title: "AI/ML",
            skills: [
                { name: "TensorFlow", icon: "SiTensorflow", proficiency: 70 },
                { name: "PyTorch", icon: "SiPytorch", proficiency: 65 },
                { name: "OpenAI API", icon: "SiOpenai", proficiency: 85 }
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { name: "Git", icon: "SiGit", proficiency: 90 },
                { name: "Docker", icon: "SiDocker", proficiency: 80 },
                { name: "AWS", icon: "SiAmazonaws", proficiency: 75 },
                { name: "Figma", icon: "SiFigma", proficiency: 80 },
                { name: "Postman", icon: "SiPostman", proficiency: 85 }
            ]
        }
    ]
};

export const professionalExperience = {
    title: {
        main: "Professional",
        highlight: "Experience"
    },
    description: "My journey in software development, featuring roles where I've driven significant improvements and delivered measurable impact.",
    experiences: [
        {
            title: "Senior Software Engineer",
            company: "Ensemble Technologies",
            companyUrl: "https://ensembleui.com",
            location: "Remote",
            type: "Full-time",
            date: "Feb 2024 - Present",
            achievements: [
                "Built a robust deployment system that reduced deployment time by 50%",
                "Improved platform performance by 25% through optimization and caching",
                "Led the implementation of new features and architectural improvements",
                "Mentored junior developers and established best practices"
            ],
            technologies: ["React", "Node.js", "AWS", "CI/CD", "System Architecture"]
        },
        {
            title: "Application Software Developer",
            company: "Ensemble Technologies",
            companyUrl: "https://ensembleui.com",
            location: "Remote",
            type: "Full-time",
            date: "Feb 2023 - Feb 2024",
            achievements: [
                "Accelerated development speed by 40% through implementing a low-code platform",
                "Increased developer engagement by 50% by streamlining the app builder",
                "Optimized application performance and user experience",
                "Collaborated with cross-functional teams to deliver high-quality solutions"
            ],
            technologies: ["React", "TypeScript", "Node.js", "Low-Code Development", "Performance Optimization"]
        },
        {
            title: "Software Engineer",
            company: "CareerNetwork",
            companyUrl: "https://careernetwork.co",
            location: "Remote",
            type: "Full-time",
            date: "Jun 2022 - May 2023",
            achievements: [
                "Provided a robust platform serving 5,000+ professionals",
                "Boosted user engagement by 35% through UI/UX improvements",
                "Implemented key features that enhanced platform functionality",
                "Collaborated with stakeholders to define and achieve project goals"
            ],
            technologies: ["Next.js", "React", "Node.js", "MongoDB", "User Analytics"]
        },
        {
            title: "Developer Advocate",
            company: "Metaschool",
            companyUrl: "https://metaschool.so",
            location: "Remote",
            type: "Contract",
            date: "Jun 2022 - Sep 2022",
            achievements: [
                "Grew user participation by 30% through engaging content and workshops",
                "Forged 12+ partnerships to raise platform visibility by 40%",
                "Created technical content and tutorials for the community",
                "Led developer workshops and training sessions"
            ],
            technologies: ["Technical Writing", "Community Building", "Web3", "Developer Relations"]
        }
    ]
};
