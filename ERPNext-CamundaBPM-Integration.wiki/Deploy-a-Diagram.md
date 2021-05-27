## Previous steps
At this step we must have:  
- Our **docker container with Zeebe** ([see](https://github.com/AngelAngelopoulos/ERP-BPM-integration/wiki/Zeebe-Environment)).
- [BPMN diagram to deploy](https://github.com/AngelAngelopoulos/ERP-BPM-integration/blob/main/order-process.bpmn) on it.

### Startup Zeebe from a docker container
First, we need to go to the route where we have our docker container for Zeebe.  
For example, if I clone the container on `C:\Docker Containers\Zeebe` I need go to:  

`cd C:\Docker Containers\Zeebe\zeebe-docker-compose`

Now we need to go to the operate folder  
`cd operate`

In this folder (zeebe-docker-compose\operate) we start the docker container in the foreground with the command:  
`docker-container up -d`

When it started we can access http://localhost:8080/ and we must see a screen like this:  
![Zeebe_operate](https://user-images.githubusercontent.com/46906329/116153539-1b269b00-a6ad-11eb-8a97-2dd0c5e2bb65.JPG)

The access credentials are:  
- **User**: *demo*
- **Password**: *demo*


*If we can stop the docker container we use `docker-container down` in the same directory that we start it*.

We can test the status of the broker using Zeebe CLI. First, we need back to `zeebe-docker-compose`, then use the command according to your platform.
- For Linux: `./bin/zbctl --insecure status`
- For macOS: `./bin/zbctl.darwin --insecure status`
- For Windows: `./bin/zbctl.exe --insecure status`

Then we have a response similar to: 
```
Cluster size: 1
Partitions count: 1
Replication factor: 1
Gateway version: 0.26.0
Brokers:
  Broker 0 - 172.18.0.3:26501
    Version: 0.26.0
    Partition 1 : Leader, Healthy
```

### Copy our BPMN diagrams
In the docker directory `zeebe-docker-compose` we have a folder called `bpmn` which contains some examples for BPMN to test on it. But we can use it to store our own BPMN diagrams (just for making short the path for them).

### Deploy our diagrams
When we need to deploy a diagram we can use the Zeebe's command-line interface (CLI) or Zeebe CLI as in previous steps. We just need the path of the diagram that we need to deploy, for example if we have our diagram in with a relative path `.\bpmn\order-process.bpmn` assuming that we are in `zeebe-docker-compose` then we can use the next command:  

- For Linux: `./bin/zbctl --insecure deploy .\bpmn\order-process.bpmn`
- For macOS: `./bin/zbctl.darwin --insecure deploy .\bpmn\order-process.bpmn`
- For Windows: `./bin/zbctl.exe --insecure deploy .\bpmn\order-process.bpmn`

**If there are no errors in deployed diagram** (in other way we need to modify the diagram file) then we have a response like:
```
{
  "key": 2251799813685792,
  "workflows": [
    {
      "bpmnProcessId": "order-process",
      "version": 1,
      "workflowKey": 2251799813685790,
      "resourceName": ".\\bpmn\\order-process.bpmn"
    }
  ]
}
```

Then we can see the "Camunda operate" window in the browser and it have to show the deployed diagram.  
![Zeebe_operate_order_deployed](https://user-images.githubusercontent.com/46906329/116153540-1bbf3180-a6ad-11eb-8ab6-b58747972f7a.JPG)
  



