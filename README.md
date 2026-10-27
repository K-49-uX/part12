# Full Stack Open Containers exercises

The full-stack Todo application used for Exercise 22 is in [`my-app`](./my-app). Its original app repository is [K-49-uX/part12](https://github.com/K-49-uX/part12/tree/main/todo-app).

## Development environment

From the `my-app` directory, run:

```sh
docker compose -f docker-compose.dev.yml up --build
```

Open <http://localhost:8080>. Source changes in `frontend` and `backend` are mounted into their containers; Nginx sends `/api` requests to the backend.

## Production environment

From `my-app`, build and start the production stack with:

```sh
docker compose up --build -d
```

Open <http://localhost:8080>. Nginx is the only service published to the host; MongoDB and Redis data are stored in named volumes.
