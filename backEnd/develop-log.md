<!-- 使用工具及其版本 -->
Python 3.9.5
Flask 2.0.3
Werkzeug 2.0.3
psycopg2               2.9.3
psycopg2-binary        2.9.3


<!-- 创建数据库 -->
postgres=# `CREATE DATABASE stock_db;`
CREATE DATABASE

<!-- 创建用户 -->
postgres=# `CREATE USER stock WITH PASSWORD 'stock@db';`
CREATE ROLE

<!-- 给用户数据库授权 -->
postgres=# `GRANT ALL PRIVILEGES ON DATABASE stock_db TO stock;`
GRANT