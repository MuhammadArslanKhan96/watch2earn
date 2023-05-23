import boto3
# from boto3 import Session
from botocore.exceptions import BotoCoreError, ClientError
from contextlib import closing
import os
from flask import Flask, request, send_file
import sys
# import subprocess
from tempfile import gettempdir
from flask_cors import CORS, cross_origin


polly = boto3.client('polly')

# Define a route for the root URL

# Create a Flask app instance
app = Flask(__name__)
CORS(app)

# response = polly.describe_voices(LanguageCode='en-UK')
@app.route('/languages', methods=['POST'])
# @cross_origin
def languages():
    data = request.json
    print(data['language'])
    response = polly.describe_voices(LanguageCode=data['language'])
    return response
@app.route('/generateaudio')
# @cross_origin
def generateaudio():
    data = request.args
    try:
        response = polly.synthesize_speech(Text=data.get('text'),
                                           OutputFormat="mp3", VoiceId=data.get('voice'))
    except (BotoCoreError, ClientError) as error:
        print(error)
        sys.exit(-1)

    # Access the audio stream from the response
    if "AudioStream" in response:
            with closing(response["AudioStream"]) as stream:
                output = os.path.join(gettempdir(), "speech.mp3")
                try:
                # Open a file for writing the output as a binary stream
                    with open(output, "wb") as file:
                        file.write(stream.read())
                except IOError as error:
                # Could not write to file, exit gracefully
                    print(error)
                    sys.exit(-1)
    else:
        # The response didn't contain audio data, exit gracefully
        print("Could not stream audio")
        sys.exit(-1)

    return send_file(output, as_attachment=True)
    # Play the audio using the platform's default player
    # if sys.platform == "win32":
    #     os.startfile(output)
    # else:
    # # The following works on macOS and Linux. (Darwin = mac, xdg-open = linux).
    #     opener = "open" if sys.platform == "darwin" else "xdg-open"
    #     subprocess.call([opener, output])
    
# Start the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5000)








