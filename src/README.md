# Template de Landing Page Premium (React + Tailwind + Radix UI)

Este projeto é um template de Landing Page "premium" altamente configurável, desenvolvido para o setor imobiliário/arquitetura, mas adaptável para qualquer nicho que exija elegância e sofisticação.

## 📑 Índice

1. [Características Principais](#-características-principais)
2. [Como Usar Este Template](#️-como-usar-este-template)
   - [Instalação](#1-instalação)
   - [Configuração de Variáveis de Ambiente](#2-configuração-de-variáveis-de-ambiente)
   - [Personalização de Conteúdo](#3-personalização-de-conteúdo-e-identidade-visual)
   - [Configuração RD Station](#4-configuração-do-rd-station-opcional---campos-personalizados)
   - [Executando o Projeto](#5-executando-o-projeto)
3. [Estrutura de Pastas](#-estrutura-de-pastas-importantes)
4. [Segurança](#-segurança)
5. [Deploy em Produção](#-deploy-em-produção)
6. [Documentação Adicional](#-documentação-adicional)
7. [Licença](#-licença)

---

## 🚀 Características Principais

- **100% Configurável**: Todo o conteúdo (textos, imagens, links) e a identidade visual (cores, fontes) são controlados por um único arquivo de configuração.
- **Design Premium**: Layout sofisticado utilizando Tailwind CSS e componentes Radix UI.
- **Integração RD Station**: Formulário de contato já integrado, com envio de campos personalizados (ID e Nome do Projeto).
- **Responsividade**: Totalmente adaptado para mobile, tablet e desktop.
- **Variáveis de Ambiente**: Chaves e configurações sensíveis organizadas em arquivo `.env`.

---

## 🛠️ Como Usar Este Template

Siga os passos abaixo para gerar um novo projeto a partir deste template.

### 1. Instalação

Clone este repositório ou copie os arquivos para o novo diretório do projeto.

```bash
# Instale as dependências
npm install
```

### 2. Configuração de Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure suas chaves do RD Station:

```env
# Token do formulário RD Station (formato: leads-xxxxxxxxxxxx)
VITE_RD_STATION_FORM_TOKEN=leads-SEU_TOKEN_AQUI

# ID da conta RD Station (32 caracteres hexadecimais)
VITE_RD_STATION_ACCOUNT_ID=SEU_ID_AQUI
```

**⚠️ IMPORTANTE**: 
- O arquivo `.env` está no `.gitignore` e **nunca deve ser commitado** no repositório.
- Use o `.env.example` como referência para outros desenvolvedores.
- Em produção, configure essas variáveis nas configurações do seu host (Vercel, Netlify, etc.).

#### Como obter as credenciais do RD Station:

1. Acesse sua conta do RD Station
2. Vá em **Marketing > Formulários**
3. Crie ou edite um formulário
4. Copie o código de incorporação
5. Extraia os dois IDs do código (exemplo abaixo):

```javascript
// No código do RD Station você verá algo assim:
new RDStationForms('leads-c012a1399ae98558e6da', '1f8c12a5a4fffa12fa0a913e76d237f9').createForm();
//                   ↑ Este é o FORM_TOKEN       ↑ Este é o ACCOUNT_ID
```

### 3. Personalização de Conteúdo e Identidade Visual

Toda a personalização é centralizada no arquivo:
`src/components/landing/ContentConfig.tsx`

#### Alterando o Tema (Cores e Fontes)
No objeto `THEME`, você pode definir as cores principais e as fontes do Google Fonts.

```javascript
export const THEME = {
  colors: {
    primary: "#B38B59",      // Cor Principal
    primaryDark: "#9A764A",  // Cor Hover
    // ... outras cores
  },
  fonts: {
    googleFontsUrl: "...",   // URL do Google Fonts
    sans: "'Lato', sans-serif",
    serif: "'Playfair Display', serif",
  }
};
```

#### Alterando Textos e Imagens
No objeto `CONTENT`, você altera os textos de cada seção (Hero, Features, Projects, About, Contact, Footer).

```javascript
export const CONTENT = {
  companyName: "NOVA MARCA",
  hero: {
    title: "SEU TÍTULO",
    // ...
  },
  // ...
};
```

### 4. Configuração do RD Station (Opcional - Campos Personalizados)

⚠️ **Nota**: Se você seguiu o passo 2 corretamente, a integração básica já está funcionando. Esta seção é apenas se você quiser configurar campos personalizados adicionais.

A integração com o RD Station está localizada no componente:
`src/components/ContactForm.tsx`

O formulário envia automaticamente os seguintes campos personalizados:
- `projeto`: Nome do projeto selecionado (campo legível)
- `id_projeto`: ID técnico do projeto (campo numérico)

Para capturar esses campos no RD Station:

1. Acesse seu formulário no RD Station
2. Vá em **Configurações > Campos Personalizados**
3. Crie os campos:
   - Nome: `projeto` | Tipo: Texto
   - Nome: `id_projeto` | Tipo: Texto ou Número

**Campos padrão enviados automaticamente:**
- `name` (nome do usuário)
- `email` (email do usuário)  
- `mobile_phone` ou `personal_phone` (telefone)
- `message` ou `mensagem` (mensagem)

### 5. Executando o Projeto

Para rodar o ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

---

## 📂 Estrutura de Pastas Importantes

- **`.env`**: Variáveis de ambiente (NÃO commitar)
- **`.env.example`**: Template de variáveis (commitar como referência)
- `src/components/landing/ContentConfig.tsx`: **Arquivo Principal de Configuração**.
- `src/components/ContactForm.tsx`: Lógica do formulário e integração RD Station.
- `src/styles/globals.css`: Estilos globais e variáveis CSS (geradas dinamicamente pelo App).
- `src/imports/`: Onde ficam os SVGs e assets estáticos importados.

## 🔒 Segurança

- ✅ Todas as chaves sensíveis estão no arquivo `.env`
- ✅ O arquivo `.env` está listado no `.gitignore`
- ✅ Valores padrão no código são apenas para referência/fallback
- ⚠️ Nunca exponha suas credenciais do RD Station em repositórios públicos

## 🚀 Deploy em Produção

Ao fazer deploy da aplicação (Vercel, Netlify, etc.), configure as variáveis de ambiente no painel do serviço:

**Vercel:**
1. Vá em Settings > Environment Variables
2. Adicione `VITE_RD_STATION_FORM_TOKEN` e `VITE_RD_STATION_ACCOUNT_ID`

**Netlify:**
1. Vá em Site Settings > Build & Deploy > Environment
2. Adicione as mesmas variáveis

## 🎨 Dicas de Design

- **Imagens**: Utilize imagens de alta qualidade para manter o aspecto "premium". O template usa `aspect-ratio` e `object-cover` para garantir que as imagens se adaptem bem, mas proporções consistentes ajudam.
- **Cores**: A cor `primary` é usada extensivamente em botões, ícones e detalhes. Escolha uma cor que tenha bom contraste sobre fundo branco e escuro.

---

## 📝 Documentação Adicional

- **[QUICKSTART.md](./QUICKSTART.md)** - Guia rápido de configuração em 5 minutos
- **[docs/ENVIRONMENT_VARIABLES.md](./docs/ENVIRONMENT_VARIABLES.md)** - Documentação completa sobre variáveis de ambiente
- **[CHANGELOG.md](./CHANGELOG.md)** - Histórico de mudanças do projeto
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Estrutura completa do projeto
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Guia de migração v1.0 → v1.1

---

## 🤝 Contribuindo

Este é um template comercial. Para sugestões de melhorias ou reporte de bugs, entre em contato com a equipe de desenvolvimento.

---

## 📄 Licença

© 2024 AlfamaWeb. Todos os direitos reservados.