from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
with open('rf_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the POST request
    data = request.json

    # Extract features from the data
    github_features = data['github_features']
    linkedin_features = data['linkedin_features']
    leetcode_features = data['leetcode_features']

    # Predict the user score
    new_user_data = np.array([github_features + linkedin_features + leetcode_features])
    new_user_score = model.predict(new_user_data)

    # Return the predicted score as JSON response
    return jsonify({'predicted_score': new_user_score[0]})

if __name__ == '__main__':
    app.run(debug=True)
