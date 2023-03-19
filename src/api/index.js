// fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`);

const KEY = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

const URL = 'https://api.unsplash.com/photos/';

export const fetchImages = async (page) => {
  const response = await fetch(`${URL}?client_id=${KEY}&per_page=28&page=${page}`);

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
export const fetchImagesStats = async (id) => {
  const response = await fetch(`${URL}${id}/statistics?client_id=${KEY}`);
  console.log('response', response);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
