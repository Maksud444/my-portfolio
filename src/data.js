//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiPhone,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/Shikhbe Shobai Certificate.jpg';
import UpworkBrandIcon from './assets/img/brands/ledp.jpg';
import FiverBrandIcon from './assets/img/brands/progrmming-hero.png';


// projects images
import Project1 from './assets/img/projects/car-sell.webp';
import Project2 from './assets/img/projects/doctor.jpg';
import Project3 from './assets/img/organic.jpg';
import Project4 from './assets/img/projects/password.jpg';
import Project5 from './assets/img/projects/Screenshot (74).png';
import Project6 from './assets/img/projects/qus.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
  
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: '',
    
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/maksudbilllah/',
    target :"_blank"
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Maksud444',
    target :"_blank"
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/maksud-billah/',
    target :"_blank"
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
    title: 'Complete Web development & Wordpress Designing Course with Shikhbe Sobai'
  },
  {
    img: FiverBrandIcon,
    href: '',
    title: 'Complete web development course with Jhankar Mahbub - Programming Hero (2022 Jun - 2022 Dec)'
  },
  {
    img: UpworkBrandIcon,
    href: '',
    title: 'Complete web development course with Ledp  (2021 Jun - 2021 Dec)'
  },

];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'buy-sell-usedcar',
    projectdl:'This Site mainly sells and buys old cars, anyone can sell their car if they want',
    category: 'reactjs',
    live: 'https://buy-sell-usedcar-4bd1f.web.app',
    github: 'https://github.com/Maksud444/buy-sell-usedcar-client'
  },
  {
    id: '2',
    image: Project2,
    name: 'Doctors terminal',
    projectdl:'It is a dentists website, Anyone can book an appointment for all dentists services.',
    category: 'reactjs',
    live: 'https://doctors-portal-6c186.web.app/',
    github:'https://github.com/Maksud444/doctors-terminal-client'
  },
  {
    id: '3',
    image: Project3,
    name: 'kh organic food',
    projectdl:'It is an organic food services website, here are some products of some categories of food.',
    category: 'nodejs',
    live: 'https://kh-organic-food.web.app/',
    github:'https://github.com/Maksud444/service-review-client'
  },
  {
    id: '4',
    image: Project4,
    name: 'Generate a random Password',
    projectdl:'',
    category: 'javascript',
    live: 'https://tranquil-croissant-05f04f.netlify.app/',
    github:'https://github.com/Maksud444/password-debuging'
  },
  {
    id: '5',
    image: Project5,
    name: 'quiz zone',
    projectdl:'',
    category: 'javascript',
    live: 'https://snazzy-pie-84a4f7.netlify.app/',
    github:'https://github.com/Maksud444/quiz-crackerz'
  },
  {
    id: '6',
    image: Project6,
    name: 'type monster',
    projectdl:'',
    category: 'javascript',
    live: 'https://reliable-taiyaki-cc70d4.netlify.app/',
    github:'https://github.com/Maksud444/type-monster-debug'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'reactjs',
  },
  {
    name: 'nodejs',
  },
  {
    name: 'javascript',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at maksudbillah420@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Khulna, Bangladesh',
    description: 'Serving clients worldwide',
  },
  {
    icon: <FiPhone />,
    title: 'Call Me',
    description: '+8801701121280',
  },
];
