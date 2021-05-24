# whoopsmonitor-check-mongo-connect

Check if the connection to mongo is fine.

## Environmental variables

-   `WM_CONNECTION_STRING` - Mongo connection string

## Example

There is an example of the check at Whoops Monitor configuration tab or the `.env` file.

```yaml
WM_CONNECTION_STRING=mongodb://user:password@host/collection
```

## Output

-   Exit code `0` - Connection is ok.
-   Exit code `2` - Some error appeared.

## Build

```sh
docker build -t whoopsmonitor-check-mongo-connect .
```

## Run

```bash
docker run --rm --env-file .env whoopsmonitor-check-mongo-connect
```
