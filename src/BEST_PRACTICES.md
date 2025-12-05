# 📚 Guia de Boas Práticas

Este documento contém recomendações e melhores práticas para trabalhar com este template de forma eficiente e segura.

---

## 🔐 Segurança

### ✅ Fazer

**1. Proteger Credenciais**
```bash
# Sempre use .env para dados sensíveis
VITE_RD_STATION_FORM_TOKEN=seu-token
VITE_RD_STATION_ACCOUNT_ID=seu-id

# Nunca commite o .env
git status  # Verifique que .env não aparece
```

**2. Rotação Regular de Credenciais**
- Mude as credenciais do RD Station a cada 6-12 meses
- Desative formulários antigos após migração
- Mantenha log de quando as credenciais foram alteradas

**3. Validação de Entrada**
```typescript
// O formulário já valida, mas você pode adicionar mais:
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

### ❌ Não Fazer

- ❌ NUNCA commite arquivos `.env`
- ❌ NUNCA exponha credenciais em logs ou console
- ❌ NUNCA use credenciais de produção em desenvolvimento
- ❌ NUNCA compartilhe `.env` por email/chat/Discord

---

## 📝 Desenvolvimento

### ✅ Fazer

**1. Editar Apenas ContentConfig.tsx**
```typescript
// ✅ Correto - Tudo em ContentConfig
export const CONTENT = {
  companyName: "Minha Empresa",
  hero: { title: "Título" }
};
```

**2. Usar Git de Forma Correta**
```bash
# Antes de commitar
git status
git diff

# Commits semânticos
git commit -m "feat: adicionar novo projeto"
git commit -m "fix: corrigir link de rede social"
git commit -m "docs: atualizar README"
```

**3. Testar Antes de Deploy**
```bash
# Teste local
npm run dev

# Teste build
npm run build
npm run preview

# Teste formulário
# (envie um lead de teste)
```

**4. Comentar Código Complexo**
```typescript
// ✅ Bom
// Busca o projeto pelo ID para enviar o nome correto ao RD Station
const selectedProject = CONTENT.projects.items.find(
  p => String(p.id) === String(selectedProjectId)
);
```

### ❌ Não Fazer

- ❌ Não edite componentes sem entender o fluxo
- ❌ Não remova validações de formulário
- ❌ Não faça push direto para `main` sem testar
- ❌ Não use `console.log()` em produção

---

## 🎨 Design & UX

### ✅ Fazer

**1. Imagens de Alta Qualidade**
```typescript
// Use imagens otimizadas
// Tamanho recomendado: 1920x1080 (16:9)
// Formato: WebP ou JPG (otimizado)
// Peso máximo: 500KB por imagem
```

**2. Cores Consistentes**
```typescript
// ✅ Use as variáveis do tema
export const THEME = {
  colors: {
    primary: "#B38B59",     // Use em botões, links
    primaryDark: "#9A764A", // Use em hover
    // ...
  }
};
```

**3. Textos Concisos**
```typescript
// ✅ Título curto e impactante
title: "INOVAÇÃO E ELEGÂNCIA"

// ❌ Evite textos muito longos
title: "Nossa empresa oferece as melhores soluções..."
```

**4. Acessibilidade**
```typescript
// ✅ Sempre adicione alt text em imagens
imageAlt: "Vista panorâmica do empreendimento"

// ✅ Use contraste adequado
// Mínimo: 4.5:1 para texto normal
// Mínimo: 3:1 para texto grande
```

### ❌ Não Fazer

- ❌ Não use imagens muito pesadas (> 1MB)
- ❌ Não use cores com baixo contraste
- ❌ Não omita textos alternativos em imagens
- ❌ Não use mais de 3 fontes diferentes

---

## 🚀 Performance

### ✅ Fazer

**1. Otimizar Imagens**
```bash
# Use ferramentas como:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
# - ImageOptim (Mac)
```

**2. Lazy Loading**
```typescript
// O template já usa lazy loading nas imagens
// Mantenha essa prática em novos componentes
<img loading="lazy" src={image} alt={alt} />
```

**3. Monitorar Bundle Size**
```bash
# Após build, verifique o tamanho
npm run build
# Veja dist/assets/*.js

# Mantenha < 500KB
```

### ❌ Não Fazer

- ❌ Não adicione bibliotecas pesadas desnecessárias
- ❌ Não carregue todas as imagens ao mesmo tempo
- ❌ Não bloqueie o thread principal

---

## 📊 SEO

### ✅ Fazer

**1. Configure Corretamente**
```typescript
// SEO.tsx - Configure para cada página
<SEO 
  title="Minha Empresa | Projetos Premium"
  description="Descrição única e relevante (150-160 chars)"
  canonicalUrl="https://seudominio.com.br"
  ogImage="https://seudominio.com.br/og-image.jpg"
/>
```

**2. Use Heading Hierarchy**
```tsx
{/* ✅ Correto */}
<h1>Título Principal</h1>
<h2>Seção</h2>
<h3>Subseção</h3>

{/* ❌ Errado */}
<h1>Título</h1>
<h3>Seção</h3>  {/* Pulou h2 */}
```

**3. Sitemap e Robots.txt**
```txt
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://seudominio.com.br/sitemap.xml
```

### ❌ Não Fazer

- ❌ Não use mais de um `<h1>` por página
- ❌ Não deixe meta descriptions vazias
- ❌ Não use duplicate content
- ❌ Não bloqueie crawlers sem motivo

---

## 🧪 Testes

### ✅ Fazer

**1. Teste Manual do Formulário**
```
1. Preencha todos os campos
2. Selecione um projeto
3. Envie
4. Verifique redirecionamento
5. Confirme recebimento no RD Station
6. Verifique campos personalizados
```

**2. Teste Responsividade**
```
Dispositivos para testar:
- Mobile (375px - iPhone SE)
- Tablet (768px - iPad)
- Desktop (1920px)

Navegadores:
- Chrome/Edge
- Firefox
- Safari
```

**3. Teste Cross-Browser**
```bash
# Use ferramentas como:
# - BrowserStack
# - LambdaTest
# Ou teste manualmente em:
# - Chrome, Firefox, Safari, Edge
```

### ❌ Não Fazer

- ❌ Não faça deploy sem testar o formulário
- ❌ Não ignore warnings do console
- ❌ Não teste apenas em um navegador

---

## 🔄 Git & Versionamento

### ✅ Fazer

**1. Commits Semânticos**
```bash
feat: adicionar novo projeto Skyline Tower
fix: corrigir validação de email
docs: atualizar guia de setup
style: ajustar espaçamento do footer
refactor: reorganizar estrutura do formulário
```

**2. Branches Organizadas**
```bash
main          # Produção
develop       # Desenvolvimento
feature/nome  # Novas features
hotfix/bug    # Correções urgentes
```

**3. Pull Requests com Contexto**
```markdown
## O Que Mudou
- Adicionado projeto "Urban Heights"
- Corrigido bug no formulário de contato

## Como Testar
1. Acesse a seção de projetos
2. Clique em "Urban Heights"
3. Verifique modal

## Checklist
- [x] Testado localmente
- [x] Formulário funciona
- [x] Sem console.errors
```

### ❌ Não Fazer

- ❌ Commits como "fix" ou "update"
- ❌ Commits com 50+ arquivos modificados
- ❌ Push direto para `main` sem review
- ❌ Merge sem resolver conflitos

---

## 📦 Deploy

### ✅ Fazer

**1. Checklist Pré-Deploy**
```
[ ] Build local funciona (npm run build)
[ ] Sem erros no console
[ ] Formulário testado
[ ] Variáveis de ambiente configuradas no host
[ ] .env.example atualizado (se houver novas vars)
[ ] README atualizado (se necessário)
```

**2. Ambiente de Staging**
```bash
# Sempre teste em staging antes de produção
# Vercel: crie um preview deployment
# Netlify: use deploy previews
```

**3. Monitoramento Pós-Deploy**
```
✅ Verificar logs
✅ Testar formulário em produção
✅ Verificar analytics
✅ Monitorar erros (Sentry, LogRocket, etc.)
```

### ❌ Não Fazer

- ❌ Deploy direto para produção sem testes
- ❌ Esquecer de configurar variáveis de ambiente
- ❌ Deploy em horário de pico de acessos
- ❌ Ignorar erros em produção

---

## 📚 Documentação

### ✅ Fazer

**1. Manter Docs Atualizadas**
```bash
# Ao adicionar features, atualize:
- README.md
- CHANGELOG.md
- Comentários no código
```

**2. Comentar Decisões Importantes**
```typescript
// ✅ Bom comentário
// Usamos RD Station Forms ao invés de API direta porque:
// 1. Suporta tracking automático de conversões
// 2. Dispensa configuração de CORS
// 3. Já inclui validação de email
```

**3. Exemplos Práticos**
```typescript
// ✅ Inclua exemplos
/*
 * Exemplo de uso:
 * 
 * CONTENT.projects.items = [
 *   { id: 1, title: "Projeto A", ... }
 * ]
 */
```

### ❌ Não Fazer

- ❌ Código sem comentários em partes complexas
- ❌ Documentação desatualizada
- ❌ README genérico sem detalhes do projeto

---

## 🎓 Aprendizado Contínuo

### ✅ Fazer

**1. Estudar as Tecnologias**
```
- React Docs: https://react.dev/
- Tailwind: https://tailwindcss.com/
- Radix UI: https://www.radix-ui.com/
```

**2. Code Review**
```bash
# Peça revisão de código
# Aprenda com feedback
# Revise código de outros
```

**3. Experimentar com Cuidado**
```bash
# Crie branch de teste
git checkout -b experiment/new-feature

# Teste
# Se funcionar, merge
# Se não, delete branch
```

### ❌ Não Fazer

- ❌ Copiar código sem entender
- ❌ Usar bibliotecas sem ler docs
- ❌ Ignorar warnings e erros

---

## 📞 Suporte

Dúvidas sobre boas práticas?

1. Consulte a [documentação oficial](./README.md)
2. Leia o [código fonte](./components/) com atenção
3. Teste em ambiente de desenvolvimento primeiro

---

**Última atualização:** Dezembro 2024  
**Versão:** 1.1.0
