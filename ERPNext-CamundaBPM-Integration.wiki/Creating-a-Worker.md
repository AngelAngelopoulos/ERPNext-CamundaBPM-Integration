Workers are the way in which different activities are done and are represented graphically in the Camunda Modeler diagram as a task or activity.

In order to create a worker from the code we will use the following form:

```
zbc.createWorker('arrive-activity', async (job, complete) => {
        const { key, variables } = job;
        console.info(`* Arriving Order...: ${variables}`);
        complete.success({variables: variables, orderid: orderid });
        console.info(`* Passing to next task: ${variables}`);
      });
```

Here we will define the name of the activity, as well as the variables that this activity may require in order to carry out the task.

Note: The activities only do what we order them, they do not wait for a variable to arrive at some point, the data already collected must be passed to them, in order to wait for responses to variables we will use the messages.