// รับค่า ?id=movie1
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

const moviesData = {
  movie1: {
    title: "Inception",
    tagline: "Sci-Fi | 2010",
    image: "images/movie1.jpg",
    description: "หนังแนว Sci-Fi ระดับตำนาน โดย Christopher Nolan ..."
  },
  movie2: {
    title: "Interstellar",
    tagline: "Adventure | 2014",
    image: "images/movie2.jpg",
    description: "การเดินทางข้ามดวงดาวเพื่อหาบ้านใหม่ของมนุษยชาติ ..."
  }
};

// ถ้ามี id ให้เปลี่ยนข้อมูล
if (movieId && moviesData[movieId]) {
  const data = moviesData[movieId];
  document.getElementById("movie-title").textContent = data.title;
  document.getElementById("movie-tagline").textContent = data.tagline;
  document.getElementById("movie-description").textContent = data.description;
  document.getElementById("movie-image").src = data.image;
  document.getElementById("movie-hero").style.backgroundImage = 'url(${data.image})';
}