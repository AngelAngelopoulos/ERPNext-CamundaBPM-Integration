'use strict'
const zb = require("zeebe-node");
const uuid = require("uuid");


module.exports = async (event, context) => {
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"]
  }

  const method = event.method;
  const { data, zeebe_credentials } = event.body
  /**
   * Only POST requests
   */
  switch (method) {
    case 'POST':

      const { message_name, workflow_id, variables } = data;

      const zbc = new zb.ZBClient(zeebe_credentials, { loglevel: 'INFO' });

      console.log(workflow_id)
      variables.status = 'PROCESSED'
      const res = await zbc.publishMessage({
        correlationKey: workflow_id,
        messageId: uuid.v4(),
        name: message_name,
        variables: variables,
        timeToLive: zb.Duration.seconds.of(1), // seconds
      });

      return context.succeed({ success: true, variables: data, result: res });
    default:
      return context.status(405).succeed({ succes: false });
  }


}
