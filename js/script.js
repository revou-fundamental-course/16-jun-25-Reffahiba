document.getElementById("year").textContent = new Date().getFullYear();

function tampilkanBangunDatar(jenis){
    document.getElementById("form-segitiga").style.display = "none";
    document.getElementById("form-persegi").style.display = "none";
    document.getElementById("form-persegiPanjang").style.display = "none";

    resetForm();

    if(jenis === "segitiga"){
        document.getElementById("form-segitiga").style.display = "block";
    } else if(jenis === "persegi"){
        document.getElementById("form-persegi").style.display = "block";
    } else {
        document.getElementById("form-persegiPanjang").style.display = "block";
    }
}

function tampilkanForm(jenis, bangun) {
    // Sembunyikan semua form terlebih dahulu
    const semuaForm = document.querySelectorAll(".form-section div[id^='form-']");
    semuaForm.forEach((form) => (form.style.display = "none"));

    // Tampilkan yang dimaksud
    const formTarget = document.getElementById(`form-${jenis}-${bangun}`);
    if (formTarget) {
        formTarget.style.display = "block";
    }
}

// Hitung segitiga
function hitungLuasSegitiga() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Terdapat field yang kosong, isi terlebih dahulu");
        return;
    }

    const luas = 0.5 * alas * tinggi;

    const hasilElemen = document.getElementById("hasilLuasSegitiga");

    document.getElementById(
        "hasilLuasSegitiga"
    ).textContent = `Luas: ${luas}`;
    hasilElemen.style.display = "block";
}

function hitungKelilingSegitiga() {
    const a = parseFloat(document.getElementById("sisiA").value);
    const b = parseFloat(document.getElementById("sisiB").value);
    const c = parseFloat(document.getElementById("sisiC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Terdapat field yang kosong, isi terlebih dahulu");
        return;
    }

    const keliling = a + b + c;

    const hasilElemen = document.getElementById("hasilKelilingSegitiga");

    document.getElementById(
        "hasilKelilingSegitiga"
    ).textContent = `Keliling: ${keliling}`;
    hasilElemen.style.display = "block";
}

// Hitung persegi
function hitungLuasPersegi() {
    const sisi = parseFloat(document.getElementById("sisiLuas").value);
    
    if(isNaN(sisi)){
        alert("Terdapat field yang kosong, isi terlebih dahulu");
        return;
    }

    const luas = sisi * sisi;

    const hasilElemen = document.getElementById("hasilLuasPersegi");

    document.getElementById(
        "hasilLuasPersegi"
    ).textContent = `Luas: ${luas}`;
    hasilElemen.style.display = "block";
}

function hitungKelilingPersegi() {
    const sisi = parseFloat(document.getElementById("sisiKeliling").value);
    
    if (isNaN(sisi)) {
        alert("Isi nilai sisi terlebih dahulu");
        return;
    }
    
    const keliling = 4 * sisi;

    const hasilElemen = document.getElementById("hasilKelilingPersegi");

    document.getElementById(
        "hasilKelilingPersegi"
    ).textContent = `Keliling: ${keliling}`;
    hasilElemen.style.display = "block";
}

// Hitung persegi panjang
function hitungLuasPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjangLuas").value);
    const lebar = parseFloat(document.getElementById("lebarLuas").value);

    if (isNaN(panjang) || isNaN(lebar)){
        alert("Terdapat field yang kosong, isi terlebih dahulu");
        return;
    }

    const luas = panjang * lebar;

    const hasilElemen = document.getElementById("hasilLuasPersegiPanjang");

    document.getElementById(
        "hasilLuasPersegiPanjang"
    ).textContent = `Luas: ${luas}`;
    hasilElemen.style.display = "block";
}

function hitungKelilingPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjangKeliling").value);
    const lebar = parseFloat(document.getElementById("lebarKeliling").value);
    
    if (isNaN(panjang) || isNaN(lebar)){
        alert("Terdapat field yang kosong, isi terlebih dahulu");
        return;
    }

    const keliling = 2 * (panjang + lebar);

    const hasilElemen = document.getElementById("hasilKelilingPersegiPanjang");

    document.getElementById(
        "hasilKelilingPersegiPanjang"
    ).textContent = `Keliling: ${keliling}`;
    hasilElemen.style.display = "block";
}

function resetForm() {
    // Reset semua input bertipe number
    const inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach((input) => (input.value = ""));

    // Reset semua elemen hasil
    const outputs = document.querySelectorAll(
        "#hasilLuasSegitiga, #hasilKelilingSegitiga, #hasilLuasPersegi, #hasilKelilingPersegi, #hasilLuasPersegiPanjang, #hasilKelilingPersegiPanjang"
    );
    outputs.forEach((output) => (output.textContent = ""));
}
