let Deskripsinilaisiswa = [];

function hitungGrade(nilai) {
    if (nilai >= 90) return "A";
    if (nilai >= 80) return "B";
    if (nilai >= 70) return "C";
    if (nilai >= 60) return "D";
    return "E";
}

function NILAISISWA() {
    const NAMA = document.getElementById("NAMA").value.trim();
    const NILAI = Number(document.getElementById("NILAI").value);
    const pesan = document.getElementById("Pesan");

    if (!NAMA || Number.isNaN(NILAI)) {
        pesan.textContent = "Masukkan nama dan nilai dengan benar!";
        pesan.className = "pesan error";
        return;
    }

    Deskripsinilaisiswa.push({
        NAMA: NAMA,
        NILAI: NILAI,
        GRADE: hitungGrade(NILAI),
        STATUS: NILAI >= 76 ? "Lulus" : "Tidak lulus"
    });

    pesan.textContent = "Data siswa berhasil ditambahkan.";
    pesan.className = "pesan berhasil";
    tampilkan();
}

function tampilkan() {
    const dataTerakhir = Deskripsinilaisiswa[Deskripsinilaisiswa.length - 1];

    document.getElementById("NamaSiswa").textContent = `Nama siswa: ${dataTerakhir.NAMA}`;
    document.getElementById("NilaiSiswa").textContent = `Nilai siswa: ${dataTerakhir.NILAI}`;
    document.getElementById("Grade").textContent = `Grade: ${dataTerakhir.GRADE}`;
    document.getElementById("Statuskelulusan").textContent = `Status kelulusan: ${dataTerakhir.STATUS}`;
}

