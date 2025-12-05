/**
 * Hook para validar ambiente apenas em desenvolvimento
 */
export function validateEnvDevelopment(): void {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
    validateEnvironment();
  }
}

/**
 * Obtém uma variável de ambiente com fallback
 */
export function getEnv(key: string, fallback: string = ''): string {
  return (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) || fallback;
}

/**
 * Verifica se está em modo de produção
 */
export function isProduction(): boolean {
  return typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PROD === true;
}

/**
 * Verifica se está em modo de desenvolvimento
 */
export function isDevelopment(): boolean {
  return typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV === true;
}