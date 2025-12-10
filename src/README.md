# Template de Landing Page Premium (React)

Este projeto foi arquitetado para ser uma **fábrica de Landing Pages**. Você pode gerar sites completamente diferentes (visual e conteúdo) para novos clientes apenas editando **um único arquivo de configuração**.

## ⚡ Como criar um novo site 

A filosofia deste template é: **Código fixo, Configuração dinâmica.**

### 1. Preparação
Copie a pasta deste projeto ou clone o repositório para uma nova pasta com o nome do cliente.

```bash
# Instale as dependências
npm install
```

### 2. Personalização (O Único Arquivo que Importa)
Abra o arquivo:
👉 **`src/components/landing/ContentConfig.tsx`**

É aqui que tudo acontece. Você não precisa tocar em HTML ou CSS.

#### A. Mude a Identidade Visual (Cores e Fontes)
No início do arquivo, edite a constante `THEME`:

```typescript
export const THEME = {
  colors: {
    primary: "#0055FF",      // Mude a cor principal do cliente
    primaryDark: "#003399",  // Cor ao passar o mouse
    secondary: "#111111",    // Cor de fundo escura/rodapé
    // ...
  },
  fonts: {
    // Cole a URL do Google Fonts que o cliente usa
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
    sans: "'Roboto', sans-serif",
    // ...
  }
};
```

#### B. Configure o Formulário (RD Station)
Role até `formConfig`. Apenas troque os tokens

#### C. Atualize o Conteúdo
Edite o objeto `CONTENT`. Altere textos, links e imagens para cada seção:
- `companyName`: Nome da empresa no topo.
- `hero`: A capa do site (título, subtítulo, imagem de fundo).
- `features`: Os diferenciais (ícones e textos).
- `projects`: Lista de projetos/produtos (o carrossel).
- `contact`: Endereço, email, telefone.

### 3. Publicação
Quando terminar de editar o arquivo de configuração:

1. Teste localmente:
   ```bash
   npm run dev
   ```
2. Gere os arquivos para produção:
   ```bash
   npm run build
   ```
3. A pasta `dist` conterá o site pronto para ser subido em qualquer hospedagem (Vercel, Netlify, Hostgator, etc).

---

## 📂 Visão Geral da Estrutura

Embora você só precise mexer no arquivo de configuração, aqui está onde as coisas ficam se você precisar de customizações avançadas:

- **`src/components/landing/ContentConfig.tsx`**: 📍 **Edite aqui.** O cérebro do site.
- `src/components/ContactForm.tsx`: Lógica do formulário (já configurada para ler o config).
- `src/components/landing/`: Componentes visuais (Hero, Footer, etc) que leem o config.
- `src/styles/globals.css`: Estilos globais (as variáveis de cor são injetadas via JS no App.tsx).

## 🎨 Dicas para Personalização

- **Imagens**: Use links externos (Unsplash, S3) ou coloque imagens na pasta `public` e use o caminho `/nome-da-imagem.jpg`.
- **Ícones**: O projeto usa a biblioteca `lucide-react`. Se precisar de ícones diferentes nos Diferenciais (`features`), você precisará importar o ícone no arquivo `ContentConfig.tsx` (ex: `import { Wallet } from 'lucide-react'`).
