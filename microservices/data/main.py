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

@app.get("/titles")
def titles():
    cols = [
        "specialization",
        "discipline",
        "degree",
        "level",
        "institute",
    ]
    return {col: get_distinct_col(col) for col in cols}