# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.9

WORKDIR /usr/src/app


# Install pip requirements
RUN python -m pip install --upgrade pip

COPY ./req.txt .
RUN pip install -r req.txt

COPY . .

RUN mkdir -p /home/app

RUN groupadd app
RUN useradd -m -g app app -p dfqw12fewefwq
RUN usermod -aG app app

ENV HOME=/home/app
ENV APP_HOME=/home/app/back

RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/static
RUN mkdir -m=777 $APP_HOME/media
WORKDIR $APP_HOME

COPY . $APP_HOME

