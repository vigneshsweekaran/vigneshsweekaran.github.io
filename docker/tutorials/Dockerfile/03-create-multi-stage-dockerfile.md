# How to create multi stage Dockerfile

Sometimes the scenario may arise like we have to do build the code as part of dockerfile itself in this case the final docker image will be very huge since the source code and dependecies are included in the final docker image.

Using the multi stage Dockerfile we can define two stages, one for building code and one for creatig final docker image. Once the code is built in firts stage now we can copy only the compiled code and add it in our second stage. This will make our final docker image light weight. Note the docker image is created only for the last stage, previous stages in dockerfile are not taken.

### 2 stage Dockerfile
To test this feature, I have a sample application code which is developed using Angular JS, we have to clone the repo first.
```
git clone https://github.com/vigneshsweekaran/easyclaim-frontend.git
```



