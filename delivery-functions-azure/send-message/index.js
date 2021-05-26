'use strict'
const zb = require("zeebe-node");
const uuid = require("uuid");


module.exports = async (context, req) => {
    const result = {
        'body': JSON.stringify(req.body),
        'content-type': req.headers["content-type"]
    }

    const method = req.method;
    const { data, zeebe_credentials } = req.body
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

            return {
                status: 200,
                body: { success: true, variables: data, result: res },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        default:
            return {
                status: 405,
                body: { succes: false },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
    }
}