document.getElementById("loadStation").addEventListener("click", async () => {
  const errorMsg = document.getElementById("errorMsg");
  const stationInfo = document.getElementById("stationInfo");
  const stationName = document.getElementById("stationName");
  const stationDesc = document.getElementById("stationDesc");
  const audioSource = document.getElementById("audioSource");
  const audioPlayer = document.getElementById("audioPlayer");

  errorMsg.classList.add("hidden");
  stationInfo.classList.add("hidden");
  errorMsg.textContent = "";

  try {
    const res = await fetch("https://radio-api-8yws.onrender.com/api/stream");
    if (!res.ok) throw new Error("Failed to fetch station data");

    const data = await res.json();

    stationName.textContent = data.name;
    stationDesc.textContent = data.description;
    audioSource.src = data.stream_url;

    audioPlayer.load();
    stationInfo.classList.remove("hidden");
  } catch (error) {
    errorMsg.textContent = error.message;
    errorMsg.classList.remove("hidden");
  }
});
