# Email Sender

Este projeto utiliza o **Node.js** e a biblioteca **Nodemailer** para enviar e-mails com anexos. Ele permite que você envie e-mails automatizados através de uma conta do Gmail, com suporte para múltiplos destinatários e anexos.

## Certifique-se de ter instalado:

- **Node.js**
- **Conta do Gmail** com a senha de app configurada

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/email-sender.git
   ```

2. Abra com a sua IDE

3. Instale as dependências:
   ```bash
    npm install
   ```
4. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```bash
    user=SEU_EMAIL_GMAIL
    pass=SUA_SENHA_DE_APP
   ```

### Como usar

1. Coloque o arquivo que deseja enviar como anexo na pasta raiz do projeto.

2. Edite o arquivo index.js para configurar:

- from: Seu e-mail (deve ser o mesmo configurado no .env).
- to: O e-mail do(s) destinatário(s) (pode incluir múltiplos e-mails separados por vírgula).
- subject: O assunto do e-mail.
- text: O corpo da mensagem.
- attachments: O caminho para o arquivo que deseja anexar.

3. Execute o seguinte comando para enviar o e-mail:

```bash
node index.js
```
