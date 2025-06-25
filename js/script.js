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

function tampilkanForm(jenis){
    document.getElementById("form-luas").style.display = "none";
    document.getElementById("form-keliling").style.display = "none";

    resetForm();

    if(jenis === "luas"){
        document.getElementById("form-luas").style.display = "block";
    } else if(jenis === "keliling"){
        document.getElementById("form-keliling").style.display = "block";
    }
}

// Hitung segitiga
function hitungLuasSegitiga() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const luas = 0.5 * alas * tinggi;

    document.getElementById(
        "hasilLuas"
    ).textContent = `Luas: ${luas}`;
}

function hitungKelilingSegitiga() {
    const a = parseFloat(document.getElementById("sisiA").value);
    const b = parseFloat(document.getElementById("sisiB").value);
    const c = parseFloat(document.getElementById("sisiC").value);

    const keliling = a + b + c;

    document.getElementById(
        "hasilKeliling"
    ).textContent = `Keliling: ${keliling}`;
}

// Hitung persegi
function hitungLuasPersegi() {
    const sisi = parseFloat(document.getElementById("sisi").value);
    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    document.getElementById(
        "hasilLuas"
    ).textContent = `Luas: ${luas}, Keliling: ${keliling}`;
}

function hitungLuasPersegi() {
    const sisi = parseFloat(document.getElementById("sisi").value);
    const keliling = 4 * sisi;

    document.getElementById(
        "hasilKeliling"
    ).textContent = `Keliling: ${keliling}`;
}

// Hitung persegi panjang
function hitungPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);

    document.getElementById(
        "hasilPersegiPanjang"
    ).textContent = `Luas: ${luas}, Keliling: ${keliling}`;
}

function resetForm() {
  // Kosongkan input Luas
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasilLuas").textContent = "";

    // Kosongkan input Keliling
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("hasilKeliling").textContent = "";
}
