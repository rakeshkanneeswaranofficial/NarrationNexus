from flask import Flask, request, jsonify
from flask_cors import CORS
import json 
import base64
import requests
API_URL = "https://api-inference.huggingface.co/models/ogkalu/Comic-Diffusion"
headers = {"Authorization": "Bearer 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"}

app = Flask(__name__)
CORS(app, support_credentials = True)

@app.route('/process_image', methods=['POST'])
def process_image():
    # image_path = "/Users/rakeshkanneeswaran/Documents/GitFolder/gojoStoryGen/src/assets/ADNI_006_S_0731_MR_Axial_T2_Star__br_raw_20170919093831352_22_S609741_I905361_jpg.rf.1b6f6099a0ff812929487b70d334e98f.jpg"
    # with open (image_path, "rb") as image_file:
    #  image_base64 = base64. b64encode (image_file. read()).decode('utf-8')

    # Get image base64 data from request
    image_base64 = request.json.get('image_base64')
    
    # URL for model API
    url = "http://localhost:11434/api/generate"
    
    # Prepare payload
    payload = {
      "model": "llava",
      "prompt": "what people doing in the picture keep the main focus on the people ,  here the picture are different scene aboout tarvelling actions taken by the family?", 
      "stream": False,
      "images": [image_base64]
    }
    
    # Send request to model API
    response = requests.post(url, data=json.dumps(payload))
    
    # Return response text from model API
    return response.text




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)
