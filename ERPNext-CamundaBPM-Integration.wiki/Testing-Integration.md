## Integration example

Code for the integration of ERP and BPM for the process of sending a package as a demonstration.
The buttons will be generated in the same ERP for the demonstration of the call to the functions
 that will execute a step in the process, but this is only as a test.

The buttons will appear in the DocType where you have written the script.

```javascript
frappe.ui.form.on("Sales Order", {
  refresh: function(frm) {
    //Global variables declaration
   //workflow id field
    var workflow_id = cur_frm.doc.workflow_id;
    //function name field
    var func_name = cur_frm.doc.function_name; 

      //host address
      const host = 'https://de8450f552e9.ngrok.io'//
      
    function getDocObj(doctypeStr, docnameStr, res) {
        frappe.call({
            method: "frappe.client.get",
            args: {
                doctype: doctypeStr,
                name: docnameStr
            },
            callback(r) {
                if (r.message) {
                    res(r.message);
                }
            }
        });
    }
    /*This function is to receive the name of the script, the name of the function to be executed 
and the route.It will be called every time a function is executed*/ 
    var handlerFunction = function(scriptname, func_name, route = '/bpm/task/envio') {
        var data = cur_frm.doc;
        var socket = io.connect(host);
      //Message creation
      var msg = {
        route: route,
        data: data
      };
      //Connection to the socket and sending the message
      alert("Before_emit "+JSON.stringify(msg));
      socket.emit(route, msg);
      socket.on(route, function(msg) {
        socket.disconnect(true);
        if (msg.error) {}
        
        //Depending on the name of the function, it will be the case that it is executed
        switch (func_name) 
        {
            //The function that will start the process is called (which will create the BPM diagram)
            case "start-process":
                cur_frm.set_value('function_name', func_name).then(() => {
                    frm.save().then(() => {
                        alert(`Function ${func_name} executed`)
                    })
                })
                cur_frm.set_value('workflow_id', msg).then(() => {
                    // submit form
                    frm.save().then(() => {
                        alert("segundo alert " + JSON.stringify(msg));
                    })
                })
                break;
            //Generic case for consequent functions
            default:
                cur_frm.set_value('function_name', func_name).then(() => {
                        frm.save().then(() => {
                            alert(`Function ${func_name} executed`)
                        })
                    })
                break;
        }
        alert(msg);
    });
        
    }
    
    var isNotDefined = function(variable) 
    {
        return (!variable || typeof variable === 'undefined' || variable === '');
    };

    /*The following ifs will indicate when the call to the handlerFunction should be made and that
 is where the parameters will be placed.
 As you can see, the only one that differs is the first, since in this it is the only one in which
 workflow_id and func_name are not defined.*/
    if (isNotDefined(workflow_id) && isNotDefined(func_name)) {
        frm.add_custom_button(__("START BPM Process"), function () {
            handlerFunction("", "start-process")
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "start-process") {
        frm.add_custom_button(__("CHECK STOCK"), function () {
            handlerFunction("", "check-stock", '/bpm/message/check-stock');
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "check-stock") {
        frm.add_custom_button(__("PROCESS PAY"), function () {
            handlerFunction("", "process-pay");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "process-pay") {
        frm.add_custom_button(__("CHECK PAYMENT"), function () {
            handlerFunction("", "check-payment");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "check-payment") {
        frm.add_custom_button(__("SHIP ORDER"), function () {
            handlerFunction("", "ship-order");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "ship-order") {
        frm.add_custom_button(__("ARRIVE ORDER"), function () {
            handlerFunction("", "arrive-order");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "arrive-order") {
        frm.add_custom_button(__("DELIVER ORDER"), function () {
            handlerFunction("", "deliver-order");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "deliver-order") {
        frm.add_custom_button(__("CHECK DELIVERY"), function () {
            handlerFunction("", "check-delivery");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "check-delivery") {
        frm.add_custom_button(__("CHECK RECEIVE"), function () {
            handlerFunction("", "check-receive");
        }).addClass("btn-success");
    }
    
    if (workflow_id && func_name === "check-receive") {
        frm.add_custom_button(__("CHECK RECEIVE"), function () {
            handlerFunction("", "terminated");
        }).addClass("btn-success");
    }
  }
});
```