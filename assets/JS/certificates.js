var certificates = [
    `<i class="fas fa-trophy"></i> Elements of AI: Introduction to AI - <em>University of Helsinki</em>`,
    `<i class="fas fa-trophy"></i> HTML Essential Training - <em>LinkedIn</em>`,
    `<i class="fas fa-trophy"></i> Programming Foundations Databases - <em>LinkedIn</em>`,
    `<i class="fas fa-trophy"></i> Graphic Design - <em>DigiSkills</em>`,
    `<i class="fas fa-trophy"></i> Digital Marketing - <em>DigiSkills</em>`,
    `<i class="fas fa-trophy"></i> E-Commerce Managment - <em>DigiSkills</em>`,
    `<i class="fas fa-trophy"></i> Freelancing - <em>DigiSkills</em>`,
    `<i class="fas fa-trophy"></i> Succeeding in Web Development Full Stack and Front End - <em>LinkedIn</em>`,
    `<i class="fas fa-trophy"></i> Programming Foundations Fundamentals - <em>LinkedIn</em>`,
    `<i class="fas fa-trophy"></i> What is Graphic Design? - <em>LinkedIn</em>`,
    `<i class="fas fa-trophy"></i> Introduction to Flutter Development - <em>App Brewery</em>`,
    `<i class="fas fa-trophy"></i>Artificial Intelligence Music Creation Certification - <em>Udemy</em>`,
    `<i class="fas fa-trophy"></i> The Beginners Guide to Cyber Security - <em>Udemy</em>`,
    `<i class="fas fa-trophy"></i> HTML and CSS for Beginners - <em>Udemy</em>`,
    `<i class="fas fa-trophy"></i> Communication Skills - <em>Udemy</em>`,
    `<i class="fas fa-trophy"></i> Javascript Beginner - <em>Udemy</em>`,
    `<i class="fas fa-trophy"></i> Java Programming - <em>Udemy</em>`
];

certificates.forEach(myFunction);
function myFunction(item) {
    document.getElementById("certificates").innerHTML += `<li>${item}</li>`;
}