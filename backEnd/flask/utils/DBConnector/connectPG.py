from fcntl import F_SEAL_SHRINK
import psycopg2
import configparser

# 1：postgreSQL
#   psycopg2的connect方法接受两种参数(下边参数中dbname和database没有差别)
#       (1)：一个连接字符串作为dsn参数,如: "dbname=stock_db host=127.0.0.1 port=5432 user=stock password=stock@db"
#       (2)：一系列的键值对参数,如: database="stock_db", host="127.0.0.1", port="5432", user="stock", password="stock@db"
#   使用第一种方法，从文件中读取并拼接字符串，直接传递给psycopg2.connect()函数即可，能够正常使用
#   使用第二种方法，将各个参数从文件中读取中来之后，逐个传递给connect的参数即可


class dbOperator:
    def __init__(self, filename, dbType):
        self.__filename = filename
        self.__dbType = dbType
        self.__conn = None

    # 从指定配置文件读取指定数据库的连接信息, 返回一个dsn字符串
    def getDsnParam(self):
        parser = configparser.ConfigParser()
        parser.read(self.__filename)
        _database = parser.get(self.__dbType, "database")
        _host = parser.get(self.__dbType, "host")
        _port = parser.get(self.__dbType, "port")
        _user = parser.get(self.__dbType, "user")
        _pwd= parser.get(self.__dbType, "password")
        connectInfo = 'dbname='+ _database + ' host=' + _host + ' port=' + _port + ' user=' + _user + ' password=' + _pwd
        return connectInfo

    # 从指定配置文件读取指定数据库的连接信息, psycopg2.connect函数需要的一些参数值
    def getKeyParams(self):
        parser = configparser.ConfigParser()
        parser.read(self.__filename)
        _database = parser.get(self.__dbType, "database")
        _host = parser.get(self.__dbType, "host")
        _port = parser.get(self.__dbType, "port")
        _user = parser.get(self.__dbType, "user")
        _pwd= parser.get(self.__dbTypee, "password")
        return _database, _host, _port, _user, _pwd

    # 连接数据库，返回一个与数据库的连接
    def connectDb(self):
        connectInfo = self.getDsnParam()

        print("Trying to connect the database with dsn parameter.")
        connectFlag = False
        try:
            self.__conn = psycopg2.connect(connectInfo)
            connectFlag = True
        except:
            connectFlag = False

        if(connectFlag):
            print("Connected to the", self.__dbType , "database successfully!")
        else:
            print("Connected to the", self.__dbType , "database through dsn parameter failed!")
            print("Trying to connect the database with keywords parameter.")
            try:
                _database, _host, _port, _user, _pwd = self.getKeyParams()
                self.__conn = psycopg2.connect(database=_database, host=_host, port=_port, user=_user, password=_pwd)
                connectFlag = True
            except:
                connectFlag = False

        if(connectFlag):
            print("Connected to the", self.__dbType , "database successfully!")
        else:
            print("Connected to the", self.__dbType , "database through keyword parameters failed!")
            print("Connect to the database failed...")
        return

