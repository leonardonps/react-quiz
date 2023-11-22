FROM amazoncorretto:21
VOLUME /tmp
COPY --from=build /target/react-quiz-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
