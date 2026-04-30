// sidebar.js
document.addEventListener("DOMContentLoaded", function () {
    const sidebarHTML = `
        <h3>ECEG-6101 Modules</h3>
        <ul>
            <li><a href="../index.html">🏠 Course Home</a></li>
            <li><a href="1. introduction.html">1. Concept of Research</a></li>
            <li><a href="2. research-types.html">2. Types of Research</a></li>
            <li><a href="3. process.html">3. Research Process</a></li>
            <li><a href="4. proposal.html">4. Proposal Development</a></li>
            <li><a href="5. ethics.html">5. Research Ethics</a></li>
            <li><a href="6. reporting.html">6. Technical Reporting</a></li>
        </ul>
        <hr style="border-color: rgba(255,255,255,0.2);">
        <a href="practice.html">Practice Questions</a>
    `;

    // Insert Sidebar
    const sidebarContainer = document.getElementById('sidebar');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;

        // Highlight Active Page
        const currentLocation = location.pathname.split("/").pop();
        const links = sidebarContainer.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentLocation) {
                link.classList.add('active');
            }
        });
    }
});


//    <h3>Resources</h3>
//     <ul>
//         <li><a href="#" onclick="window.print()">🖨️ Print/Save PDF</a></li>
//     </ul>
