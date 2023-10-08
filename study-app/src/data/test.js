(function () {
  const text = "Ini adalah contoh teks yang ingin kita hitung jumlah katanya.";

  // Menghitung jumlah kata dalam teks
  const words = text.split(" ");
  const wordCount = words.length;

  // Menampilkan hasil di konsol
  console.log(`Jumlah kata dalam teks: ${wordCount}`);
})();
