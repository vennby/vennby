function switchTab(tabName) {
  const tabs = document.querySelectorAll(".wiki-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
