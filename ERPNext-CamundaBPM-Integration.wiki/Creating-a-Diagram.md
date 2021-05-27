## BPMN Symbols

As we see before, we need to design our processes as BPMN diagrams to automate them with **Zeebe**. We use the **BPMN 2.0** for this purpose but **not all these symbols are available for Zeebe**, then we are limited to the Zeebe modeler symbols (or other symbols for modelers compatible with Zeebe). That doesn’t mean that we cannot design many different processes with this tool.  

**Some available symbols in Zeebe are:**

| Symbol      | Description |
| :---        |    :----   |
| ![BPMN_symbol_example_flow](https://user-images.githubusercontent.com/46906329/116132687-6fbd1c80-a693-11eb-8420-568d742068fa.JPG) | **Flow sequence representation:** Arrows that indicate the direction that follows the flow between activities and events. |
| ![BPMN_symbol_example_pool](https://user-images.githubusercontent.com/46906329/116132691-7055b300-a693-11eb-8b1b-acd56f3800e5.jpg) | **Pools and Lanes:** Allow indicate different processes and stakeholders or users involved.  
| ![BPMN_symbol_example_tasks](https://user-images.githubusercontent.com/46906329/116132693-7055b300-a693-11eb-9f27-db062c598fba.jpg) | **Tasks:** Represent activities that must be realized. There are many types of them.
| ![BPMN_symbol_example_gateways_v2](https://user-images.githubusercontent.com/46906329/116132688-7055b300-a693-11eb-9ead-500316aa2f8d.jpg) | **Gateways:**  We can bifurcate the flow sequence using logic gateways (like XOR, OR, AND) or by specific events.
| ![BPMN_symbol_example_events](https://user-images.githubusercontent.com/46906329/116132684-6f248600-a693-11eb-9569-94c39f6c3c4c.JPG) | **Events:** They allow many interactions in the flow sequence like start, end, interrupt, continue, wait (events or specific time), send or receive (messages or signals), conditionate or parallelize the flow in the process.

[More information](https://camunda.com/bpmn/reference/) and other available symbols for BPMN 2.0.


## Diagrams with Zeebe Modeler
For create our BPMN diagram we use Zeebe Modeler desktop application. All the created diagrams are stored as XML files and we can export them in the application as images (PNG, JPG, SVM) to illustrate the necessary documentation.
Create a new BPMN diagram.  

We see a screen with a start event like this:

![zeebe_creating_diagram_newDiagram](https://user-images.githubusercontent.com/46906329/116132698-70ee4980-a693-11eb-95d5-91f7cfa1b500.JPG)

We have some symbols at the left that we can use to represent our process activities and sequence flow.

Now we add the necessary elements from the menu and add the flow arrows manually.  

In another case we can click and select the start event and a little menu appears from the symbol with options for change, erase, comment, configure or concatenate other symbols.

![zeebe_creating_diagram_iconMenu](https://user-images.githubusercontent.com/46906329/116132697-70ee4980-a693-11eb-823e-8a113c247e1a.JPG)

## Diagram tutorial 
You can follow the [tutorial to learn how to create process diagrams](https://stage.docs.zeebe.io/getting-started/create-a-workflow.html).

## Get BPMN diagram for examples
You can download the BPMN file available for the next [diagram example](https://github.com/AngelAngelopoulos/ERP-BPM-integration/blob/main/Diagrama_Envios.bpmn). We work next steps based on this one.

![BPMN_diagram_envios](https://user-images.githubusercontent.com/46906329/117064499-e4273980-aceb-11eb-8059-c4c362197347.jpeg)

More information about [BPMN diagrams on Zeebe](https://stage.docs.zeebe.io/bpmn-workflows/index.html).
