## Run Locally

Go to the project directory

```bash
  cd `./project_name`
```

Install dependencies

```bash
  yarn install
```

Run docker

```bash
  docker compose up -d
```

Copy environment variables file using example file and fill required values

```bash
CP `.env.example .env`
```

Run Migrations

```bash
 yarn migration
```

Project start

```bash
  start: yarn start
  dev: yarn dev
```


Create migration

```bash
 yarn migration:generate ./src/migrations/{migrationName}
```

Revert last migration

```bash
 yarn migration:revert
```
