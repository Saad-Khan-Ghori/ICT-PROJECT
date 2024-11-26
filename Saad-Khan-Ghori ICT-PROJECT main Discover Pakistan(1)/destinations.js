const destinationsData = {
    skardu: {
      title: "Skardu",
      description:
        "Discover the serene beauty of Skardu, surrounded by majestic mountains and crystal-clear lakes.",
      food: ["Chapshuro", "Prapoo", "Local Apricots"],
      landmarks: ["Shigar Fort", "Satpara Lake", "Deosai National Park"],
    },
    kashmir: {
      title: "Kashmir",
      description:
        "Experience the heaven on earth with lush valleys, rivers, and unmatched tranquility.",
      food: ["Kashmiri Tea", "Rogan Josh", "Tabak Maaz"],
      landmarks: ["Dal Lake", "Neelum Valley", "Mughal Gardens"],
    },
    "fairy-meadows": {
      title: "Fairy Meadows",
      description:
        "Witness breathtaking views of Nanga Parbat from the enchanting Fairy Meadows.",
      food: ["Traditional BBQ", "Fresh Trout", "Local Herbs"],
      landmarks: ["Nanga Parbat Base Camp", "Raikot Glacier", "Dense Forest Trails"],
    },
  };
  
  document.querySelectorAll(".learn-more").forEach((button) => {
    button.addEventListener("click", (e) => {
      const destination = e.target.dataset.destination;
      const data = destinationsData[destination];
      if (data) {
        document.querySelector(".modal-header").textContent = data.title;
        document.querySelector(".modal-description").textContent = data.description;
  
        const foodList = document.querySelector("#modal-food");
        const landmarksList = document.querySelector("#modal-landmarks");
  
        foodList.innerHTML = data.food.map((item) => `<li>${item}</li>`).join("");
        landmarksList.innerHTML = data.landmarks
          .map((item) => `<li>${item}</li>`)
          .join("");
  
        document.querySelector(".modal").classList.add("active");
      }
    });
  });
  
  document.querySelector(".close-modal").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("active");
  });
  