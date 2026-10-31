from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd

from sklearn.feature_extraction.text import (
    TfidfVectorizer
)

from sklearn.metrics.pairwise import (
    cosine_similarity
)

app = Flask(__name__)

CORS(app)

# Load Dataset
data = pd.read_csv(
    "datasets/courses.csv"
)

# Convert text into vectors
vectorizer = TfidfVectorizer()

vectors = vectorizer.fit_transform(
    data["description"]
)

@app.route(
    "/recommend",
    methods=["POST"]
)

def recommend():

    user_input = request.json[
        "interest"
    ]

    # Convert user input to vector
    user_vector = vectorizer.transform(
        [user_input]
    )

    # Similarity calculation
    similarity = cosine_similarity(
        user_vector,
        vectors
    )

    # Maximum similarity score
    max_score = similarity.max()

    # No relevant recommendation
    if max_score < 0.1:

        return jsonify({
            "recommendations": [
                "No relevant recommendation found"
            ]
        })

    recommendations = []

    # Similarity scores with indexes
    similar_scores = list(
        enumerate(similarity[0])
    )

    # Sort by highest similarity
    sorted_scores = sorted(
        similar_scores,
        key=lambda x: x[1],
        reverse=True
    )

    # Filter relevant recommendations
    for item in sorted_scores:

        index = item[0]

        score = item[1]

        if score > 0.55:

            recommendations.append(
                data.iloc[index]["course"]
            )

        if len(recommendations) == 3:

            break

    return jsonify({
        "recommendations":
        recommendations
    })

@app.route(
    "/chat",
    methods=["POST"]
)

def chat():

    data = request.get_json()

    message = data[
        "message"
    ].lower()

    response = ""

    if "ai" in message:

        response = (
            "AI is a great career choice. "
            "Start with Python and "
            "Machine Learning."
        )

    elif "job" in message:

        response = (
            "Focus on skill development, "
            "resume building, and "
            "internships."
        )

    elif "design" in message:

        response = (
            "UI UX and Graphic Design "
            "are great creative "
            "career options."
        )

    elif "health" in message:

        response = (
            "Healthcare careers are growing "
            "rapidly with opportunities in "
            "nursing analytics and healthcare technology."
        )

    else:

        response = (
            "Keep learning consistently. "
            "You can build a successful "
            "career."
        )

    return jsonify({
        "reply": response
    })

if __name__ == "__main__":

    app.run(port=5001)