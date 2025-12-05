# Documentação de Variáveis de Ambiente

## 📋 Visão Geral

Este documento descreve todas as variáveis de ambiente utilizadas no projeto e como gerenciá-las corretamente.

**✨ Nova Feature**: O projeto agora inclui um validador automático de variáveis de ambiente que verifica a configuração durante o desenvolvimento e alerta sobre problemas.

## 🔑 Variáveis Obrigatórias

### RD Station (Marketing Automation)

#### `VITE_RD_STATION_FORM_TOKEN`
- **Tipo**: String
- **Formato**: `leads-xxxxxxxxxxxx` (onde x = caracteres alfanuméricos)
- **Descrição**: Token único do formulário de conversão do RD Station
- **Onde encontrar**: 
  1. Acesse RD Station Marketing
  2. Vá em Marketing > Formulários
  3. Crie/edite um formulário
  4. Copie o código embed e extraia o primeiro parâmetro da função `RDStationForms()`
- **Exemplo**: `leads-c012a1399ae98558e6da`

#### `VITE_RD_STATION_ACCOUNT_ID`
- **Tipo**: String (hash hexadecimal)
- **Formato**: 32 caracteres hexadecimais
- **Descrição**: ID único da conta RD Station
- **Onde encontrar**: 
  1. No mesmo código embed do formulário
  2. É o segundo parâmetro da função `RDStationForms()`
- **Exemplo**: `1f8c12a5a4fffa12fa0a913e76d237f9`

---

## 🔧 Variáveis Opcionais

### Analytics & Tracking

#### `VITE_APP_URL`
- **Tipo**: String (URL)
- **Descrição**: URL base da aplicação (usado para SEO e meta tags)
- **Exemplo**: `https://seudominio.com.br`
- **Padrão**: Se não definido, usa `window.location.origin`

#### `VITE_GA_TRACKING_ID`
- **Tipo**: String
- **Formato**: `G-XXXXXXXXXX` ou `UA-XXXXXXXXX-X`
- **Descrição**: ID de rastreamento do Google Analytics
- **Exemplo**: `G-ABC123DEF456`
- **Status**: Não implementado (planejado para versões futuras)

#### `VITE_FB_PIXEL_ID`
- **Tipo**: String (numérico)
- **Descrição**: ID do pixel do Facebook para rastreamento de conversões
- **Exemplo**: `123456789012345`
- **Status**: Não implementado (planejado para versões futuras)

---

## 🛠️ Como Utilizar

### Desenvolvimento Local

1. Copie o arquivo de exemplo:
   ```bash
   cp .env.example .env
   ```

2. Edite `.env` com suas credenciais:
   ```env
   VITE_RD_STATION_FORM_TOKEN=leads-SEU_TOKEN
   VITE_RD_STATION_ACCOUNT_ID=SEU_ACCOUNT_ID
   ```

3. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### Produção

#### Vercel
```bash
# Via CLI
vercel env add VITE_RD_STATION_FORM_TOKEN
vercel env add VITE_RD_STATION_ACCOUNT_ID

# Ou via Dashboard:
# Settings > Environment Variables > Add
```

#### Netlify
```bash
# Via CLI
netlify env:set VITE_RD_STATION_FORM_TOKEN "leads-xxxx"
netlify env:set VITE_RD_STATION_ACCOUNT_ID "xxxx"

# Ou via Dashboard:
# Site Settings > Build & Deploy > Environment > Environment variables
```

#### Outras Plataformas
Consulte a documentação específica da sua plataforma de hosting para configurar variáveis de ambiente.

---

## 📝 Boas Práticas

### ✅ Fazer

- **Sempre** use `.env.example` como template
- **Sempre** adicione `.env` ao `.gitignore`
- **Sempre** documente novas variáveis neste arquivo
- Use prefixo `VITE_` para variáveis que devem ser expostas ao cliente
- Valide variáveis críticas na inicialização da aplicação

### ❌ Não Fazer

- **NUNCA** commite o arquivo `.env` no repositório
- **NUNCA** exponha credenciais em código-fonte
- **NUNCA** compartilhe o arquivo `.env` por email/chat
- Não use valores hardcoded quando uma variável de ambiente é adequada

---

## 🔍 Debugging

### Validador Automático

O projeto inclui um validador automático (`/utils/validateEnv.ts`) que roda em modo de desenvolvimento e verifica:

- ✅ Todas as variáveis obrigatórias estão definidas
- ✅ Formato correto das variáveis (ex: token deve começar com "leads-")
- ✅ Comprimento adequado das credenciais
- ⚠️  Variáveis opcionais ausentes (apenas aviso)

**Como funciona:**
1. Ao iniciar o servidor de desenvolvimento (`npm run dev`)
2. O validador executa automaticamente
3. Erros são exibidos no console do navegador (F12)
4. Avisos são exibidos para variáveis opcionais

**Exemplo de saída no console:**

```
✅ Todas as variáveis de ambiente estão configuradas corretamente!
```

Ou, se houver problemas:

```
🔴 ERROS DE CONFIGURAÇÃO - Variáveis de Ambiente
❌ VITE_RD_STATION_FORM_TOKEN (Token do formulário RD Station) - OBRIGATÓRIA mas não definida

📝 Para corrigir:
1. Copie .env.example para .env
2. Preencha as variáveis obrigatórias
3. Reinicie o servidor de desenvolvimento
```

### Como verificar se as variáveis estão carregadas

No código TypeScript/JavaScript:
```typescript
console.log('RD Station Token:', import.meta.env.VITE_RD_STATION_FORM_TOKEN);
console.log('RD Station Account:', import.meta.env.VITE_RD_STATION_ACCOUNT_ID);
```

⚠️ **Importante**: Remova esses logs antes de fazer deploy em produção.

### Problemas Comuns

#### "Variável não está definida"
- Verifique se você criou o arquivo `.env`
- Verifique se reiniciou o servidor após editar `.env`
- Confirme que o nome da variável está correto (case-sensitive)
- Confirme que a variável tem o prefixo `VITE_`

#### "Formulário RD Station não carrega"
- Verifique se as credenciais estão corretas
- Teste as credenciais diretamente no console do RD Station
- Verifique se o formulário está ativo no RD Station
- Verifique o console do navegador para erros

---

## 🔄 Rotação de Credenciais

Se você precisar trocar as credenciais do RD Station:

1. Gere um novo formulário no RD Station
2. Atualize o arquivo `.env` local
3. Atualize as variáveis nos ambientes de produção
4. Teste a integração
5. Desative o formulário antigo (opcional)

---

## 📊 Checklist de Deploy

Antes de fazer deploy, verifique:

- [ ] Arquivo `.env` NÃO está commitado
- [ ] `.env.example` está atualizado com todas as variáveis necessárias
- [ ] Variáveis de produção estão configuradas no serviço de hosting
- [ ] Testou a aplicação em ambiente de produção
- [ ] Logs de debug foram removidos

---

## 📚 Referências

- [Vite - Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [RD Station - Documentação de Formulários](https://www.rdstation.com/)
- [Vercel - Environment Variables](https://vercel.com/docs/environment-variables)
- [Netlify - Environment Variables](https://docs.netlify.com/environment-variables/overview/)