async function addWebToList(li) {
    var ul = document.getElementById("web-dev");

    var _appName = document.createElement("li");

    _appName.innerHTML = `${li}`;
    ul.appendChild(_appName);
}

async function FetchWebData() {
    firebase
        .database()
        .ref("WebDevelopment")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let li = ChildSnapshot.val().li;
                addWebToList(li);
            });
        });
}

window.onload(FetchWebData());