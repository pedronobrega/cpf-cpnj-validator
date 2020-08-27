# cpf-cpnj-validator
API para validação de CPF e CNPJ

## CPF

Para validar o CPF basta mandar uma requisição do tipo `post` para:

```
http://localhost:3333/cpf/validate
```

com o payload:

```
{
  "cpf": "xxx.xxx.xxx-xx"
}
```

## CNPJ

Para validar o CNPJ basta mandar uma requisição do tipo `post` para:

```
http://localhost:3333/cnpj/validate
```

com o payload:

```
{
  "cnpj": "xx.xxx.xxx/xxxx-xx"
}
```
