# First Gitlab pipeline

Gitlab pipeline scripts are written and stored in **.gitlab-ci.yaml** file and kept in root of the project repository

```
stages:
  - build
  - test

compiling-java-code:
  stage: build
  script:
    - echo "Running in compiling-java-code job"

compiling-python-code:
  stage: build
  script:
    - echo "Running in compiling-python-code job"

testing-code:
  stage: test
  script:
    - echo "Running in testing-code job"
```

* `stages` section is a collection of stage in a sequential order. `stages` section is just used to define the order for stage
* Each stage can have one or more jobs.
* Multiple jobs in a stage can run in parallel, here the **build** stage contains two jobs **compiling-java-code** and **compiling-python-code**, which can run in parallel
* Once all the jobs in **build** stage gets successeded, it will execute the next stage **test** which contains a job **testing-code**

### Reference:
* [Hello world Gitlab project](https://gitlab.com/vigneshsweekaran/hello-world/-/tree/first-pipeline)
