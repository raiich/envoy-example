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
JWT_TOKEN=$(curl -XPOST -H 'Content-Type: application/json' -d '{"aud":"books.read","exp":2345678901,"iss":"my.issuer.local","sub":"bob"}' http://localhost:8080)
echo ${JWT_TOKEN}
curl -i http://localhost:10000 -H "Authorization: Bearer ${JWT_TOKEN}"
```

### Without Permission

```bash
# sub = "ng bob", including `ng` 
JWT_TOKEN=$(curl -XPOST -H 'Content-Type: application/json' -d '{"aud":"books.read","exp":2345678901,"iss":"my.issuer.local","sub":"ng bob"}' http://localhost:8080)
echo ${JWT_TOKEN}
curl -i http://localhost:10000 -H "Authorization: Bearer ${JWT_TOKEN}"
```

### 1 liner

```bash
curl -i http://localhost:10000 -H "Authorization: Bearer $(curl -XPOST -H 'Content-Type: application/json' -d '{"aud":"books.read","exp":2345678901,"iss":"my.issuer.local","sub":"ng bob"}' http://localhost:8080)"
```
