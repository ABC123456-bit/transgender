import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

data = pd.read_csv("datasets/courses.csv")

vectorizer = TfidfVectorizer()

vectors = vectorizer.fit_transform(data["course"])

user_interest = input("Enter Your Interest: ")

user_vector = vectorizer.transform([user_interest])

similarity = cosine_similarity(user_vector, vectors)

similar_indexes = similarity.argsort()[0][-3:]

print("\nRecommended Courses:\n")

for index in similar_indexes:
    print(data.iloc[index]["course"])