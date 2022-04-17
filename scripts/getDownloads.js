function getQtileDLs() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-qtile/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    let dls = 0;
    const dlCount = document.getElementById("qtile-dl-count");

    for (let i in data) {
      try {
        let assets = data[i].assets;
        for (x in assets) {
          dls = assets[x].download_count + dls;
        }
        dlCount.innerHTML = dls;
      } catch (error) {}
    }
  };
  xhr.send();
}

function geti3DLs() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-i3/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    let dls = 0;
    const dlCount = document.getElementById("i3-dl-count");

    for (let i in data) {
      try {
        let assets = data[i].assets;
        for (x in assets) {
          dls = assets[x].download_count + dls;
        }
        dlCount.innerHTML = dls;
      } catch (error) {}
    }
  };
  xhr.send();
}

function getXfceDLs() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/repos/woof-os/isos-xfce4/releases";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    let dls = 0;
    const dlCount = document.getElementById("xfce-dl-count");
    for (let i in data) {
      try {
        let assets = data[i].assets;
        dls = assets[0].download_count + dls;
        dlCount.innerHTML = dls;
      } catch (error) {}
    }
  };
  xhr.send();
}

getQtileDLs();
getXfceDLs();
geti3DLs();
