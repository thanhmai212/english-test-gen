document.getElementById("generateBtn").addEventListener("click", generateExam);
document.getElementById("downloadBtn").addEventListener("click", downloadPDF);

async function generateExam() {
  const loading = document.getElementById("loading");
  const output = document.getElementById("output");
  const downloadBtn = document.getElementById("downloadBtn");

  loading.classList.remove("hidden");
  output.textContent = "";
  downloadBtn.disabled = true;

  try {
    const text = await fetchGeminiPrompt();
    output.textContent = text;
    downloadBtn.disabled = false;
  } catch (err) {
    output.textContent = "Đã xảy ra lỗi: " + err.message;
  } finally {
    loading.classList.add("hidden");
  }
}

function downloadPDF() {
  const element = document.getElementById("output");
  html2pdf().from(element).save("de-thi-nang-luc-tieng-anh.pdf");
}