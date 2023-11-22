FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install -y java-21-amazon-corretto-jdk

COPY . .

RUN apt-get install maven -y
RUN mvn clean install

FROM amazoncorretto:21
VOLUME /tmp
COPY --from=build /target/react-quiz-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
