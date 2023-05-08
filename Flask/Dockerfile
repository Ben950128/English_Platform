FROM python:3.10.10-slim

RUN apt-get update 

RUN apt-get install -y libpq-dev gcc

COPY . /app

WORKDIR /app

RUN pip install -r /app/requirements.txt

ENV TZ="Asia/Taipei"