// Function to toggle visibility of sections
function toggleSection(sectionId) {
    console.log(`Toggling section: ${sectionId}`); // Debugging line
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("D&D Campaign website is ready!");
});
