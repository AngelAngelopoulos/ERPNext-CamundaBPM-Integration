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
