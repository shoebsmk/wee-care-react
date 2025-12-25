// Type definitions for Wee Care School

export interface Program {
    name: string;
    timing: string;
    fee: string;
}

export interface CurriculumItem {
    name: string;
    details: string;
}

export interface SummerCamp {
    age: string;
    dates: string;
    activities: string[];
}

export interface SchoolInfo {
    name: string;
    tagline: string;
    landmark: string;
    area: string;
    city: string;
    phone: string;
    hours: string;
    established: number;
    description: string;
    environment: string;
    ageRange: string;
    programs: Program[];
    curriculum: CurriculumItem[];
    summerCamp: SummerCamp;
}

export interface NavItem {
    name: string;
    href: string;
}

export const schoolInfo: SchoolInfo = {
    name: "Wee Care",
    tagline: "Learn and Grow",
    landmark: "Opp OSM Girls Degree College",
    area: "Moghal Pura",
    city: "Hyderabad",
    phone: "+91 8466807865",
    hours: "9:30 AM to 1:00 PM",
    established: 2023,
    description: "Established in 2023 and expanding since, Wee Care is a loving and caring pre-primary school providing a safe and secure environment for children with activity-based learning.",
    environment: "Spoken English Environment",
    ageRange: "1 to 6 years",
    programs: [
        { name: "Daycare", timing: "9:30 AM - 1:00 PM", fee: "Free" },
        { name: "Nursery", timing: "9:30 AM - 1:00 PM", fee: "Free" },
        { name: "L.K.G", timing: "9:30 AM - 1:00 PM", fee: "Free" },
        { name: "U.K.G", timing: "9:30 AM - 1:00 PM", fee: "Free" }
    ],
    curriculum: [
        { name: "Alphabets Recognition", details: "A-Z" },
        { name: "Number Recognition", details: "1 to 100" },
        { name: "Oral Counting", details: "1 to 100" },
        { name: "Rhymes", details: "Learn with Action" },
        { name: "Islamic Studies", details: "Deeniyath and Qaida" },
        { name: "General Knowledge", details: "Basic GK" },
        { name: "Colouring", details: "Drawing & Painting" }
    ],
    summerCamp: {
        age: "3 to 10 years",
        dates: "May 1 to 12 June",
        activities: [
            "PlayBlocks & Cars", "Jigsaws", "Colouring & Painting",
            "Sliding Fun Game", "Clay work", "Rhymes with Action",
            "Number & Alphabet ID"
        ]
    }
};

export const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Summer Camp', href: '#summercamp' },
    { name: 'Contact', href: '#contact' }
];
