function addCertificatesToList(courseName, institute) {
    var ul = document.getElementById("certificates");

    var _courseName = document.createElement("li");
    var _institute = document.createElement("li");

    _courseName.innerHTML = `
                        <li class="box-c">
                            <i class="fas fa-trophy"></i>
                                <b>${courseName}</b> <br> <em>${(_institute.innerHTML = institute)}</em>
                        </li>`;
    ul.appendChild(_courseName);
}

function addBadgesList(name, issueDate, img) {
    var div = document.getElementById("badge_box");

    var _name = document.createElement("div");
    var _issueDate = document.createElement("div");
    var _img = document.createElement("div");

    _name.innerHTML = `
            <div class="box-q">
                <img src="${_img.innerHTML = img}" alt="${_name.innerHTML = name}" title="${_name.innerHTML = name}"/>
                <p>${_name.innerHTML = name} <br/> <span>${_issueDate.innerHTML = issueDate}</span></p>
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
                addCertificatesToList(courseName, institute);
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