export interface User {
  name: string;
  avatar: string;
  location: string;
  age: number;
  profession: string;
  religion: string;
  gender: 'Male' | 'Female' | 'Other';
  salary: number;
  education: string;
}

export interface MediaItem {
  id: string;
  uri: string;
  type: 'image' | 'video';
}

export interface PostData {
  id: string;
  user: User;
  media: MediaItem[];
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked: boolean;
}

export interface Story {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  media: MediaItem[];
  viewedByUser: boolean;
}

export interface FilterPreferences {
  ageMin: number;
  ageMax: number;
  professions: string[];
  locations: string[];
  religions: string[];
  genders: string[];
  salaryMin: number;
  salaryMax: number;
}

export interface UserPreferences {
  partnerAgeMin: number;
  partnerAgeMax: number;
  partnerProfession: string[];
  partnerLocation: string[];
}
