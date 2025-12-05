# Script de Configuração Inicial (PowerShell)
# Execute este script após clonar o projeto para configuração rápida

Write-Host "🚀 Bem-vindo ao setup do Template Landing Page Premium!" -ForegroundColor Cyan
Write-Host ""

# Verificar se o Node está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js não encontrado. Por favor, instale o Node.js primeiro." -ForegroundColor Red
    Write-Host "   Visite: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Verificar se o npm está instalado
try {
    $npmVersion = npm --version
    Write-Host "✅ npm encontrado: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm não encontrado." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Instalar dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependências instaladas com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro ao instalar dependências." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Criar arquivo .env se não existir
if (-Not (Test-Path .env)) {
    Write-Host "📝 Criando arquivo .env a partir do template..." -ForegroundColor Cyan
    Copy-Item .env.example .env
    Write-Host "✅ Arquivo .env criado!" -ForegroundColor Green
    Write-Host "⚠️  ATENÇÃO: Você precisa editar o arquivo .env com suas credenciais do RD Station" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Para configurar:" -ForegroundColor White
    Write-Host "1. Abra o arquivo .env em seu editor" -ForegroundColor White
    Write-Host "2. Adicione suas credenciais do RD Station:" -ForegroundColor White
    Write-Host "   - VITE_RD_STATION_FORM_TOKEN" -ForegroundColor White
    Write-Host "   - VITE_RD_STATION_ACCOUNT_ID" -ForegroundColor White
    Write-Host ""
    Write-Host "Consulte o README.md para mais detalhes." -ForegroundColor White
} else {
    Write-Host "⚠️  Arquivo .env já existe. Pulando..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Setup concluído!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximos passos:" -ForegroundColor Cyan
Write-Host "1. Configure suas credenciais no arquivo .env" -ForegroundColor White
Write-Host "2. Execute 'npm run dev' para iniciar o servidor de desenvolvimento" -ForegroundColor White
Write-Host "3. Acesse http://localhost:5173 no seu navegador" -ForegroundColor White
Write-Host ""
Write-Host "Documentação útil:" -ForegroundColor Cyan
Write-Host "- README.md - Documentação completa" -ForegroundColor White
Write-Host "- QUICKSTART.md - Guia rápido" -ForegroundColor White
Write-Host "- docs/ENVIRONMENT_VARIABLES.md - Detalhes sobre variáveis de ambiente" -ForegroundColor White
Write-Host ""
Write-Host "Bom desenvolvimento! 🚀" -ForegroundColor Cyan
