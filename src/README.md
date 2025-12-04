# Template de Landing Page Premium (React + Tailwind + Radix UI)

Este projeto é um template de Landing Page "premium" altamente configurável, desenvolvido para o setor imobiliário/arquitetura, mas adaptável para qualquer nicho que exija elegância e sofisticação.

## 🚀 Características Principais

- **100% Configurável**: Todo o conteúdo (textos, imagens, links) e a identidade visual (cores, fontes) são controlados por um único arquivo de configuração.
- **Design Premium**: Layout sofisticado utilizando Tailwind CSS e componentes Radix UI.
- **Integração RD Station**: Formulário de contato já integrado, com envio de campos personalizados (ID e Nome do Projeto).
- **Responsividade**: Totalmente adaptado para mobile, tablet e desktop.

---

## 🛠️ Como Usar Este Template

Siga os passos abaixo para gerar um novo projeto a partir deste template.

### 1. Instalação

Clone este repositório ou copie os arquivos para o novo diretório do projeto.

```bash
# Instale as dependências
npm install
```

### 2. Personalização de Conteúdo e Identidade Visual

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

### 3. Configuração do RD Station

A integração com o RD Station está localizada no componente:
`src/components/ContactForm.tsx`

Para conectar com sua conta do RD Station, você precisará alterar os identificadores do formulário.

1. Abra o arquivo `src/components/ContactForm.tsx`.
2. Localize o `useEffect` que carrega o script do RD Station (linhas ~40-43) e atualize os parâmetros do construtor `RDStationForms`:

```javascript
new (window as any).RDStationForms(
  "SEU_TOKEN_DO_FORMULARIO", // Ex: leads-c012a1399ae98558e6da
  "SEU_ID_DA_CONTA"          // Ex: 1f8c12a5a4fffa12fa0a913e76d237f9
).createForm();
```

3. Atualize também o ID da `div` container (linha ~181) para corresponder ao seu token do formulário:

```jsx
<div 
  id="SEU_TOKEN_DO_FORMULARIO" // Ex: leads-c012a1399ae98558e6da
  ...
></div>
```

**Nota:** O formulário envia automaticamente campos personalizados `projeto` (nome do projeto) e `id_projeto` (identificador técnico) se o usuário tiver selecionado um interesse. Certifique-se de que esses campos existem ou estão mapeados no seu RD Station se desejar capturá-los.

### 4. Executando o Projeto

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

- `src/components/landing/ContentConfig.tsx`: **Arquivo Principal de Configuração**.
- `src/components/ContactForm.tsx`: Lógica do formulário e integração RD Station.
- `src/styles/globals.css`: Estilos globais e variáveis CSS (geradas dinamicamente pelo App).
- `src/imports/`: Onde ficam os SVGs e assets estáticos importados.

## 🎨 Dicas de Design

- **Imagens**: Utilize imagens de alta qualidade para manter o aspecto "premium". O template usa `aspect-ratio` e `object-cover` para garantir que as imagens se adaptem bem, mas proporções consistentes ajudam.
- **Cores**: A cor `primary` é usada extensivamente em botões, ícones e detalhes. Escolha uma cor que tenha bom contraste sobre fundo branco e escuro.
