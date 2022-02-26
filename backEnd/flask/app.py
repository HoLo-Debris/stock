from flask import Flask
import tushare as ts
from flask import Flask
from flask import jsonify
import json

ts.set_token('0d7b7606603fb941f80ddf91df39dce2306cd80b5309156a5077050f')
pro = ts.pro_api()
df = pro.daily(ts_code='000001.SZ', start_date='20180701', end_date='20180718')

print(df)
#多个股票
df = pro.daily(ts_code='000001.SZ,600000.SH', start_date='20180701', end_date='20180718')
# print(jsonify(df))

app = Flask(__name__)

@app.route("/")
def hello_world():
    return jsonify(df)