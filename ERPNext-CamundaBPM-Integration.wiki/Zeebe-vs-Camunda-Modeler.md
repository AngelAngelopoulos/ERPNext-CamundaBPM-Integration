## BPMN | Business Process Model and Notation
In order to implement processes, we need to create a representation of the workflow. In this case exist the **BPMN** or **Business Process Model and Notation** a graphical notation that help us to represent business processes into a workflow.

There are many tools to model these diagrams or representations using BPMN diagrams some of them are related to a BPM platform to have an easy implementation (like Camunda) in these cases modelers allow configure some necessary options or parameters according to their platform.

## Zeebe
Zeebe is a BPMN workflow engine for microservices orchestration with horizontal scalability and high-performance use cases that powers [Camunda Cloud](https://camunda.com/products/cloud/workflow-engine/) platform. And their model processes can be represented using BPMN modelers like:

* [Cawemo](https://cawemo.com/) (online app powered by Camunda)
* [Camunda Cloud modeler](https://docs.camunda.io/docs/product-manuals/modeler/cloud-modeler/launch-cloud-modeler) (online app powered by Camunda)
* [Zeebe modeler](https://docs.camunda.io/docs/product-manuals/modeler/zeebe-modeler/install-the-zeebe-modeler/) (desktop app) 

Some of these BPMN tools are limited in the available symbols for BPMN 2.0 because not all of them are supported by Zeebe yet.

### Zeebe Modeler

For these examples we use [Zeebe Modeler](https://github.com/zeebe-io/zeebe-modeler) desktop application to create, develop and export diagrams for Zeebe. First, we download the [latest version](https://github.com/zeebe-io/zeebe-modeler/releases) available.  

The easiest way to do this is for all platforms is:

1. Select the latest version according to your platform and download.
2. Extract and execute the Zeebe Modeler application.

We can see other ways to download Zeebe Modeler for macOS and Windows [here](https://github.com/zeebe-io/zeebe-modeler).