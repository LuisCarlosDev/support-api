# App

Support SMGBit App

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o número de tickets feito pelo usuário;
- [] Deve ser possível criar tickets;
- [] Deve ser possível apagar um ticket;
- [] Deve ser possível listar todos os tickets;
- [] Deve ser possível buscar tickets pelo nome do sistema(ex..: enplace);
- [] Deve ser possível criar systems;
- [] Deve ser possível listar todos os systems cadastrados;
- [] Deve ser possível abrir um chat em tempo real;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com email duplicado;
- [] O usuário não deve poder criar um system com mesmo nome;
- [] Um ticket só pode ser deletado pelo administrador do sistema;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar  criptografados;
- [x] Os dados da aplicação precisa estar persistidos em um banco PostgreSQL;
- [] Todas listas  de dados precisam estar paginadas com 20 items por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);