export interface IFrontMatterReview {
  imgSrc: string;
  imgAlt: string;

  name: string;
  reviewDate: string;
  releaseDate: string;
  typeOrGenre: string[];
  rating: number;
  review: string;
  ifYouLiked: string;
  link: string;

  /* Specific to Book & Album Reviews */
  artistOrAuthor: string;

  /* Specific to Album Reviews */
  favoriteSongs: string[];
}
