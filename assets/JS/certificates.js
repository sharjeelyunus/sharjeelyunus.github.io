function addCertificatesToList(courseName, institute, link) {
    var ul = document.getElementById("certificates");

    var _courseName = document.createElement("li");

    _courseName.innerHTML = `
                        <li class="box-c">
                            <i class="fas fa-trophy"></i>
                                <b>${courseName}</b> <br> <em>${(institute)}</em>
                                <a href="${link}" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                        </li>`;
    ul.appendChild(_courseName);
}

function addBadgesList(name, issueDate, img) {
    var div = document.getElementById("badge_box");

    var _name = document.createElement("div");

    _name.innerHTML = `
            <div class="box-q">
                <img src="${img}" alt="${name}" title="${name}"/>
                <p>${name} <br/> <span>${issueDate}</span></p>
            </div>`;
    div.appendChild(_name);
}

function FetchAllData() {
    firebase
        .database()
        .ref("Certificates-List")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let courseName = ChildSnapshot.val().courseName;
                let institute = ChildSnapshot.val().institute;
                let link = ChildSnapshot.val().link;
                addCertificatesToList(courseName, institute, link);
            });
        });
}

function FetchBadgesData() {
    firebase
        .database()
        .ref("GCP-Badges")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let name = ChildSnapshot.val().name;
                let issueDate = ChildSnapshot.val().issueDate;
                let img = ChildSnapshot.val().img;
                addBadgesList(name, issueDate, img);
            });
        });
}

window.onload(FetchAllData(), FetchBadgesData());