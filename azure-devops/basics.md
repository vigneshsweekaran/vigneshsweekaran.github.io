# Azure DevOps

### To define azure agent pool in pipeline yaml file
pool: MyPool

### To trigger a azure pipeline using rest api using curl
**To Trigger a build**
curl -d '{"definition":{"id":"1"}}' -H "Content-type: application/json" -X POST -u vigneshsweekaran:AZP_TOKEN https://dev.azure.com/vigneshsweekaran/test/_apis/pipelines/2/runs?api-version=6.0-preview.1

username --> can be anything

pipelineid --> For each pipeline created in azure devops organization one unique id will be assigned and it will be a number (eg: 2)

** To Get the pipeline details**
curl -X GET -u vigneshsweekaran:AZP_TOKEN https://dev.azure.com/vigneshsweekaran/test/_apis/pipelines/2/runs/76?api-version=6.0-preview.1

username --> can be anything

pipelineid --> For each pipeline created in azure devops organization one unique id will be assigned and it will be a number (eg: 2)

runid/buildid --> For each run, one unquie id will be generated across organization (eg: 70)

