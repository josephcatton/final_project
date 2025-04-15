document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("project-container");
  
    // Replace this once your key arrives!
    const apiKey = "c137d58c-58e6-4af7-ba16-460d2dd245d4"; 
    const url = `https://api.globalgiving.org/api/public/projectservice/themes/education/projects/active?api_key=${apiKey}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        container.innerHTML = ""; // Clear "loading..." text
  
        const projects = data.projects.project.slice(0, 5); // Show first 5
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