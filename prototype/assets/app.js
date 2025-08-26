// Fetch data from dummy-data.json
fetch('assets/dummy-data.json')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('projects');
        data.projects.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.textContent = project.title;
            projectList.appendChild(projectItem);
        });
    });