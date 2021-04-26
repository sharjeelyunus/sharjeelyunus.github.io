async function addAppsToList(TechImg, appImg, Technology, appName, sourceCode) {
    var ul = document.getElementById("app-dev");

    var _appName = document.createElement("li");

    _appName.innerHTML = `
                        <li class="box-web zone-web">
                            <div class="bar">
                                <h2>${appName}</h2>
                            </div>

                            <div class="main">
                                <img src="${await appImg}" class="image" />
                            </div>

                            <div class="middle">
                                <div class="text">
                              <a href="${sourceCode}" target="_blank">SOURCE CODE</a>
                            </div>
                          </div>
                          <div class="dev-language">
                            <img src="${TechImg}" />
                            <p>${Technology}</p>
                          </div>
                        </li>`;
    ul.appendChild(_appName);
}

async function FetchAppsData() {
    firebase
        .database()
        .ref("AppDevelopment")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let TechImg = ChildSnapshot.val().TechImg;
                let appImg = ChildSnapshot.val().appImg;
                let Technology = ChildSnapshot.val().Technology;
                let appName = ChildSnapshot.val().appName;
                let sourceCode = ChildSnapshot.val().sourceCode;
                addAppsToList(TechImg, appImg, Technology, appName, sourceCode);
            });
        });
}

window.onload(FetchAppsData());