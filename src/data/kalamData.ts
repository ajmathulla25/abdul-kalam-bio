export interface QuoteItem {
  id: string;
  quote: string;
  context?: string;
  theme: 'Dreams' | 'Hard Work' | 'Leadership' | 'Education' | 'Perseverance';
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  category: 'Early Years' | 'Science & Space' | 'Presidency' | 'Teaching & Youth';
  description: string;
  detail: string;
  badge: string;
  image?: string;
}

export interface Book {
  id: string;
  title: string;
  year: string;
  coAuthor?: string;
  description: string;
  keyTheme: string;
  famousQuote: string;
  coverAccent: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUOTES_DATA: QuoteItem[] = [
  {
    id: 'q1',
    quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    context: "On inspiring students across India",
    theme: "Dreams"
  },
  {
    id: 'q2',
    quote: "If you want to shine like a sun, first burn like a sun.",
    context: "Address to youth on perseverance and dedication",
    theme: "Hard Work"
  },
  {
    id: 'q3',
    quote: "Excellence happens not by accident. It is a process.",
    context: "Address on national development & technical mastery",
    theme: "Perseverance"
  },
  {
    id: 'q4',
    quote: "To succeed in your mission, you must have single-minded devotion to your goal.",
    context: "Advice to young scientists and researchers",
    theme: "Hard Work"
  },
  {
    id: 'q5',
    quote: "Failure will never overtake me if my determination to succeed is strong enough.",
    context: "Reflecting on the early SLV-3 flight setbacks",
    theme: "Perseverance"
  },
  {
    id: 'q6',
    quote: "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
    context: "From his book 'Ignited Minds'",
    theme: "Education"
  },
  {
    id: 'q7',
    quote: "A leader must know how to manage failure. When success comes, give it to the team. When failure comes, absorb it yourself.",
    context: "Recounting the leadership lesson from Prof. Satish Dhawan in 1979",
    theme: "Leadership"
  },
  {
    id: 'q8',
    quote: "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
    context: "Wings of Fire",
    theme: "Dreams"
  },
  {
    id: 'q9',
    quote: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
    context: "His enduring self-identity until his final day",
    theme: "Education"
  },
  {
    id: 'q10',
    quote: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    context: "Interaction with youth and budding engineers",
    theme: "Perseverance"
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    id: 'm1',
    year: '1931',
    title: 'Humble Beginnings in Rameswaram',
    subtitle: 'Birth & Early Upbringing',
    category: 'Early Years',
    description: 'Born on October 15, 1931, in the island town of Rameswaram, Tamil Nadu, to Jainulabdeen and Ashiamma.',
    detail: 'To support his family and continue his education, a young Kalam distributed newspapers door-to-door before school. His teachers spotted his sharp curiosity and relentless work ethic.',
    badge: 'Roots',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/A._P._J._Abdul_Kalam_%28cropped%29.jpg'
  },
  {
    id: 'm2',
    year: '1960',
    title: 'Aeronautical Dream Takes Wing',
    subtitle: 'Madras Institute of Technology & DRDO',
    category: 'Science & Space',
    description: 'Graduated in Aeronautical Engineering from MIT Chennai and joined DRDO as a young aeronautical scientist.',
    detail: 'Narrowly missing his childhood dream of becoming a fighter pilot in the Indian Air Force (ranked 9th for 8 spots), he channeled his passion into aerospace research, designing a small hovercraft prototype.',
    badge: 'Aeronautics'
  },
  {
    id: 'm3',
    year: '1969–1980',
    title: 'The SLV-III Breakthrough',
    subtitle: 'Indian Space Research Organisation (ISRO)',
    category: 'Science & Space',
    description: 'Project Director for India’s first indigenous Satellite Launch Vehicle (SLV-III).',
    detail: 'Overcoming a heart-wrenching first flight failure in 1979, Kalam and his team successfully launched the Rohini satellite into near-Earth orbit in July 1980, putting India into the exclusive space club.',
    badge: 'Space Pioneer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/A._P._J._Abdul_Kalam_in_2008.jpg'
  },
  {
    id: 'm4',
    year: '1982–1998',
    title: 'Integrated Guided Missile Programme',
    subtitle: 'The Missile Man of India',
    category: 'Science & Space',
    description: 'Led the development of the Agni, Prithvi, Akash, Trishul, and Nag missile systems at DRDL/DRDO.',
    detail: 'Under his visionary project management, India developed strategic deterrence independently against sanctions. He also co-invented the low-cost "Kalam-Raju Stent" with Dr. Soma Raju for cardiac patients.',
    badge: 'Defence & Healthcare'
  },
  {
    id: 'm5',
    year: '1998',
    title: 'Pokhran-II & Technology Vision',
    subtitle: 'Chief Scientific Adviser to the Prime Minister',
    category: 'Science & Space',
    description: 'Served as Chief Project Coordinator for the Pokhran-II nuclear tests.',
    detail: 'Alongside AEC Chairman R. Chidambaram, Kalam played a decisive scientific and organizational role, establishing India as an acknowledged nuclear power and advocating for India 2020 technological self-reliance.',
    badge: 'National Security'
  },
  {
    id: 'm6',
    year: '2002–2007',
    title: 'The People’s President',
    subtitle: '11th President of the Republic of India',
    category: 'Presidency',
    description: 'Elected with overwhelming bipartisan support as the 11th President of India.',
    detail: 'Rashtrapati Bhavan became accessible to common citizens, school students, and scientists. He refused personal perks, interacted with over 500,000 children during his tenure, and established the PURA (Providing Urban Amenities to Rural Areas) model.',
    badge: '11th President',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/A._P._J._Abdul_Kalam_%28cropped%29.jpg'
  },
  {
    id: 'm7',
    year: '2007–2015',
    title: 'Teacher to the Millions',
    subtitle: 'Visiting Professor & Youth Mentor',
    category: 'Teaching & Youth',
    description: 'Returned directly to his true passion: teaching at IIM Shillong, IIM Ahmedabad, IIM Indore, and IISc.',
    detail: 'Kalam traveled to remote schools, interacted with over 18 million young minds, and urged youth to cultivate an ignited spirit for India’s transformation.',
    badge: 'Teacher'
  },
  {
    id: 'm8',
    year: '2015',
    title: 'A Teacher Until the Very Last Breath',
    subtitle: 'July 27, 2015 · IIM Shillong',
    category: 'Teaching & Youth',
    description: 'Collapsed while delivering a lecture on "Creating a Livable Planet Earth" at IIM Shillong.',
    detail: 'He left the mortal world doing what he loved most: speaking with students. His final words to his aide Srijan Pal Singh asked about the welfare of students.',
    badge: 'Eternal Legacy'
  }
];

export const BOOKS_DATA: Book[] = [
  {
    id: 'b1',
    title: 'Wings of Fire',
    year: '1999',
    coAuthor: 'with Arun Tiwari',
    description: 'The monumental autobiography tracing his journey from an impoverished coastal boy in Rameswaram to the forefront of India’s space and missile programmes.',
    keyTheme: 'Self-realization, resilience, indigenous technology',
    famousQuote: 'We are all born with a divine fire in us. Our efforts should be to give wings to this fire.',
    coverAccent: 'from-amber-600/30 to-amber-950/50'
  },
  {
    id: 'b2',
    title: 'Ignited Minds',
    year: '2002',
    description: 'A clarion call to unleash the dormant power within India, dedicated to Snehal Thakkar, a schoolgirl who asked him for a developed India.',
    keyTheme: 'Youth empowerment, patriotism, national mission',
    famousQuote: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
    coverAccent: 'from-orange-600/30 to-orange-950/50'
  },
  {
    id: 'b3',
    title: 'India 2020: A Vision for the New Millennium',
    year: '1998',
    coAuthor: 'with Y. S. Rajan',
    description: 'A detailed blueprint for how India could overcome poverty, illiteracy, and infrastructure deficits to become a developed knowledge superpower.',
    keyTheme: 'Agriculture, education, critical technologies, healthcare',
    famousQuote: 'A developed India by 2020 or even earlier is not a dream. It is a mission.',
    coverAccent: 'from-emerald-600/30 to-emerald-950/50'
  },
  {
    id: 'b4',
    title: 'Turning Points: A Journey Through Challenges',
    year: '2012',
    description: 'The sequel to Wings of Fire, documenting his eventful presidency, governance decisions, and key interactions with world leaders.',
    keyTheme: 'Integrity in governance, moral courage, decisive leadership',
    famousQuote: 'My message, especially to young people is to have courage to think differently, courage to invent.',
    coverAccent: 'from-blue-600/30 to-blue-950/50'
  },
  {
    id: 'b5',
    title: 'Guiding Souls: Dialogues on the Purpose of Life',
    year: '2005',
    coAuthor: 'with Arun Tiwari',
    description: 'Philosophical conversations exploring moral values, inner tranquility, spirituality, and finding purpose in modern life.',
    keyTheme: 'Spiritual harmony, ethical living, selfless service',
    famousQuote: 'Where there is righteousness in the heart, there is beauty in the character.',
    coverAccent: 'from-purple-600/30 to-purple-950/50'
  }
];

export const TEN_POINT_PLEDGE = [
  "I will pursue my education or the work with dedication and I will excel in it.",
  "From now onwards, I will teach at least 10 persons who cannot read and write.",
  "I will plant at least 10 saplings and shall foster and nurture them.",
  "I will visit rural and urban areas and heal the ailing heart of at least 5 persons from the grief of addiction or gambling.",
  "I will constantly endeavour to remove all forms of suffering from my fellow human beings.",
  "I will not support any religious, caste or language differentiation.",
  "I will be honest and endeavour to make a corruption-free society.",
  "I will work for becoming an enlightened citizen and make my family righteous.",
  "I will always be a friend of the mentally and physically challenged and will work hard to make them feel equal to the rest of us.",
  "I will proudly celebrate the success of my country and my fellow countrymen."
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which classical Indian musical instrument was Dr. Kalam deeply fond of playing?",
    options: ["Sitar", "Veena", "Flute", "Tabla"],
    correctIndex: 1,
    explanation: "Dr. Kalam was an ardent player of the Veena and enjoyed Carnatic classical music in his quiet evening hours."
  },
  {
    id: 2,
    question: "Dr. Kalam was the Project Director for which historic Indian satellite launch vehicle?",
    options: ["PSLV-C11", "GSLV Mk III", "SLV-III", "Aryabhata Rocket"],
    correctIndex: 2,
    explanation: "He served as the Project Director for SLV-III, which successfully injected the Rohini satellite into orbit in July 1980."
  },
  {
    id: 3,
    question: "In collaboration with Dr. Soma Raju, what affordable healthcare device did Dr. Kalam co-invent?",
    options: ["Kalam-Raju Stent", "Low-cost dialysis machine", "Digital stethoscope", "Portable ventilator"],
    correctIndex: 0,
    explanation: "In 1998, they developed the 'Kalam-Raju Stent', a coronary stent made of medical-grade steel that dramatically reduced cardiac treatment costs in India."
  },
  {
    id: 4,
    question: "What beloved title was affectionately given to Dr. Kalam during his tenure in Rashtrapati Bhavan?",
    options: ["The Supreme Commander", "The People's President", "The Chief Mentor", "The Scientist Statesman"],
    correctIndex: 1,
    explanation: "He was universally known as 'The People's President' because he opened the doors of the presidency to students, youth, and ordinary citizens."
  },
  {
    id: 5,
    question: "At which institution was Dr. Kalam delivering a lecture when he breathed his last in July 2015?",
    options: ["IIT Madras", "IIM Shillong", "Anna University", "Delhi University"],
    correctIndex: 1,
    explanation: "He was delivering a lecture on 'Creating a Livable Planet Earth' to students at the Indian Institute of Management (IIM) Shillong."
  }
];
