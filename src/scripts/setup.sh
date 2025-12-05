#!/bin/bash

# Script de Configuração Inicial
# Execute este script após clonar o projeto para configuração rápida

echo "🚀 Bem-vindo ao setup do Template Landing Page Premium!"
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se o Node está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não encontrado. Por favor, instale o Node.js primeiro.${NC}"
    echo "   Visite: https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js encontrado: $(node --version)${NC}"
echo ""

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não encontrado.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm encontrado: $(npm --version)${NC}"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependências instaladas com sucesso!${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências.${NC}"
    exit 1
fi

echo ""

# Criar arquivo .env se não existir
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env a partir do template..."
    cp .env.example .env
    echo -e "${GREEN}✅ Arquivo .env criado!${NC}"
    echo -e "${YELLOW}⚠️  ATENÇÃO: Você precisa editar o arquivo .env com suas credenciais do RD Station${NC}"
    echo ""
    echo "Para configurar:"
    echo "1. Abra o arquivo .env em seu editor"
    echo "2. Adicione suas credenciais do RD Station:"
    echo "   - VITE_RD_STATION_FORM_TOKEN"
    echo "   - VITE_RD_STATION_ACCOUNT_ID"
    echo ""
    echo "Consulte o README.md para mais detalhes."
else
    echo -e "${YELLOW}⚠️  Arquivo .env já existe. Pulando...${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Setup concluído!${NC}"
echo ""
echo "Próximos passos:"
echo "1. Configure suas credenciais no arquivo .env"
echo "2. Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
echo "3. Acesse http://localhost:5173 no seu navegador"
echo ""
echo "Documentação útil:"
echo "- README.md - Documentação completa"
echo "- QUICKSTART.md - Guia rápido"
echo "- docs/ENVIRONMENT_VARIABLES.md - Detalhes sobre variáveis de ambiente"
echo ""
echo "Bom desenvolvimento! 🚀"
