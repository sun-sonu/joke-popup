const getJokes = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    const myJoke = document.querySelector("#myJoke");
    myJoke.textContent = data.value;
  } catch (error) {
    console.error("Failed to fetch joke", error);
  }
};

window.addEventListener("load", () => {
  getJokes();
});
