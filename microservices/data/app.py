from flask import Flask, request
# from db import get_distinct_col, search

app = Flask(__name__)

@app.route('/')
def index():
   print("Application is All Set")
   return "Application is All Set"

# # ====> ENDPOINT FOR COURSE SEARCH

# @app.route('/search')
# def get_search():
# 	query = request.args.get('query', default='')  # Get the 'query' parameter from the request
# 	return search(query)

# # ====> ENDPOINT FOR DISTINCT COLUMNS

# @app.route("/specialization")
# def specialization():
# 	return get_distinct_col("specialization")

# @app.route("/discipline")
# def discipline():
# 	return get_distinct_col("discipline")

# @app.route("/degree")
# def degree():
# 	return get_distinct_col("degree")

# @app.route("/level")
# def level():
# 	return get_distinct_col("level")

# @app.route("/institute")
# def institute():
# 	return get_distinct_col("institute")

if __name__ == "__main__":
   app.run()