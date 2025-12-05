# 🚀 Guia Rápido de Configuração

## Setup em 5 Minutos

### Opção A: Setup Automatizado (Recomendado)

**Linux/Mac:**
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

**Windows (PowerShell):**
```powershell
.\scripts\setup.ps1
```

O script automaticamente:
- ✅ Verifica se Node.js e npm estão instalados
- ✅ Instala todas as dependências
- ✅ Cria o arquivo `.env` a partir do template
- ✅ Fornece instruções para próximos passos

### Opção B: Setup Manual

#### 1️⃣ Instalar Dependências
```bash
npm install
```

#### 2️⃣ Configurar Variáveis de Ambiente
```bash
# Copiar template
cp .env.example .env

# Editar com suas credenciais
# Use seu editor favorito (vim, nano, VSCode, etc.)
```

**Edite o `.env` e adicione:**
```env
VITE_RD_STATION_FORM_TOKEN=leads-SEU_TOKEN_AQUI
VITE_RD_STATION_ACCOUNT_ID=SEU_ACCOUNT_ID_AQUI
```

#### 3️⃣ Personalizar Conteúdo
Edite: `/components/landing/ContentConfig.tsx`

**Mínimo necessário:**
```typescript
export const CONTENT = {
  companyName: "SUA EMPRESA",
  hero: {
    title: "SEU TÍTULO",
    titleHighlight: "DESTAQUE",
    // ...
  },
  // ...
};
```

#### 4️⃣ Rodar Projeto
```bash
npm run dev
```

Acesse: `http://localhost:5173`

---

## 📋 Checklist Completo

### Setup Inicial
- [ ] Dependências instaladas (`npm install`)
- [ ] Arquivo `.env` criado e configurado
- [ ] Servidor de desenvolvimento rodando (`npm run dev`)

### Personalização Básica
- [ ] Nome da empresa alterado em `ContentConfig.tsx`
- [ ] Cores do tema personalizadas (opcional)
- [ ] Fontes Google Fonts configuradas (opcional)

### Conteúdo
- [ ] Seção Hero personalizada
- [ ] Projetos adicionados/editados
- [ ] Informações de contato atualizadas
- [ ] Links de redes sociais configurados

### RD Station
- [ ] Token do formulário configurado
- [ ] ID da conta configurado
- [ ] Teste de envio realizado
- [ ] Campos personalizados criados no RD (opcional)

### Deploy
- [ ] Build de produção testado (`npm run build`)
- [ ] Variáveis de ambiente configuradas no host
- [ ] Deploy realizado
- [ ] Teste em produção concluído

---

## ⚡ Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção

# Linting (se configurado)
npm run lint         # Verifica erros de código

# Testes de build
npm run build && npm run preview
```

---

## 🆘 Problemas Comuns

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Variáveis de ambiente não carregam"
```bash
# Pare o servidor (Ctrl+C)
# Edite o .env
# Reinicie o servidor
npm run dev
```

### "Formulário RD Station não funciona"
1. Verifique credenciais no `.env`
2. Abra DevTools (F12) > Console
3. Procure por erros do RD Station
4. Verifique se o formulário está ativo no RD

---

## 📚 Documentação Completa

- [README.md](./README.md) - Documentação principal
- [docs/ENVIRONMENT_VARIABLES.md](./docs/ENVIRONMENT_VARIABLES.md) - Detalhes sobre variáveis de ambiente

---

## 💡 Dicas Rápidas

**Mudança Rápida de Cores:**
```typescript
// Em ContentConfig.tsx
export const THEME = {
  colors: {
    primary: "#SEU_HEX_AQUI",      // Cor dos botões, ícones
    primaryDark: "#COR_HOVER",     // Cor ao passar o mouse
    // ...
  }
};
```

**Adicionar Novo Projeto:**
```typescript
// Em ContentConfig.tsx > CONTENT.projects.items
{
  id: 7,
  title: "Novo Projeto",
  description: "Descrição curta",
  image: "URL_DA_IMAGEM",
  location: "Localização",
  size: "100m²",
  status: "Lançamento",
  features: ["Feature 1", "Feature 2"],
  longDescription: "Descrição longa..."
}
```

**Trocar Logo do Footer:**
```typescript
// 1. Adicione a imagem em /public/logo.png
// 2. Em ContentConfig.tsx:
import logo from "../public/logo.png";

export const CONTENT = {
  footer: {
    developer: {
      logo: logo  // Use sua logo
    }
  }
};
```

---

## 🎯 Próximos Passos

Depois de configurar o básico:

1. **Teste o formulário** enviando um lead de teste
2. **Personalize as cores** para combinar com sua marca
3. **Adicione seus projetos** reais
4. **Configure SEO** editando meta tags em `SEO.tsx`
5. **Faça deploy** em Vercel/Netlify

---

**Precisa de ajuda?** Consulte a [documentação completa](./README.md).