FROM python:3.10.10-slim

RUN apt-get update

RUN apt-get -y install libpq-dev gcc

RUN apt-get update

COPY ./requirements.txt /

RUN pip install -r /requirements.txt

ENV TZ="Asia/Taipei"