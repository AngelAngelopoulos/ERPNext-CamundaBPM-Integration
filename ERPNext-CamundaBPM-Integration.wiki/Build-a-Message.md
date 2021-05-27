The messages work in such a way that they can wait for the response to the different variables that a worker needs, these are represented in Camunda Modeler as 'Message Intermediate Catch Event' and connect one activity with another or with some condition.

## Syntaxis


```
 const mess = await zbc.publishMessage({
        correlationKey: workflow_id,
        messageId: uuid.v4(),
        name: 'Message_CheckDelivery',
        variables: { delivery: delivery ,valueToAddToWorkflowVariables: 'here', status: 'PROCESSED' },
        timeToLive: zb.Duration.seconds.of(1), // seconds
      });
```

Note: These messages are included in the handler.js of their respective previous activity.