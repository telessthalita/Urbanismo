# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.1.0] - 2024-12-05

### ✨ Adicionado

#### Gerenciamento de Variáveis de Ambiente
- Criado arquivo `.env.example` com template de configuração
- Criado arquivo `.gitignore` para proteção de credenciais
- Implementado validador automático de variáveis de ambiente (`/utils/validateEnv.ts`)
- Validação automática em tempo de desenvolvimento com feedback visual no console

#### Documentação
- Criado `/docs/ENVIRONMENT_VARIABLES.md` - Documentação completa sobre variáveis de ambiente
- Criado `/QUICKSTART.md` - Guia rápido de configuração em 5 minutos
- Criado `/CHANGELOG.md` - Este arquivo de histórico de mudanças
- Atualizado `README.md` com seção completa sobre variáveis de ambiente

#### Melhorias de Segurança
- Credenciais do RD Station movidas para variáveis de ambiente
- URL da aplicação (SEO) movida para variável de ambiente
- Valores padrão apenas como fallback, não mais hardcoded

### 🔄 Modificado

#### `/components/ContactForm.tsx`
- Refatorado para usar variáveis de ambiente (`VITE_RD_STATION_FORM_TOKEN`, `VITE_RD_STATION_ACCOUNT_ID`)
- Criado objeto `RD_STATION_CONFIG` centralizado
- Mantido valores padrão como fallback para retrocompatibilidade

#### `/components/landing/SEO.tsx`
- Adicionado suporte a variável `VITE_APP_URL` para canonical URLs
- Cor do tema (`theme-color`) agora usa `THEME.colors.primary` dinamicamente
- Fallback inteligente para `window.location.origin` em desenvolvimento

#### `/App.tsx`
- Integrado validador automático de variáveis de ambiente
- Validação executa apenas em modo de desenvolvimento

### 📁 Estrutura de Arquivos

```
/
├── .env.example                          # Novo - Template de variáveis
├── .gitignore                            # Novo - Proteção de credenciais
├── CHANGELOG.md                          # Novo - Este arquivo
├── QUICKSTART.md                         # Novo - Guia rápido
├── README.md                             # Atualizado
├── /docs/
│   └── ENVIRONMENT_VARIABLES.md          # Novo - Documentação técnica
├── /utils/
│   └── validateEnv.ts                    # Novo - Validador automático
├── /components/
│   ├── ContactForm.tsx                   # Modificado - Usa .env
│   └── /landing/
│       └── SEO.tsx                       # Modificado - Usa .env
└── App.tsx                               # Modificado - Validação integrada
```

### 🔒 Segurança

- ✅ Arquivo `.env` protegido via `.gitignore`
- ✅ Credenciais removidas do código-fonte
- ✅ Validação de formato para prevenir erros de configuração
- ✅ Documentação sobre rotação de credenciais

### 📝 Notas de Migração

Para projetos existentes que estão atualizando:

1. **Criar arquivo `.env`:**
   ```bash
   cp .env.example .env
   ```

2. **Adicionar suas credenciais:**
   ```env
   VITE_RD_STATION_FORM_TOKEN=seu-token-aqui
   VITE_RD_STATION_ACCOUNT_ID=seu-id-aqui
   ```

3. **Reiniciar servidor:**
   ```bash
   npm run dev
   ```

4. **Verificar console do navegador** para confirmar que não há erros de configuração

### 🎯 Retrocompatibilidade

- ✅ Código anterior continua funcionando (valores padrão como fallback)
- ✅ Sem breaking changes
- ⚠️  Recomenda-se migrar para `.env` para melhor segurança

---

## [1.0.0] - 2024-12-04

### Lançamento Inicial

- Landing Page premium completa
- Integração RD Station
- Sistema de configuração via `ContentConfig.tsx`
- Design responsivo
- SEO otimizado
- Componentes Radix UI

---

## Formato

Este changelog segue o formato [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

### Tipos de Mudanças

- **Adicionado** para novas funcionalidades
- **Modificado** para mudanças em funcionalidades existentes
- **Depreciado** para funcionalidades que serão removidas em breve
- **Removido** para funcionalidades removidas
- **Corrigido** para correções de bugs
- **Segurança** para vulnerabilidades corrigidas
