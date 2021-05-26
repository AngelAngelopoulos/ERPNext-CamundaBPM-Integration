'use strict'
const zb = require("zeebe-node");
const uuid = require("uuid");


module.exports = async function(context, req) {
  const result = {
    'body': JSON.stringify(req.body),
    'content-type': req.headers["content-type"]
  }

  const method = req.method;
  //const orderid;
  const { data, zeebe_credentials } = req.body
  /**
   * Only POST requests
   */
  switch (method) {
    case 'POST':

      const zbc = new zb.ZBClient(zeebe_credentials, { loglevel: 'INFO' });
      

      // DECLARATION OF ANY PROCESS:
      zbc.createWorker('order-activity', async (job, complete) => {
        const { key, variables } = job;
        console.info(`* Starting Order...: ${variables}`);
        
        //const stock = 100; //Aqui se revisa el stock con una request
        complete.success({variables: variables});
        console.info(`* Passing to next task: ${variables}`);
      });

      
      zbc.createWorker('on-warehouse-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Order On Warehouse...: ${variables}`);
        complete.success({variables: variables});
        console.info(`* Passing to next task: ${variables}`);
      });

      

      zbc.createWorker('arrive-activity', async (job, complete) => {
        const { key, variables } = job;
        console.info(`* Arriving Order...: ${variables}`);
        complete.success({variables: variables});
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('delivery-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Delivering Order...: ${variables}`);
        complete.success({variables: variables });
        console.info(`* Passing to next task: ${variables}`);
      });

      
      zbc.createWorker('process-pay-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Process pay order...: ${variables}`);
        complete.success({variables: variables });
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('receive-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Receiving Order...: ${variables}`);
        complete.success({variables: variables});
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('send-alert-admin-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Sending Alert to Admin ...: ${variables}`);
        complete.success({variables: variables });
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('send-alert-client-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Sending Alert to Client ...: ${variables}`);
        complete.success({variables: variables});
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('cancel-order-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Canceling Order ...: ${variables}`);
        complete.success({variables: variables });
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('send-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Sending Package ...: ${variables}`);
        complete.success({variables: variables});
        console.info(`* Passing to next task: ${variables}`);
      });

      zbc.createWorker('on-ship-activity', async (job, complete) => { 
        const { key, variables } = job;
        console.info(`* Shipping Package ...: ${variables}`);
        complete.success({variables: variables });
        console.info(`* Passing to next task: ${variables}`);
      });


      //const newsbc = createWorkers(zbc);
      data.orderid = uuid.v4()
      const wfi = await zbc.createWorkflowInstance("process-orders", data);
      //wfi.orderid = orderid;
      return {status: 200,
          body : { res: data , wfi },
      headers: {
        'Content-Type': 'application/json'
    }};
    default:
      return { res: false };
  }
}
