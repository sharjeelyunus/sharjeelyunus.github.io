async function addCCToList(url) {
    var ul = document.getElementById("climate_change");

    var _url = document.createElement("li");

    _url.innerHTML = `
                        <li class="box-cc box zone">
                            <img src="${await url}" class="image" />
                        </li>`;
    ul.appendChild(_url);
}

async function FetchCCData() {
    firebase
        .database()
        .ref("ClimateChange")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let url = ChildSnapshot.val().url;
                addCCToList(url);
            });
        });
}

window.onload(FetchCCData());