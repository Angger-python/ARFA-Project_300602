const linkWa = document.getElementById('linkWa');
const paketList = document.querySelectorAll('.infoPaket');

linkWa.onclick = function(e) {
    e.preventDefault();
    let pesan = "Haii Saya tertarik dengan penawaran berikut:\n";
    paketList.forEach(paket => {
        // Ambil teks, hapus baris baru berlebih, dan rapikan spasi
        let teks = paket.innerText.replace(/\s+/g, ' ').trim();
        pesan += `- ${teks}\n`;
    });
    let nomorWa = "6282219174110";
    let url = "https://wa.me/" + nomorWa + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
};