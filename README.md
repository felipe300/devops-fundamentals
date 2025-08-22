# DevOps fundamentals - Jamstack

This application will use Docker multi-stage: `FROM` twice in the same `Dockerfile`.

Application to generate documentation with RUST, it also has a list of docker projects.

```sh
git clone --recursive <REPO_TO_CLONE>

docker build -t zola demo .
# OR
docker compose up
docker images

docker run -d -p 80:80 zola-demo:latest
docker logs -f <DOCKER_NAMES> # Only if you work in detach mode
docker stop <DOCKER_NAMES>

# CHECK the EXPORT PORT in dockerfile.dev 1111
docker compose build
docker compose watch

docker logs -f <DOCKER_NAMES>

# To make changes use --watch flag
docker compose --watch
```

### Testing with Cypress

Check the official Cypress page.

```sh
# create an npm file
npm init -y

# Install cypress
npm install -D cypress

# open cypress
npx cypress open
```
