document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-container");

  fetch("sample-projects.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load sample data");
      return response.json();
    })
    .then(data => {
      container.innerHTML = "";

      const projects = data.projects.project;
      projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-card";
        div.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <a href="${project.projectLink}" target="_blank">Learn more</a>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Fetch error:", error);
      container.innerHTML = `<p>Unable to load projects. Please try again later.</p>`;
    });
});