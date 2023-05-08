FROM python:3.10.10-slim

RUN apt-get update 

RUN apt-get install -y libpq-dev gcc

COPY ./requirements.txt /

RUN pip install -r /requirements.txt

ENV TZ="Asia/Taipei"