function getQtileDLs() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-qtile/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    let dls = 0;
    const dlCount = document.getElementById("qtile-dl-count");
    for (let i in data) {
      let assets = data[i].assets;
      dls = assets[0].download_count + dls;
      dlCount.innerHTML = dls;
    }
  };
  xhr.send();
}

getQtileDLs();

function getXfceDLs() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-xfce4/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    let dls = 0;
    const dlCount = document.getElementById("xfce-dl-count");
    for (let i in data) {
      let assets = data[i].assets;
      dls = assets[0].download_count + dls;
      dlCount.innerHTML = dls;
    }
  };
  xhr.send();
}

getXfceDLs();

// DOWNLOAD WOOF OS ISO DIRECTLY //

function redirectQtile() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-qtile/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    window.location.href = data[0].assets[0].browser_download_url;
  };
  xhr.send();
}

function redirectXfce4() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-xfce4/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    window.location.href = data[0].assets[0].browser_download_url;
  };
  xhr.send();
}
