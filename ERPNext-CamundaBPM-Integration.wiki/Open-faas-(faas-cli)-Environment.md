Note: The complete documentation can be consulted on its official [website](https://docs.openfaas.com/cli/install/).

## Linux or macOS
### Utility script with curl:
```
$ curl -sSL https://cli.openfaas.com | sudo -E sh
```
The flag -E allows for any http_proxy environmental variables to be passed through to the installation bash script.

Non-root with curl downloads the binary into your current directory and will then print installation instructions:
```
$ curl -sSL https://cli.openfaas.com | sh
```

### Via brew:
```
$ brew install faas-cli
```
Note: The brew release may not run the latest minor release but is updated regularly.

## Windows
### In PowerShell:
```
$version = (Invoke-WebRequest "https://api.github.com/repos/openfaas/faas-cli/releases/latest" | ConvertFrom-Json)[0].tag_name
(New-Object System.Net.WebClient).DownloadFile("https://github.com/openfaas/faas-cli/releases/download/$version/faas-cli.exe", "faas-cli.exe")
```
In case the above command does not work properly to install the faas-cli on Windows go to [Releases](https://github.com/openfaas/faas-cli/releases) and download the latest faas-cli.exe.

Important: The faas-cli.exe file must be located in the folder where the function will be created.

For more information about faas-cli you can consult the following [site](https://github.com/openfaas/faas-cli).

### Docker Hub
To use the OpenFaas functions it is necessary to have an account in Docker Hub which is quite essential to create on the [site](https://hub.docker.com/).
The docker hub is where the images of the functions will be stored. 
Username and password will be used later.

![image](https://user-images.githubusercontent.com/49212229/116169536-803cb980-a6ca-11eb-86f4-1ae93cdb4d58.png)

### Docker desktop configuration

* Through the Docker dashboard (What is included when Docker is installed on the computer) you will have to log in with the same account that you are using in Docker Hub.

![image](https://user-images.githubusercontent.com/49212229/116176433-bfbdd280-a6d7-11eb-8d55-8e2649b70342.png)


* In the settings tab go to the Docker Engine section and change the buildkit to false. Then apply and restart.

![image](https://user-images.githubusercontent.com/49212229/116177335-3c9d7c00-a6d9-11eb-9336-6aa5c6f1b024.png)

### Login to Docker Hub account from console
Login to the Docker Hub account from the terminal is also necessary. This is done with the following command:
```
docker login -u username -p password
```

### Install OpenFaas via Kubernetes

There are several ways to install OpenFaas but the simplest is through Kuernetes which can be provided through various platforms, in this case we will explain how to implement it through the Civo platform, but there are other ways and other platforms.

* First you have to go to the [site](https://www.civo.com/) and create an account and wait for the access request to be accepted.
* Once inside the dashboard you have to go to the Kubernetes section and click on "Create new cluster".
![image](https://user-images.githubusercontent.com/49212229/116307514-08bf6680-a76c-11eb-8a33-93153782ed6d.png)

* The following screen will appear here the cluster is configured. You choose a name, the number of instances and the network. The size is also chosen (according to the needs) and the OpenFaas image is chosen.

![image](https://user-images.githubusercontent.com/49212229/116308549-3c4ec080-a76d-11eb-9252-40efa2804f2a.png)
![image](https://user-images.githubusercontent.com/49212229/116308689-715b1300-a76d-11eb-9402-aca2d0f5341c.png)
![image](https://user-images.githubusercontent.com/49212229/116308805-95b6ef80-a76d-11eb-99a4-760d370a26fe.png)
![image](https://user-images.githubusercontent.com/49212229/116308921-bc752600-a76d-11eb-9248-8f4cc3a632a1.png)

* You can see how the cluster has been created.

![image](https://user-images.githubusercontent.com/49212229/116309372-4b823e00-a76e-11eb-9dad-9ee8d6cf7886.png)

* If it is displayed you can see your information and if you go to the installed applications tab you can see OpenFaas

![image](https://user-images.githubusercontent.com/49212229/116314774-2a711b80-a775-11eb-82a4-82cb26a0309d.png)
![image](https://user-images.githubusercontent.com/49212229/116315047-981d4780-a775-11eb-809a-8a9eceefef26.png)


* If it is displayed you can see certain information that will be used to access the OpenFaas dashboard such as the gateway password and the port number.

![image](https://user-images.githubusercontent.com/49212229/116314271-80918f00-a774-11eb-85b6-9c1fd99c2d55.png)

* To access the dashboard you have to go to API endpoint found in the information section and change the last numbers to the OpenFaas port number. Something like the following will appear, it is only a matter of placing the gateway password (the user is admin by default).

![image](https://user-images.githubusercontent.com/49212229/116315904-d1a28280-a776-11eb-92c1-73c4f37effbe.png)

* Finally OpenFaas will be configured

![image](https://user-images.githubusercontent.com/49212229/116316324-63aa8b00-a777-11eb-816a-30e30158b754.png)
