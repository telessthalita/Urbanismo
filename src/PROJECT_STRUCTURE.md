# 📁 Estrutura do Projeto

## Visão Geral

Este documento descreve a estrutura completa do projeto e a função de cada arquivo/pasta.

```
landing-page-template/
│
├── 📄 Arquivos de Configuração Raiz
│   ├── .env.example              # Template de variáveis de ambiente
│   ├── .env                      # Variáveis de ambiente (NÃO COMMITAR)
│   ├── .gitignore               # Arquivos ignorados pelo Git
│   ├── package.json             # Dependências e scripts npm
│   ├── tsconfig.json            # Configuração TypeScript
│   ├── vite.config.ts           # Configuração Vite
│   └── index.html               # HTML principal
│
├── 📚 Documentação
│   ├── README.md                        # Documentação principal
│   ├── QUICKSTART.md                    # Guia rápido (5 min)
│   ├── CHANGELOG.md                     # Histórico de mudanças
│   ├── PROJECT_STRUCTURE.md             # Este arquivo
│   ├── Attributions.md                  # Créditos e atribuições
│   └── /docs/
│       └── ENVIRONMENT_VARIABLES.md     # Documentação de .env
│
├── 🛠️ Scripts
│   └── /scripts/
│       ├── setup.sh             # Setup automatizado (Linux/Mac)
│       └── setup.ps1            # Setup automatizado (Windows)
│
├── 🎨 Código Fonte
│   ├── /components/
│   │   ├── 🔐 ContactForm.tsx            # Formulário + integração RD Station
│   │   │
│   │   ├── /landing/                     # Componentes da Landing Page
│   │   │   ├── ContentConfig.tsx         # ⭐ CONFIGURAÇÃO PRINCIPAL
│   │   │   ├── Home.tsx                  # Página principal (orquestrador)
│   │   │   ├── Header.tsx                # Cabeçalho/navegação
│   │   │   ├── Hero.tsx                  # Seção hero (topo)
│   │   │   ├── Features.tsx              # Seção de diferenciais
│   │   │   ├── Projects.tsx              # Galeria de projetos
│   │   │   ├── About.tsx                 # Seção sobre
│   │   │   ├── Contact.tsx               # Seção de contato
│   │   │   ├── Footer.tsx                # Rodapé
│   │   │   ├── ThankYou.tsx             # Página de agradecimento
│   │   │   └── SEO.tsx                  # Meta tags e SEO
│   │   │
│   │   ├── /ui/                          # Componentes Radix UI
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   └── ... (outros componentes UI)
│   │   │
│   │   └── /figma/
│   │       └── ImageWithFallback.tsx     # Componente de imagem (protegido)
│   │
│   ├── /utils/
│   │   └── validateEnv.ts       # Validador de variáveis de ambiente
│   │
│   ├── /styles/
│   │   └── globals.css          # Estilos globais CSS
│   │
│   ├── /imports/                # Assets importados do Figma
│   │   └── (imagens e SVGs)
│   │
│   └── App.tsx                  # Componente raiz da aplicação
│
└── /public/                     # Arquivos públicos estáticos
    └── favicon.svg
```

---

## 📋 Descrição Detalhada

### 🔑 Arquivos Críticos

#### `/components/landing/ContentConfig.tsx`
**O arquivo mais importante do projeto.**

Centraliza toda a configuração:
- ✅ Tema (cores, fontes)
- ✅ Textos de todas as seções
- ✅ Imagens e links
- ✅ Estrutura de projetos
- ✅ Informações de contato
- ✅ Redes sociais

**Modificar apenas este arquivo permite personalizar 95% do template.**

#### `.env`
**Credenciais sensíveis.**

Contém:
- Token do RD Station
- ID da conta RD Station
- URL da aplicação (SEO)
- Outras configurações futuras

⚠️ **NUNCA commitar este arquivo.**

---

### 🧩 Componentes Principais

#### `ContactForm.tsx`
- Formulário de contato visual
- Integração com RD Station
- Envia campos personalizados (`projeto`, `id_projeto`)
- Redirecionamento para página de agradecimento

#### `SEO.tsx`
- Meta tags para SEO
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Schema.org (dados estruturados)
- Canonical URLs

#### `Home.tsx`
- Orquestra todos os componentes da landing page
- Define a ordem das seções
- Passa props entre componentes

---

### 🛡️ Arquivos Protegidos

**NÃO modificar:**
- `/components/figma/ImageWithFallback.tsx`

Estes arquivos são do sistema e não devem ser alterados.

---

### 📦 Dependências Importantes

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "tailwindcss": "^4.x",
  "@radix-ui/react-*": "^1.x",
  "lucide-react": "^0.x",
  "react-helmet-async": "^2.x"
}
```

---

## 🔄 Fluxo de Dados

```
App.tsx
  ├── Carrega THEME de ContentConfig.tsx
  ├── Injeta variáveis CSS no :root
  ├── Valida variáveis de ambiente (dev)
  └── Renderiza Home.tsx ou ThankYou.tsx
      │
      └── Home.tsx
          ├── SEO.tsx (meta tags)
          ├── Header.tsx
          ├── Hero.tsx
          ├── Features.tsx
          ├── Projects.tsx (dispara eventos)
          ├── About.tsx
          ├── Contact.tsx (escuta eventos de Projects)
          │   └── ContactForm.tsx (integra com RD Station)
          └── Footer.tsx
```

---

## 🎯 Onde Fazer Mudanças Comuns

### Mudar Cores/Fontes
📁 `/components/landing/ContentConfig.tsx` → `THEME`

### Mudar Textos
📁 `/components/landing/ContentConfig.tsx` → `CONTENT`

### Adicionar/Remover Projetos
📁 `/components/landing/ContentConfig.tsx` → `CONTENT.projects.items`

### Configurar RD Station
📁 `.env` → credenciais
📁 `/components/ContactForm.tsx` → lógica (se necessário customizar)

### Personalizar SEO
📁 `/components/landing/SEO.tsx`
📁 `.env` → `VITE_APP_URL`

### Adicionar Nova Seção
1. Criar componente em `/components/landing/MinhaSecao.tsx`
2. Adicionar conteúdo em `ContentConfig.tsx`
3. Importar e usar em `Home.tsx`

---

## 📊 Tamanho Aproximado dos Arquivos

```
ContentConfig.tsx    ~6 KB   (configuração completa)
ContactForm.tsx      ~8 KB   (formulário + RD Station)
Projects.tsx         ~5 KB   (galeria de projetos)
Home.tsx             ~3 KB   (orquestrador)
SEO.tsx              ~3 KB   (meta tags)
```

Total do projeto (sem node_modules): ~200 KB

---

## 🚀 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (Vite)
npm run build        # Build de produção
npm run preview      # Preview do build
```

---

## 📖 Guia de Navegação Rápida

**Quero mudar a cor principal:**
→ `ContentConfig.tsx` linha ~7

**Quero adicionar um projeto:**
→ `ContentConfig.tsx` linha ~67-133

**Quero trocar as credenciais do RD Station:**
→ `.env` linhas 10-13

**Quero mudar o rodapé:**
→ `ContentConfig.tsx` linha ~180-201

**Quero personalizar o formulário:**
→ `ContactForm.tsx` linhas ~177-275

---

## 🔗 Links Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [RD Station Docs](https://developers.rdstation.com/)
- [Vite Docs](https://vitejs.dev/)

---

**Última atualização:** Dezembro 2024  
**Versão:** 1.1.0
