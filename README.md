#### DOCKER - ARQUIVOS PARA A EXECUÇÃO DA API


#### 1 -  Instale ou tenha o Docker e o Docker Compose instalados em sua máquina.


2 - Em seu terminal, estando dentro do diretório raiz <mark>/minimizing-executables</mark>, execute os seguintes comandos:

2.1 - Para escalar a aplicação (API) usando Load Balancer

`docker-compose up --scale minimizing-api=2`

2.2 - Para escalar a aplicação (api) sem Load Balancer

`docker-compose up`

2.3 - Se optar por não ver os *logs* da aplicação:

`docker-compose up -d --scale minimizing-api=2` ou `docker-compose up -d`

#### 3 - LINK PARA EXECUTAR A APLICAÇÃO

[APP - Minimizing Waste](https://minimizing-waste.netlify.app)

#### 4 - Dados de acesso ao sistema

##### **email: silviobassi@email.com**
##### **senha: 123**

##### Link para o Código Fonte

[GitHub - silviobassi/minimizing-waste](https://github.com/silviobassi/minimizing-waste)
