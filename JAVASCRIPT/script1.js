// Sample data for artwork (replace with your own data)
const artworkData = [
    { name: "Artwork 1", artist: "Artist Name 1", image: "artwork1.jpg" },
    { name: "Artwork 2", artist: "Artist Name 2", image: "artwork2.jpg" },
    { name: "Artwork 3", artist: "Artist Name 3", image: "artwork3.jpg" }
  ];
  
  // Function to display artwork in the gallery
  function displayArtwork() {
    const artGallery = document.getElementById("art-gallery");
    artGallery.innerHTML = ""; // Clear existing content
    
    artworkData.forEach(artwork => {
      const artworkDiv = document.createElement("div");
      artworkDiv.classList.add("artwork");
      
      const artworkImg = document.createElement("img");
      artworkImg.src = artwork.image;
      artworkImg.alt = artwork.name;
      
      const artworkInfo = document.createElement("p");
      artworkInfo.textContent = `${artwork.name} by ${artwork.artist}`;
      
      artworkDiv.appendChild(artworkImg);
      artworkDiv.appendChild(artworkInfo);
      
      artGallery.appendChild(artworkDiv);
    });
  }
  
  // Call the function to display artwork when the page loads
  window.onload = displayArtwork;
  