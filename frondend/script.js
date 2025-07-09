document.getElementById("generateBtn").addEventListener("click", async () => {
  const examBox = document.getElementById("examContent");
  examBox.textContent = "Đang tạo đề thi, vui lòng chờ...";

  try {
    const res = await fetch("http://localhost:5000/generate-exam", {
      method: "POST"
    });
    const data = await res.json();
    if (data.exam) {
      examBox.textContent = data.exam;
    } else {
      examBox.textContent = "Đã xảy ra lỗi: " + data.error;
    }
  } catch (err) {
    examBox.textContent = "Không thể kết nối đến server backend.";
  }
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.getElementById("examContent");
  html2pdf().from(element).save("de-thi-tieng-anh.pdf");
});
