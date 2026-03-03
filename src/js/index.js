const searchResultsData = {
  about: {
    title: "About Me",
    results: [
      {
        title: "Vennela Vallabhaneni - Full Stack Developer",
        url: "vennby.com/about",
        category: "Profile",
        description:
          "I'm a passionate full stack developer with a love for creating beautiful and functional applications. I enjoy solving complex problems and learning new technologies. When I'm not coding, you can find me exploring creative projects or contributing to open source.",
      },
      {
        title: "My Journey & Background",
        url: "vennby.com/about#journey",
        category: "Background",
        description:
          "Starting my tech journey with curiosity and passion, I've grown from a self-taught developer to a skilled engineer. My background includes diverse experiences across frontend, backend, and full stack development. I believe in continuous learning and pushing boundaries.",
      },
      {
        title: "What Makes Me, Me",
        url: "vennby.com/about#personality",
        category: "Personal",
        description:
          "Beyond code, I'm an enthusiast for design, user experience, and creating things that matter. I'm driven by challenges that require creative thinking and collaboration. I'm always excited about new opportunities to grow and contribute to impactful projects.",
      },
    ],
  },
  projects: {
    title: "My Projects and Experiences",
    results: [
      {
        title: "Featured Projects & Portfolio",
        url: "vennby.com/gallery",
        category: "Projects",
        description:
          "A showcase of my most rewarding projects including web applications, design implementations, and full stack solutions. Each project represents my growth as a developer and my commitment to quality code and user experience.",
      },
      {
        title: "Open Source Contributions",
        url: "vennby.com/gallery#opensource",
        category: "Open Source",
        description:
          "I'm passionate about contributing to the open source community. My contributions span various projects focusing on accessibility, developer experience, and innovative solutions.",
      },
      {
        title: "Current Work & Initiatives",
        url: "vennby.com/gallery#current",
        category: "In Progress",
        description:
          "Currently exploring emerging technologies and building projects that challenge conventional thinking. I'm working on innovative solutions that combine design and functionality.",
      },
    ],
  },
  skills: {
    title: "My Skills and Capabilities",
    results: [
      {
        title: "Technical Skills & Expertise",
        url: "vennby.com/skills",
        category: "Tech Stack",
        description:
          "Proficient in modern web technologies including JavaScript, React, Node.js, and more. I work with databases, APIs, and cloud services. Always expanding my skillset in emerging technologies like Web3, AI, and advanced design patterns.",
      },
      {
        title: "Frontend Development",
        url: "vennby.com/skills#frontend",
        category: "Specialization",
        description:
          "Expert in creating responsive, accessible, and beautiful user interfaces. Experienced with React, TypeScript, CSS, and modern web design principles. I focus on creating delightful user experiences.",
      },
      {
        title: "Backend & Full Stack",
        url: "vennby.com/skills#backend",
        category: "Specialization",
        description:
          "Capable of building robust server applications with Node.js, Python, and various databases. I understand system design, API development, and DevOps practices for scalable applications.",
      },
    ],
  },
};

function showSearchResults(type, title) {
  const overlay = document.getElementById("searchResultsOverlay");
  const resultsContainer = document.getElementById("resultsContainer");
  const data = searchResultsData[type];

  let resultsHTML = `<h2 style="color: #545454; margin-bottom: 20px;">About: "${title}"</h2>`;

  data.results.forEach((result) => {
    resultsHTML += `
      <div class="search-result-item">
        <div class="result-category">${result.category}</div>
        <div class="result-title">${result.title}</div>
        <div class="result-url">${result.url}</div>
        <div class="result-description">${result.description}</div>
      </div>
    `;
  });

  resultsContainer.innerHTML = resultsHTML;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSearchResults() {
  const overlay = document.getElementById("searchResultsOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");
  const dropdown = document.getElementById("dropdown");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  searchInput.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    let shouldShowDropdown = false;

    dropdownItems.forEach((item) => {
      const text = item
        .querySelector(".option-text")
        .textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = "block";
        shouldShowDropdown = true;
      } else {
        item.style.display = "none";
      }
    });

    if (shouldShowDropdown) {
      dropdown.classList.add("show");
    } else {
      dropdown.classList.remove("show");
    }
  });

  // Handle dropdown item clicks
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const optionText = item.querySelector(".option-text").textContent;

      if (optionText.includes("Projects")) {
        e.preventDefault();
        showSearchResults("projects", "My Projects and Experiences");
      } else if (optionText.includes("Skills")) {
        e.preventDefault();
        showSearchResults("skills", "My Skills and Capabilities");
      }

      dropdown.classList.remove("show");
    });
  });

  document.addEventListener("click", function (event) {
    const isClickedInside =
      searchInput.contains(event.target) ||
      dropdown.contains(event.target);
    const isDropdownVisible = dropdown.classList.contains("show");
    if (!isClickedInside && isDropdownVisible) {
      dropdown.classList.remove("show");
    }
  });
});
