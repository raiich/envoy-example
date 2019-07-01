# Envoy Example

## CORS

```bash
cd cors
docker-compose down ; docker-compose up --build
```

```bash
curl -i http://localhost:10000 -H "Authorization: Bearer $(curl -XPOST -H 'Content-Type: application/json' -d '{"aud":"books.read","exp":2345678901,"iss":"my.issuer.local","sub":"bob"}' http://localhost:8080)"
```


## Authentication/Authorization

```bash
cd auth-nz
docker-compose down ; docker-compose up --build
```

### With Permission

```bash
curl -i http://localhost:10000 -H "Authorization: Bearer $(curl -XPOST -H 'Content-Type: application/json' -d '{"aud":"books.read","678901,"iss":"my.issuer.local","sub":"bob"}' http://localhost:8080)"
```

### Without Permission

```bash
# sub = "ng bob", including `ng` 
curl -i http://localhost:10000 -H "Authorization: Bearer $(curl -XPOST -H 'Content-Type: application/json' -d '{"aud":"books.read678901,"iss":"my.issuer.local","sub":"ng bob"}' http://localhost:8080)"
```
