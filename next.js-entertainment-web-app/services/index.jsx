const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
  },
};

export const fetchSearchResults = async (keyword) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`, options);
    return await response.json();
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

export const fetchMediaData = async (query) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/${query}?language=en-US`, options);
    return await response.json();
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

export const fetchCategoryMedia = async (category) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/${category}/day?language=en-US`, options);
    return await response.json();
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

// Single Page Fetches
export const fetchMediaDetails = async (cat, id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${cat}/${id}?language=en-US`, {...options, next: {revalidate: 60}});
    return await response.json();
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

export const fetchMediaVideos = async (cat, id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${cat}/${id}/videos?language=en-US`, options);
    return await response.json();
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};
