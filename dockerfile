FROM nginx
MAINTAINER gexiaoxiao
ADD . /app
WORKDIR /app
CMD ./start.sh

