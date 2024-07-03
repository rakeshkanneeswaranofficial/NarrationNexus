from flask import Flask, request, jsonify
from flask_cors import CORS
import json 
import requests

app = Flask(__name__)
CORS(app, support_credentials = True)

@app.route('/process_image', methods=['POST'])
def process_image():
    

    # Get image base64 data from request
    # image_base64 = request.json.get('image_base64')
    
    # URL for model API
    url = "http://localhost:11434/api/generate"
    
    # Prepare payload
    payload = {
      "model": "llava",
      "prompt": "describe this image", 
      
    
    }
    
    # Send request to model API
    response = requests.post(url, data=json.dumps(payload))

    
    # Return response text from model API
    return response.text




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)
