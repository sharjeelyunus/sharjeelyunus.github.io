function addItemsToList(courseName, institute) {
    var ul = document.getElementById("certificates");
    var header = document.createElement("h2");

    var _courseName = document.createElement("li");
    var _institute = document.createElement("li");

    _courseName.innerHTML = `<i class="fas fa-trophy"></i> ${courseName} - <em>${(_institute.innerHTML = institute)}</em>`;
    ul.appendChild(header);
    ul.appendChild(_courseName);
}

function FetchAllData() {
    firebase
        .database()
        .ref("Certificates-List")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let courseName = ChildSnapshot.val().courseName;
                let institute = ChildSnapshot.val().institute;
                addItemsToList(courseName, institute);
            });
        });
}

window.onload(FetchAllData());