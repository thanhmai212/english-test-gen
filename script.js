async function generateExam() {
  const examDiv = document.getElementById("exam-content");
  examDiv.innerHTML = "Đang tạo đề...";

  try {
    const response = await fetchGeminiPrompt();
    examDiv.innerHTML = formatExam(response);
  } catch (error) {
    examDiv.innerHTML = "Lỗi khi tạo đề.";
    console.error(error);
  }
}

function formatExam(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")       // **đậm**
    .replace(/__(.*?)__/g, "<span class='underline'>$1</span>") // __gạch chân__
    .replace(/\n/g, "<br>");                                 // xuống dòng
}

function downloadPDF() {
  const element = document.getElementById("exam-content");
  html2pdf().from(element).set({
    margin: 1,
    filename: 'de-thi-nang-luc-tieng-anh.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }).save();
}
