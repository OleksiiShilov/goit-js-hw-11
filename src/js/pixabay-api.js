export function getSearchImage(queryImage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '44116350-6386c211d371838e745950ec7';
  const params = new URLSearchParams({
    key: API_KEY,
    q: queryImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
