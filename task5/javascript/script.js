document.querySelector('.search-btn').addEventListener('click', function() {
    alert('Search functionality coming soon!');
});


let currentIndex = 0;
const teamMembers = document.querySelectorAll(".team-member");

function showNextMember() {
    teamMembers.forEach(member => member.style.display = "none");
    teamMembers[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % teamMembers.length;
}

setInterval(showNextMember, 3000);
