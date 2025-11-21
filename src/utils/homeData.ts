import type { PostData, Story, UserPreferences } from '@/types/data';

// Enhanced mock data with detailed user profiles for filtering
export const allUsers: PostData[] = [
  {
    id: '1',
    user: {
      name: 'Priya Sharma',
      avatar: 'https://picsum.photos/200/200?random=1001',
      location: 'Darbhanga',
      age: 25,
      profession: 'Teacher',
      religion: 'Hindu',
      gender: 'Female',
      salary: 400000,
      education: 'Bachelor\'s Degree',
    },
    media: [
      { id: '1-1', uri: 'https://picsum.photos/400/300?random=1', type: 'image' },
      { id: '1-2', uri: 'https://picsum.photos/400/300?random=11', type: 'image' },
      { id: '1-3', uri: 'https://picsum.photos/400/300?random=21', type: 'video' },
      { id: '1-4', uri: 'https://picsum.photos/400/300?random=101', type: 'image' },
    ],
    caption: 'Family celebration during Chhath Puja! 🙏 Looking for someone special to share life\'s beautiful moments.',
    likes: 24,
    comments: 8,
    timeAgo: '2h',
    isLiked: false,
  },
  {
    id: '2',
    user: {
      name: 'Anjali Mishra',
      avatar: 'https://picsum.photos/200/200?random=1002',
      location: 'Muzaffarpur',
      age: 23,
      profession: 'Software Engineer',
      religion: 'Hindu',
      gender: 'Female',
      salary: 1200000,
      education: 'Master\'s Degree',
    },
    media: [
      { id: '2-1', uri: 'https://picsum.photos/400/400?random=2', type: 'image' },
    ],
    caption: 'Enjoying traditional Mithila art workshop with family. Art brings people together! 🎨',
    likes: 42,
    comments: 15,
    timeAgo: '4h',
    isLiked: true,
  },
  {
    id: '3',
    user: {
      name: 'Kavita Jha',
      avatar: 'https://picsum.photos/200/200?random=1003',
      location: 'Madhubani',
      age: 27,
      profession: 'Doctor',
      religion: 'Hindu',
      gender: 'Female',
      salary: 800000,
      education: 'PhD',
    },
    media: [
      { id: '3-1', uri: 'https://picsum.photos/400/350?random=3', type: 'image' },
      { id: '3-2', uri: 'https://picsum.photos/400/350?random=103', type: 'image' },
      { id: '3-3', uri: 'https://picsum.photos/400/350?random=203', type: 'video' },
      { id: '3-4', uri: 'https://picsum.photos/400/350?random=303', type: 'image' },
      { id: '3-5', uri: 'https://picsum.photos/400/350?random=403', type: 'image' },
    ],
    caption: 'Weekend family picnic at Janakpur. Life is beautiful with loved ones! 🌿',
    likes: 31,
    comments: 12,
    timeAgo: '6h',
    isLiked: false,
  },
  {
    id: '4',
    user: {
      name: 'Rohit Kumar',
      avatar: 'https://picsum.photos/200/200?random=1004',
      location: 'Saharsa',
      age: 29,
      profession: 'Business Owner',
      religion: 'Hindu',
      gender: 'Male',
      salary: 1500000,
      education: 'Bachelor\'s Degree',
    },
    media: [
      { id: '4-1', uri: 'https://picsum.photos/400/320?random=4', type: 'image' },
      { id: '4-2', uri: 'https://picsum.photos/400/320?random=14', type: 'video' },
      { id: '4-3', uri: 'https://picsum.photos/400/320?random=24', type: 'image' },
    ],
    caption: 'Started my own business this year! Family support means everything. 💼',
    likes: 18,
    comments: 6,
    timeAgo: '8h',
    isLiked: false,
  },
  {
    id: '5',
    user: {
      name: 'Sunita Thakur',
      avatar: 'https://picsum.photos/200/200?random=1005',
      location: 'Sitamarhi',
      age: 26,
      profession: 'Nurse',
      religion: 'Hindu',
      gender: 'Female',
      salary: 600000,
      education: 'Bachelor\'s Degree',
    },
    media: [
      { id: '5-1', uri: 'https://picsum.photos/400/380?random=5', type: 'image' },
      { id: '5-2', uri: 'https://picsum.photos/400/380?random=15', type: 'video' },
      { id: '5-3', uri: 'https://picsum.photos/400/380?random=105', type: 'image' },
      { id: '5-4', uri: 'https://picsum.photos/400/380?random=205', type: 'image' },
      { id: '5-5', uri: 'https://picsum.photos/400/380?random=305', type: 'image' },
    ],
    caption: 'Serving patients brings me joy. Looking for a caring life partner who values compassion. 🩺',
    likes: 35,
    comments: 11,
    timeAgo: '10h',
    isLiked: false,
  },
];

// Mock stories data
export const mockStories: Story[] = [
  {
    id: 's1',
    user: {
      name: 'Priya Sharma',
      avatar: 'https://picsum.photos/200/200?random=1001',
    },
    media: [
      { id: 's1-1', uri: 'https://picsum.photos/400/600?random=501', type: 'image' },
    ],
    viewedByUser: false,
  },
  {
    id: 's2',
    user: {
      name: 'Anjali Mishra',
      avatar: 'https://picsum.photos/200/200?random=1002',
    },
    media: [
      { id: 's2-1', uri: 'https://picsum.photos/400/600?random=502', type: 'image' },
      { id: 's2-2', uri: 'https://picsum.photos/400/600?random=503', type: 'image' },
    ],
    viewedByUser: true,
  },
  {
    id: 's3',
    user: {
      name: 'Kavita Jha',
      avatar: 'https://picsum.photos/200/200?random=1003',
    },
    media: [
      { id: 's3-1', uri: 'https://picsum.photos/400/600?random=504', type: 'image' },
    ],
    viewedByUser: false,
  },
];

// Current user preferences
export const currentUserPreferences: UserPreferences = {
  partnerAgeMin: 23,
  partnerAgeMax: 30,
  partnerProfession: ['Software Engineer', 'Doctor', 'Teacher', 'Engineer', 'Business Owner'],
  partnerLocation: ['Darbhanga', 'Muzaffarpur', 'Madhubani', 'Saharsa', 'Sitamarhi'],
};
