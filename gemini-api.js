const API_KEY = 'AIzaSyBjWskNkBL9ruQP_sZWd93tu1b5LnwUqEY';

const prompt = `
Bạn là một giáo viên tiếng Anh chuyên nghiệp, nhiều năm kinh nghiệm giảng dạy học sinh cấp 2 và cấp 3, từng tốt nghiệp chuyên Anh trường THPT chuyên Hà Nội – Amsterdam, và có nền tảng học thuật quốc tế. Phong cách dạy của bạn khoa học, rõ ràng, dễ hiểu, súc tích, nhưng vẫn đầy đủ và phân hóa cao.

Hãy tạo một đề thi tiếng Anh tổng hợp gồm ít nhất 40 câu hỏi, theo đúng cấu trúc bên dưới, đáp ứng đầy đủ các yêu cầu sau:

🧠 Yêu cầu nội dung & chất lượng đề thi:
✅ Độ khó ngẫu nhiên: Các câu hỏi có độ khó được phân bố ngẫu nhiên, không theo thứ tự dễ đến khó.
✅ Độ phủ CEFR: Câu hỏi sử dụng từ vựng và ngữ pháp trải dài từ trình độ A1 đến C2 (có ghi chú mức độ CEFR cho mỗi câu – ví dụ: [A2], [B1]...)
✅ Đa dạng dạng bài: Sử dụng nhiều loại hình câu hỏi khác nhau: trắc nghiệm, điền từ, chọn đúng/sai, nối cột, sắp xếp lại câu, viết lại câu tương đương, chọn tiêu đề phù hợp…
✅ Phát triển tư duy: Bao gồm các câu hỏi yêu cầu học sinh vận dụng tư duy bậc cao như: suy luận, tìm ý chính, phát hiện lỗi logic, phân biệt chi tiết chính/phụ, hiểu ẩn ý, sắc thái nghĩa,…
✅ Chủ đề thực tế và học thuật: Khai thác đa dạng chủ đề như: Trường học, gia đình, công nghệ, môi trường, sức khỏe, giao tiếp, xã hội, văn hóa, toàn cầu hóa…
✅ Không lặp dạng bài
✅ Tổng điểm toàn bài là 100, thời gian làm bài 60 phút, nên có số điểm từng phần
✅ Đáp án ở cuối đề (giải thích ngắn cho câu khó nếu phù hợp)
✅ Trình bày rõ ràng, giống đề thật: Không hiển thị phần giới thiệu hay hướng dẫn

📘 Cấu trúc đề thi yêu cầu:
Phần 1: Phonetics – Ngữ âm (Câu 1–2): Chọn từ phát âm khác / trọng âm khác
Phần 2: Word Stress – Trọng âm (Câu 3–4)
Phần 3: Vocabulary & Grammar (Câu 5–12)
Phần 4: Reading – Thông báo ngắn (Câu 13–16)
Phần 5: Reading – Logic đoạn văn (Câu 17–18)
Phần 6: Sentence Meaning – Câu đồng nghĩa (Câu 19–20)
Phần 7: Sentence Transformation (Câu 21–22)
Phần 8: Cloze Test (Câu 23–28)
Phần 9: Reading Comprehension (Short) – Câu 29
Phần 10: Reading Comprehension (Long) – Câu 30–36
Phần 11: Sentence Insertion – Câu 37–40

❗️Chỉ hiển thị nội dung đề thi. Không giải thích. Không giới thiệu. Không nói gì thêm.
👉 Trả lời trực tiếp bằng nội dung đề thi.
`;

async function fetchGeminiPrompt() {
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY;

  const body = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) throw new Error('Lỗi gọi Gemini API');

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
