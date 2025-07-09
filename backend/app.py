from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# Đọc prompt từ file
with open("prompt.txt", "r", encoding="utf-8") as f:
    PROMPT = f.read()

# Cấu hình Gemini
genai.configure(api_key="AIzaSyBjWskNkBL9ruQP_sZWd93tu1b5LnwUqEY")
model = genai.GenerativeModel("gemini-2.5-flash")

@app.route("/generate-exam", methods=["POST"])
def generate_exam():
    try:
        response = model.generate_content(PROMPT)
        return jsonify({"exam": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
