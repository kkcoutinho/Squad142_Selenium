```markdown
# Projeto de Automação de Testes - Squad142

Automação de testes utilizando **Selenium WebDriver** com estrutura **Data-Driven**.

Este projeto realiza testes de login na plataforma educacional **LearnWorlds**, acessível em:  
🔗 [https://iterasys.learnworlds.com](https://iterasys.learnworlds.com)

---

## Contexto

Este repositório faz parte da **Sprint 3** da **Squad142**, promovida pela **Iterasys**.
O projeto aplica boas práticas de automação com foco em:

- Reutilização e escalabilidade dos testes  
- Separação clara entre lógica de automação e massa de dados  
- Validação precisa de mensagens exibidas pelo sistema  
- Segurança reforçada com uso de **variáveis de ambiente** para proteger credenciais sensíveis (`SENHA_142`)

---

## Tecnologias Utilizadas

- **Selenium WebDriver**  
- **JavaScript (Node.js)**  
- **Mocha** como framework de testes  
- **Firefox** como navegador de execução

---

## Segurança

A senha do usuário principal **não está presente no código-fonte**. Ela é protegida via variável de ambiente,
que deve ser configurada localmente:

```bash
setx SENHA_142 "sua_senha_aqui"
```

## Como Executar os Testes

```bash
npx mocha
```

---

## Estrutura do Projeto

```
/fixtures
  └── loginData.json
/tests
  └── login.spec.js
```

---

## Execução do Teste

Assista ao vídeo com a automação rodando:  
🔗 [Execução do teste - Sprint 3](https://1drv.ms/v/c/f9b6ddc2788df047/EYfH_iuGFDlMgI3x0VgnI78BWADQcFhN_4wMSFf_JxEKTw?e=U3xXSR)

---
```





