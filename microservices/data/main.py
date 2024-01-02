from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from db import get_distinct_col, search

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def index():
    print("Application is All Set")
    return "Application is Good"

# ====> ENDPOINT FOR COURSE SEARCH

@app.get('/search')
def get_search(query: str = Query(default='', title='Query')):
    return search(query)

# ====> ENDPOINT FOR DISTINCT COLUMNS

@app.get("/specialization")
def specialization():
    return get_distinct_col("specialization")

@app.get("/discipline")
def discipline():
    return get_distinct_col("discipline")

@app.get("/degree")
def degree():
    return get_distinct_col("degree")

@app.get("/level")
def level():
    return get_distinct_col("level")

@app.get("/institute")
def institute():
    return get_distinct_col("institute")
