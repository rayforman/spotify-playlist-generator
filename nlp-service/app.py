from flask import Flask, request, jsonify
from openai import OpenAI
from dotenv import load_dotenv
from constants import SYSTEM_PROMPT, USER_PROMPT_TEMPLATE, KEYWORD_GENRES
import os

load_dotenv()
app = Flask(__name__)
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

@app.route('/analyze', methods=['POST'])
def analyze_text():
    try:
        text = request.json.get('text', '').lower()
        
        user_prompt = USER_PROMPT_TEMPLATE.format(text=text)
        
        # Get audio features from OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt}
            ]
        )
        features = response.choices[0].message.content
        
        # Determine genres based on text
        suggested_genres = ["pop"]  # default
        for keyword, genres in KEYWORD_GENRES.items():
            if keyword in text:
                suggested_genres = genres
                break
        
        # Return both features and genres
        return jsonify({
            "features": features,
            "genres": suggested_genres
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5002)