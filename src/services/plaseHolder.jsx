const defaultImgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
export const getPoster = url =>
  url ? `https://image.tmdb.org/t/p/w500/${url}` : defaultImgUrl;
