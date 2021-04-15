let gcpBadges = []
fetch('../JS/badges.json')
    .then(results => results.json())
    .then(results => {

        let badgeArray = ''
        results.forEach(element => {
            badgeArray += `
            <div class="box-q">
                <img src="${element.img}" alt="${element.name}" title="${element.name}"/>
                <p>${element.name} <br/> <span>${element.issueDate}</span></p>
            </div>`
        });
        document.getElementById("badge_box").innerHTML = badgeArray
    })
