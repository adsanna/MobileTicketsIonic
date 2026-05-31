# MobileTicketsIonic
Projeto tickets mobile - Anna Beatriz Barros de Andrade (01849891)

Sistema de controle de atendimento por senhas desenvolvido com Ionic + Angular (NgModules) + Capacitor no frontend e Node.js + MySQL no backend.

---

## Sobre o Projeto

Este projeto funciona como um sistema de atendimento em filas. O foco principal é a organização do fluxo operacional por meio da geração, triagem e chamada de senhas, respeitando diferentes níveis de prioridade de acordo com a categoria do serviço.

---

## Objetivo

Desenvolver um aplicativo capaz de realizar a emissão automatizada de senhas, organizar as filas por ordem de relevância, permitir que o atendente realize a chamada seguindo a lógica de prioridades e registrar todos os dados para fins de monitoramento.

---

## Telas do projeto

### Tab 1 - Totem de Senhas

![Totem](screenshots/tab1.png)

### Tab 2 - Painel do Atendente

![Atendente](screenshots/tab2.png)

### Tab 3 - Sobre o Sistema

![Sobre](screenshots/tab3.png)

---

## Funcionamento do Sistema

O sistema divide as responsabilidades entre três perfis de atuação:

O Agente de Sistema é o responsável pela geração das senhas e pelo controle lógico da integridade da fila.

O Agente Atendente realiza a chamada da próxima senha e confirma o atendimento no guichê correspondente.

O Agente Cliente é o usuário final, que solicita a senha de acordo com sua necessidade e aguarda a convocação pelo painel.

---

## Regras de Atendimento

A lógica de chamada prioriza o atendimento da seguinte forma: primeiramente as senhas do tipo SP, que representam o atendimento prioritário por lei. Em seguida, são chamadas as senhas do tipo SE, voltadas para exames e laboratório. Por fim, o sistema libera as senhas do tipo SG, referentes ao atendimento geral por ordem de chegada.

---

## Tecnologias utilizadas

- Ionic Framework
- Angular com NgModules
- Capacitor
- Node.js + Express
- MySQL 8.0

---

## Estrutura de Dados

O armazenamento utiliza o MySQL 8.0, estruturado em três tabelas principais. A tabela de senhas armazena os registros gerados e seu status atual. A tabela de guiches identifica os pontos de atendimento ativos. A tabela de atendimentos é responsavel por vincular a senha ao guiche, registrando o historico da operacao.

---

## Como rodar

1. Clone o repositório:

```bash
git clone https://github.com/adsanna/MobileTicketsIonic.git
cd MobileTicketsIonic
```

2. Instale as dependências e rode o frontend:

```bash
npm install
ionic serve
```

3. Para o backend, em outro terminal:

```bash
cd backend
npm install
node server.js
```

---

## Licença
MIT License - Anna Beatriz Barros de Andrade
