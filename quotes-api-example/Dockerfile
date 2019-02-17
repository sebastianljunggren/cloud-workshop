FROM gradle:5.2-jdk11-slim as build

RUN mkdir /home/gradle/quotes-api-example
WORKDIR /home/gradle/quotes-api-example
COPY *.gradle ./
COPY src src
RUN gradle build

FROM openjdk:11-jre-slim

RUN adduser --system --no-create-home quotes-api-example
RUN mkdir /var/quotes-api-example
COPY --from=build  /home/gradle/quotes-api-example/build/libs/quotes-api-example.jar /var/quotes-api-example
RUN chown quotes-api-example /var/quotes-api-example/quotes-api-example.jar
RUN chmod 500 /var/quotes-api-example/quotes-api-example.jar
USER quotes-api-example
CMD /var/quotes-api-example/quotes-api-example.jar