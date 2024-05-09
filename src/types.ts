export type ReviewsType = {
  comment: string;
  rating: string;
  reviewer: string;
};

export type NannieDataType = {
  about: string;
  avatar_url: string;
  birthday: string;
  characters: string[];
  education: string;
  experience: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: ReviewsType[];
};
