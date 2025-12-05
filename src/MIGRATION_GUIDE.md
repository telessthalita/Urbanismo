# 📦 Guia de Migração v1.0 → v1.1

## Sobre Esta Atualização

A versão 1.1 introduz um sistema de gerenciamento de variáveis de ambiente para melhorar a segurança e facilitar a configuração do template.

**⚠️ Importante:** Esta migração é **opcional mas fortemente recomendada** para projetos existentes. O código antigo continuará funcionando normalmente devido aos valores de fallback.

---

## 🎯 O Que Mudou?

### ✅ Adicionado
- Sistema de variáveis de ambiente (`.env`)
- Validador automático de configuração
- Scripts de setup automatizado
- Documentação expandida

### 🔄 Modificado
- `ContactForm.tsx` - Agora usa `.env` para credenciais RD Station
- `SEO.tsx` - Usa `.env` para URL da aplicação
- `App.tsx` - Integra validador de ambiente

### ❌ Removido
- Nada foi removido (100% retrocompatível)

---

## 🚀 Migração Passo a Passo

### Opção 1: Migração Completa (Recomendada)

#### Passo 1: Criar Arquivo `.env`

```bash
# Copie o template
cp .env.example .env
```

#### Passo 2: Migrar Credenciais

Abra seu arquivo `ContactForm.tsx` antigo e localize as credenciais:

```typescript
// Código antigo (aproximadamente nas linhas 40-43)
new (window as any).RDStationForms(
  "leads-c012a1399ae98558e6da",  // ← Copie este valor
  "1f8c12a5a4fffa12fa0a913e76d237f9"  // ← Copie este valor
).createForm();
```

Cole esses valores no seu arquivo `.env`:

```env
VITE_RD_STATION_FORM_TOKEN=leads-c012a1399ae98558e6da
VITE_RD_STATION_ACCOUNT_ID=1f8c12a5a4fffa12fa0a913e76d237f9
```

#### Passo 3: Adicionar URL da Aplicação (Opcional)

Se você quiser melhorar o SEO, adicione também:

```env
VITE_APP_URL=https://seudominio.com.br
```

#### Passo 4: Atualizar Código

Seus arquivos já devem estar atualizados se você puxou as mudanças do repositório. Se não:

**ContactForm.tsx:**
```typescript
// Adicione no topo do arquivo
const RD_STATION_CONFIG = {
  formToken: import.meta.env.VITE_RD_STATION_FORM_TOKEN || "leads-c012a1399ae98558e6da",
  accountId: import.meta.env.VITE_RD_STATION_ACCOUNT_ID || "1f8c12a5a4fffa12fa0a913e76d237f9"
};

// Use em vez de valores hardcoded
new (window as any).RDStationForms(
  RD_STATION_CONFIG.formToken,
  RD_STATION_CONFIG.accountId
).createForm();
```

#### Passo 5: Reiniciar Servidor

```bash
# Pare o servidor (Ctrl+C)
npm run dev
```

#### Passo 6: Verificar Console

Abra o navegador (F12) e verifique o console. Você deve ver:

```
✅ Todas as variáveis de ambiente estão configuradas corretamente!
```

---

### Opção 2: Manter Como Está (Não Recomendado)

Se você preferir não migrar agora:

1. Não faça nada
2. O código continuará funcionando com os valores de fallback
3. Você pode migrar depois sem problemas

**Desvantagens:**
- ❌ Credenciais expostas no código-fonte
- ❌ Mais difícil de gerenciar múltiplos ambientes
- ❌ Menor segurança

---

## 🔍 Validação Pós-Migração

### Checklist

- [ ] Arquivo `.env` criado e configurado
- [ ] Credenciais RD Station corretas no `.env`
- [ ] Servidor reiniciado
- [ ] Console do navegador não mostra erros de configuração
- [ ] Formulário de contato funciona (teste enviando um lead)
- [ ] Redirecionamento para página de agradecimento funciona

### Teste do Formulário

1. Acesse a página de contato
2. Preencha o formulário
3. Envie
4. Verifique se:
   - Redirecionou para `/obrigado`
   - Lead apareceu no RD Station
   - Campos personalizados (`projeto`, `id_projeto`) foram capturados

---

## 🐛 Problemas Comuns

### "Variáveis não estão carregando"

**Solução:**
```bash
# 1. Verifique se o arquivo se chama exatamente ".env"
ls -la | grep env

# 2. Verifique se as variáveis têm o prefixo VITE_
cat .env

# 3. Reinicie o servidor
npm run dev
```

### "Formulário não envia mais"

**Solução:**
```bash
# Verifique se as credenciais estão corretas
cat .env | grep RD_STATION

# Compare com as credenciais antigas em ContactForm.tsx
```

### "Erro de validação no console"

**Solução:**
```
🔴 ERROS DE CONFIGURAÇÃO - Variáveis de Ambiente
❌ VITE_RD_STATION_FORM_TOKEN (Token do formulário RD Station) - Formato inválido

# Isso significa que o formato está incorreto
# Token deve começar com "leads-" e ter mais de 10 caracteres
```

Verifique o formato:
- Token: `leads-xxxxxxxxxxxx`
- Account ID: 32 caracteres hexadecimais

---

## 📊 Comparação Antes/Depois

### Antes (v1.0)

```typescript
// ContactForm.tsx - hardcoded
new (window as any).RDStationForms(
  "leads-c012a1399ae98558e6da",
  "1f8c12a5a4fffa12fa0a913e76d237f9"
).createForm();

// SEO.tsx - hardcoded
canonicalUrl = "https://urbanismo.figma.site"
```

**Problemas:**
- Credenciais no código-fonte
- Difícil trocar entre ambientes
- Risco de commit acidental de credenciais

### Depois (v1.1)

```typescript
// ContactForm.tsx - usa .env
const RD_STATION_CONFIG = {
  formToken: import.meta.env.VITE_RD_STATION_FORM_TOKEN,
  accountId: import.meta.env.VITE_RD_STATION_ACCOUNT_ID
};

// SEO.tsx - usa .env
const APP_URL = import.meta.env.VITE_APP_URL || window.location.origin;
```

**Benefícios:**
- ✅ Credenciais seguras em `.env`
- ✅ `.env` no `.gitignore`
- ✅ Fácil trocar entre dev/staging/prod
- ✅ Validação automática de configuração

---

## 🚀 Próximos Passos

Após a migração:

1. **Commit das mudanças** (certifique-se de que `.env` não foi commitado!)
   ```bash
   git add .
   git status  # Verifique que .env NÃO aparece
   git commit -m "feat: migração para sistema de variáveis de ambiente"
   ```

2. **Atualizar variáveis em produção**
   - Vercel: Settings > Environment Variables
   - Netlify: Site Settings > Environment

3. **Testar em produção**
   - Deploy
   - Teste o formulário
   - Verifique se os leads chegam no RD Station

---

## 💡 Dicas

### Múltiplos Ambientes

Você pode criar arquivos `.env` diferentes:

```
.env                  # Desenvolvimento
.env.staging          # Staging
.env.production       # Produção (não commitar)
```

E usar assim:
```bash
# Desenvolvimento
npm run dev

# Staging
cp .env.staging .env
npm run build

# Produção
cp .env.production .env
npm run build
```

### CI/CD

Se você usa CI/CD (GitHub Actions, etc.):

```yaml
# .github/workflows/deploy.yml
env:
  VITE_RD_STATION_FORM_TOKEN: ${{ secrets.RD_STATION_TOKEN }}
  VITE_RD_STATION_ACCOUNT_ID: ${{ secrets.RD_STATION_ACCOUNT_ID }}
```

---

## 📞 Suporte

Problemas durante a migração?

1. Consulte [docs/ENVIRONMENT_VARIABLES.md](./docs/ENVIRONMENT_VARIABLES.md)
2. Leia o [README.md](./README.md) atualizado
3. Verifique o [CHANGELOG.md](./CHANGELOG.md)

---

**Data da Migração:** Dezembro 2024  
**De:** v1.0.0  
**Para:** v1.1.0
