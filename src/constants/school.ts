export const SCHOOL_INFO = {
    name: 'Aravalli Academy',
    tagline: 'Quality Education from Class 1 to 12',
    subtitle: 'SEBA-affiliated school with Science & Arts streams',
    phone: '+91 98765 43210',
    email: 'info@aravalliacademy.edu.in',
    address: 'Aravalli Hills Road, Guwahati, Assam - 781001',
    established: 2014,
    social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
    },
};

export const STATS = [
    { label: 'Years of Excellence', value: '10+' },
    { label: 'Qualified Teachers', value: '30+' },
    { label: 'Students Taught', value: '1000+' },
    { label: 'Board Results', value: '95%' },
];

export const TRUST_BADGES = [
    { title: 'SEBA Affiliated', icon: 'award' },
    { title: 'Experienced Faculty', icon: 'users' },
    { title: 'Modern Classrooms', icon: 'monitor' },
    { title: '10+ Years of Excellence', icon: 'trophy' },
    { title: 'Holistic Education', icon: 'heart' },
];

export const ACADEMICS_CARDS = [
    {
        id: 'primary',
        title: 'Primary School',
        subtitle: 'Class 1–5',
        description: 'Foundation learning & values',
        link: '/academics#primary',
    },
    {
        id: 'middle',
        title: 'Middle School',
        subtitle: 'Class 6–8',
        description: 'Concept-based learning',
        link: '/academics#middle',
    },
    {
        id: 'secondary',
        title: 'Secondary School',
        subtitle: 'Class 9–10',
        description: 'SEBA Curriculum',
        link: '/academics#secondary',
    },
    {
        id: 'science',
        title: 'Higher Secondary – Science',
        subtitle: 'Class 11–12',
        description: 'Physics, Chemistry, Maths, Biology',
        link: '/academics#science',
    },
    {
        id: 'arts',
        title: 'Higher Secondary – Arts',
        subtitle: 'Class 11–12',
        description: 'Political Science, History, Education, Assamese',
        link: '/academics#arts',
    },
];

export const WHY_CHOOSE_US = [
    {
        title: 'Experienced Teachers',
        description: 'Highly qualified and dedicated faculty members',
        icon: 'user-check',
    },
    {
        title: 'Smart Classrooms',
        description: 'Modern technology-enabled learning environment',
        icon: 'monitor',
    },
    {
        title: 'Personal Attention',
        description: 'Small class sizes for individual focus',
        icon: 'heart',
    },
    {
        title: 'Exam-Focused Preparation',
        description: 'Comprehensive preparation for board examinations',
        icon: 'book-open',
    },
    {
        title: 'Student Discipline & Values',
        description: 'Character building and moral education',
        icon: 'shield',
    },
];

export const PRINCIPAL_MESSAGE = {
    name: 'Dr. Rajesh Kumar',
    designation: 'Principal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    message: `Welcome to Aravalli Academy, where we believe in nurturing young minds to become responsible citizens of tomorrow. 
  
  Our commitment to quality education goes beyond textbooks. We focus on holistic development, combining academic excellence with character building, sports, and cultural activities.
  
  With experienced faculty, modern infrastructure, and a student-centric approach, we ensure that every child receives the attention and guidance they deserve. Our consistent board results and student achievements speak volumes about our dedication.
  
  I invite you to be part of our growing family and experience education that truly transforms lives.`,
};

export const NAVIGATION_LINKS = [
    { label: 'Home', href: '/' },
    {
        label: 'Academics',
        href: '/academics',
        submenu: [
            { label: 'Classes 1–5', href: '/academics#primary' },
            { label: 'Classes 6–10', href: '/academics#middle' },
            { label: 'Classes 11–12 (Science)', href: '/academics#science' },
            { label: 'Classes 11–12 (Arts)', href: '/academics#arts' },
        ],
    },
    { label: 'About Us', href: '/about' },
    { label: 'Student Life', href: '/student-life' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Notices', href: '/notices' },
    { label: 'Contact', href: '/contact' },
];

export const STUDENT_ACTIVITIES = [
    {
        id: 'sports',
        title: 'Sports & Athletics',
        description: 'Comprehensive sports program with professional coaching',
        icon: 'trophy',
        items: ['Cricket', 'Football', 'Basketball', 'Volleyball', 'Athletics', 'Badminton'],
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
    },
    {
        id: 'cultural',
        title: 'Cultural Activities',
        description: 'Rich cultural programs celebrating diversity and talent',
        icon: 'music',
        items: ['Music', 'Dance', 'Drama', 'Art & Craft', 'Traditional Arts'],
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
    },
    {
        id: 'academic',
        title: 'Academic Clubs',
        description: 'Beyond classroom learning through specialized clubs',
        icon: 'book-open',
        items: ['Science Club', 'Math Club', 'Debate Society', 'Quiz Club', 'Robotics'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    },
    {
        id: 'social',
        title: 'Social Service',
        description: 'Building responsible citizens through community engagement',
        icon: 'heart',
        items: ['NSS', 'Eco Club', 'Community Service', 'Blood Donation', 'Tree Plantation'],
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    },
];

export const CLUBS_SOCIETIES = [
    {
        name: 'Science Club',
        description: 'Hands-on experiments, science fairs, and innovation projects',
        icon: 'flask',
    },
    {
        name: 'Literary Club',
        description: 'Creative writing, poetry, storytelling, and book discussions',
        icon: 'book',
    },
    {
        name: 'Art & Craft Club',
        description: 'Painting, sculpture, handicrafts, and creative expression',
        icon: 'palette',
    },
    {
        name: 'Music & Dance Club',
        description: 'Vocal, instrumental music, and various dance forms',
        icon: 'music',
    },
    {
        name: 'Eco Club',
        description: 'Environmental awareness, sustainability, and green initiatives',
        icon: 'leaf',
    },
    {
        name: 'Debate Society',
        description: 'Public speaking, debates, and Model United Nations',
        icon: 'message-square',
    },
];

export const SCHOOL_FACILITIES = [
    {
        name: 'Sports Ground',
        description: 'Well-maintained playground with facilities for multiple sports',
        icon: 'trophy',
    },
    {
        name: 'Auditorium',
        description: 'Modern auditorium with 500+ seating capacity for events',
        icon: 'theater',
    },
    {
        name: 'Library',
        description: 'Extensive collection of 5000+ books and digital resources',
        icon: 'library',
    },
    {
        name: 'Computer Lab',
        description: '50+ computers with high-speed internet connectivity',
        icon: 'monitor',
    },
    {
        name: 'Science Labs',
        description: 'Separate labs for Physics, Chemistry, and Biology',
        icon: 'flask',
    },
    {
        name: 'Art Room',
        description: 'Dedicated space for art, craft, and creative activities',
        icon: 'palette',
    },
];

export const ANNUAL_EVENTS = [
    {
        title: 'Annual Sports Day',
        description: 'Inter-house sports competitions and athletic events',
        month: 'January',
    },
    {
        title: 'Annual Function',
        description: 'Cultural extravaganza showcasing student talents',
        month: 'December',
    },
    {
        title: 'Science Exhibition',
        description: 'Student projects and innovative science demonstrations',
        month: 'September',
    },
    {
        title: 'Independence Day',
        description: 'Patriotic celebrations with cultural programs',
        month: 'August',
    },
    {
        title: 'Republic Day',
        description: 'Flag hoisting ceremony and cultural performances',
        month: 'January',
    },
    {
        title: 'Founder\'s Day',
        description: 'Celebrating the school\'s establishment and achievements',
        month: 'March',
    },
];
