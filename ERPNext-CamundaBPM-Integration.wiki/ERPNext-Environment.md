# Simple way (in the cloud)

The easiest way to use ERPNext is through the cloud.

As a first step you have to go to the following [site](https://frappecloud.com/signup?via=).

You will have to create an account and then it will ask you to enter all your information related to your company, so you must follow the steps indicated there.

![image](https://user-images.githubusercontent.com/49212229/116193781-8005e380-a6f5-11eb-9b19-c33acd3d681a.png)

After filling in all the fields, a dashboard like the one below will appear where you can directly work with ERPNext.
Remember that the cloud service has a cost, please verify it according to your needs.

# Another way

The other way to use ERPNext is locally, this way is more complicated, in the same way the steps that must be followed are left but if more information is required or if any problem arises, links to the complete documentation will be provided.

## Cloning the repository and preliminary steps

```
git clone https://github.com/frappe/frappe_docker.git
cd frappe_docker
```

The following installation is for single bench if you want to consult other forms of installation consult the [documentation](https://github.com/frappe/frappe_docker).

## Single bench

This setup starts traefik service as part of single docker-compose project. It is quick to get started locally or on production for a single server with single deployment.

This is not suitable when multiple services are installed on cluster with shared proxy/router, database, cache etc.

Make sure you've cloned this repository and switch to the directory before executing following commands.

### Setup Environment Variables

Copy the example docker environment file to `.env`:

For local setup
```
cp env-local .env
```
If you want to see what this file contains, consult the [documentation](https://github.com/frappe/frappe_docker/blob/develop/docs/single-bench.md).

### Start containers

Execute the following command:

```
docker-compose --project-name <project-name> up -d
```
Make sure to replace `<project-name>` with the desired name you wish to set for the project.

Notes:

* If it is the first time running and site is being initialized, it can take multiple minutes for the site to be up. Monitor `site-creator` container logs to check progress. Use command `docker logs <project-name>_site-creator_1 -f`
* After the site is ready the username is `Administrator` and the password is `$ADMIN_PASSWORD`
* The local deployment is for testing and REST API development purpose only
* A complete development environment is available [here](https://github.com/frappe/frappe_docker/tree/develop/development).

### Updating and Migrating Sites

Switch to the root of the `frappe_docker` directory before running the following commands:
```
# Update environment variables ERPNEXT_VERSION and FRAPPE_VERSION
nano .env

# Pull new images
docker-compose pull

# Restart containers
docker-compose --project-name <project-name> up -d
```
