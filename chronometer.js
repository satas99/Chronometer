const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

const secilenDk = document.getElementById("secilen-dk");
const secilenSn = document.getElementById("secilen-sn");

const baslatButonu = document.getElementById("baslat");
const sıfırlaButonu = document.getElementById("sıfırla");

let dur = false;
secilenDk.addEventListener("change", () => {
    dakika.innerHTML = secilenDk.value;
})
secilenSn.addEventListener("change", () => {
    saniye.innerHTML = secilenSn.value < 10 ? "0" + secilenSn.value : secilenSn.value;
})
baslatButonu.addEventListener("click", startTimer);


sıfırlaButonu.addEventListener("click", () => {
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    secilenSn.value = "00";
    secilenDk.value = "00";
})
function startTimer() {
    dur = false;
    let dk = dakika.textContent;
    let sn = saniye.textContent;
    if (dk == 0 && sn == 0) {
        alert("Lütfen Süreyi Ayarlayınız")
    } else {


        const interval = setInterval(() => {
            sn--;
            sn = sn < 10 ? "0" + sn : sn;
            if (sn == "0-1") {
                dk--;
                sn = 59
            }
            if ((dk == 00 && sn == 00) || (dk == 0 && sn == 0)) {
                clearInterval(interval);
                window.alert("süre doldu");
                secilenDk.value = "00";
                secilenSn.value = "00";

            }
            if (dur) {
                clearInterval(interval);
                return;
            }
            saniye.textContent = sn;
            dakika.textContent = dk;

        }, 1000);
    }
}

