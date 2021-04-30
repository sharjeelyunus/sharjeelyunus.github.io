async function addCCToList(url) {
    var ul = document.getElementById("posts");

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
        .ref("Posts")
        .once("value", function (snapshot) {
            snapshot.forEach(function (ChildSnapshot) {
                let url = ChildSnapshot.val().url;
                addCCToList(url);
            });
        });
}

window.onload(FetchCCData());