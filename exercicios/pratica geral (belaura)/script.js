document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll("nav ul li a");
    const projects = document.querySelectorAll(".project");

    filterLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const filter = this.getAttribute("data-filter");

            projects.forEach(project => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });

            filterLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
