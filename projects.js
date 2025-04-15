document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-container");

  const apiKey = "c137d58c-58e6-4af7-ba16-460d2dd245d4";
  const targetURL = `https://api.globalgiving.org/api/public/projectservice/themes/education/projects/active.json?api_key=${apiKey}`;
  const encodedURL = encodeURIComponent(targetURL);
  const proxyURL = `https://api.allorigins.win/get?url=${encodedURL}`;

  fetch(proxyURL)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const parsed = JSON.parse(data.contents);

      container.innerHTML = "";

      const projects = parsed.projects.project.slice(0, 5);
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