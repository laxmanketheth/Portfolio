export const Bio = {
    name: "Laxman Singh Ketheth",
    roles: [
        "Programmer",
        "Front-End Developer",
        "Full Stack Developer"
    ],
    description: "I am an aspiring web developer passionate about learning and creating engaging websites. As a beginner, I'm eager to expand my skills and tackle new challenges. With a strong commitment to growth, I'm dedicated to honing my craft and building user-friendly websites that leave a positive impact.",
    githubProfile: "https://github.com/laxmanketheth",
    resume: "",
    linkedIn: ""
};

export const skills = [
    {   
        id: 1,
        title: "Frontend",
        skills: [
            {   
                id:1,
                name: "HTML",
                image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
            },
            {   
                id:2,
                name: "CSS",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                id:3,
                name: "React",
                image: "https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=220"
            },
            {
                id:4,
                name: "Redux",
                image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            },
            {
                id:5,
                name: "Javascript",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            },
            {
                id:6,
                name: "Bootstrap",
                image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            },
            {
                id:7,
                name: "Material UI",
                image: "https://tse1.mm.bing.net/th?id=OIP.OYXrK-RhfTvUyMu9l3oQGgHaHa&pid=Api&P=0&h=220"
            },
        ]
    },
    {
        id: 2,
        title: "Backend",
        skills: [
            {   
                id:1,
                name: "Node Js",
                image: "https://nodejs.org/static/images/logo.svg"
            },
            {
                id:2,
                name: "Express Js",
                image: "https://tse4.mm.bing.net/th?id=OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL&pid=Api&P=0&h=220"
            },
            {
                id:3,
                name: "Javascript",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            },
            {
                id:4,
                name: "Postgresql",
                image: "https://www.postgresql.org/media/img/about/press/elephant.png"
            },
            {
                id:5,
                name: "Rest API's",
                image: "https://tse1.mm.bing.net/th?id=OIP.TazEx3MMSM_rOBjcprJ45QHaHq&pid=Api&P=0&h=220"
            },
            {
                id:6,
                name: "Npm",
                image: "https://tse3.mm.bing.net/th?id=OIP.CX9aD8_e-X1PP90ISK1SnQHaC4&pid=Api&P=0&h=220"
            },
        ]
    },
    {
        id: 3,
        title: "Others",
        skills: [
            {
                id:1,
                name: "Git",
                image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
            },
            {
                id:2,
                name: "GitHub",
                image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            },
            {
                id:3,
                name: "VS Code",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
            },
            {
                id:4,
                name: "Postman",
                image: "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png"
            }
        ]
    }
]

export const projects = [
    {
        id: 1,
        title: "Movix",
        // date: "Jan 2024 - Dec 2023",
        description:
            "Movix: Your go-to website for movies and TV shows, powered by the TMDB API, offering a vast collection of data, ratings, and information.",
        image:
            "images/Screenshot (2).png",
        tags: [
            "React Js",
            "Redux",
            "ScSS",
            "Axios"
        ],
        github: "https://github.com/laxmanketheth/movix",
        webapp: "https://movix-six-psi.vercel.app/",
    },
    {
        id: 2,
        title: "Luxe",
        // date: "Jan 2024 - Dec 2023",
        description:
            "Luxe : A fashionable clothes shopping app with an admin page for effortless product management, providing a curated collection, personalized recommendations, and a seamless shopping experience.",
        image:
            "images/Screenshot (3).png",
        tags: [
            "React Js",
            "Redux",
            "Styled Components",
            "Node Js",
            "Express js",
            "MongoDb",
            "JWT"
        ],
        github: "https://github.com/laxmanketheth/Ecommerce-app",
        webapp: "https://ecommerce-app-frontend-tau.vercel.app/",
    },
    {
        id: 3,
        title: "LMS Website",
        // date: "Jan 2024 - Dec 2023",
        description:
            "LMS : It is a learning management system offering a variety of courses for enrollment",
        image:
            "https://github.com/rishavchanda/DecisionHub/raw/master/assets/testRule.jpg",
        tags: [
            "Javascript",
            "Node Js",
            "Express js",
            "PostgreSQL",
            "Knex",
            "JWT",
            "bcrypt",
            "Handlebars",
            "CSS"
        ],
        github: "https://github.com/laxmanketheth/lms_project",
        webapp: "",
    },

    {
        id: 4,
        title: "Task Manager",
        description:
            " Task MAnager : It is a web application that shows all the todos of a user and allows user to add new Todos. The data is stored to MongoDb database. User can delete todos individually and also all todos can be deleted at the same time.",
        image:
            "images/Screenshot 2024-03-05 223637.png",
        tags: [
            "Javascript",
            "ReactJS",
            "ReduxJS",
            "ReduxThunk",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "CSS",
            "HTML"
            
        ],
        github: "https://github.com/laxmanketheth/Todo-App",
        webapp: "https://todo-app-frontend-orpin.vercel.app/",
    },
    
    {
        id: 5,
        title: "Canvas",
        description:
            "Vanvas : The canvas app is a digital drawing tool that allows users to create and draw on a blank canvas using various tools and colors.",
        image:
            "images/Screenshot (5).png",
        tags: [
            "Javascript",
            "CSS",
            "HTML"
        ],
        github: "https://github.com/laxmanketheth/CanvasProject",
        webapp: "https://canvas-project-snowy.vercel.app/",
    },

    {
        id: 6,
        title: "Weather App",
        description:
            "Weather App : It is a web application that utilizes a free weather API to provide real-time weather information, including temperature, rainfall, and wind data, based on the user's input of a city name.",
        image:
            "images/Screenshot (4).png",
        tags: [
            "Javascript",
            "CSS",
            "HTML"
            
        ],
        github: "https://github.com/laxmanketheth/Weather-App",
        webapp: "https://weather-app-nu-pied.vercel.app/",
    },
    

];


export const education = [
    {
        id: 1,
        image: "images/logo@3x1.png",
        institution: "Xccelerate, Hong Kong",
        date: "May 2023 - Nov 2023",
        description: "I was enrolled in a Full Stack Web Development Bootcamp at Xccelerate, where I learned HTML, CSS, JavaScript, Node.js, Express, and React to build dynamic web applications.",
        Qualification: "Immersive Full Stack Web Development",
      },
      {
        id: 2,
        image: "https://img.jagranjosh.com/images/2022/December/21122022/Graphic-Era-University-GEU-Dehradun-Logo.jpg",
        institution: "Graphic Era University, India",
        date: "Aug 2015 - june 2019",
        description: "I graduated from Graphic Era University with a Bachelor's degree in Hotel Management, a program that provided me with a comprehensive education encompassing a wide range of subjects related to the hospitality industry.",
        Qualification: "Bachelor of Hotel Management",
      },
]