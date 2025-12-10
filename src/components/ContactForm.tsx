import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { CONTENT } from "./landing/ContentConfig";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Armazena o ID do projeto para buscar o título
  const [selectedProjectId, setSelectedProjectId] = useState<string | number>("");
  
  const formRef = useRef<HTMLFormElement>(null);
  const { formConfig } = CONTENT; // Use config from ContentConfig
  const { provider, rdStation, messages } = formConfig || {};

  // Listen for project interest events from the Projects component
  useEffect(() => {
    const handleProjectInterest = (e: CustomEvent) => {
      const projectData = e.detail; 
      if (projectData) {
        setSelectedProjectId(projectData.id);
      }
    };

    window.addEventListener('projectInterest', handleProjectInterest as EventListener);
    
    return () => {
      window.removeEventListener('projectInterest', handleProjectInterest as EventListener);
    };
  }, []);

  // Load RD Station script
  useEffect(() => {
    if (provider !== 'rd-station' || !rdStation?.token || !rdStation?.formId) {
      return;
    }

    const scriptId = 'rd-station-script';
    // Check if script already exists
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).RDStationForms) {
        try {
            new (window as any).RDStationForms(
            rdStation.formId,
            rdStation.token
            ).createForm();
        } catch (error) {
            console.error("RD Station Form Init Error:", error);
        }
      }
    };

    document.body.appendChild(script);

    // Cleanup not strictly necessary for global script but good practice if SPA routing
    return () => {
      // We don't remove script to avoid re-downloading on nav back
    };
  }, [provider, rdStation]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 1. Capturar dados do formulário visual
    const formData = new FormData(e.currentTarget);
    
    // Buscar o NOME do projeto baseado no ID selecionado
    const selectedProject = CONTENT.projects.items.find(p => String(p.id) === String(selectedProjectId));
    const projectName = selectedProject ? selectedProject.title : (selectedProjectId === "0" ? "Outro / Geral" : "");

    // Montar o Payload com o NOME e o ID do projeto
    const payload = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      mensagem: formData.get("mensagem") as string,
      projeto: projectName, // Envia o NOME (campo legível)
      id_projeto: selectedProjectId ? String(selectedProjectId) : "" // Envia o ID (campo técnico)
    };

    // 2. Envio para RD Station
    if (provider === 'rd-station' && rdStation?.formId) {
        const rdContainer = document.getElementById(rdStation.formId);
        const rdForm = rdContainer?.querySelector('form');

        if (rdForm) {
            try {
                // Função auxiliar para preencher inputs nativos
                const setNativeValue = (element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, value: string) => {
                    const lastValue = element.value;
                    element.value = value;
                    const event = new Event('input', { bubbles: true });
                    const tracker = (element as any)._valueTracker;
                    if (tracker) {
                        tracker.setValue(lastValue);
                    }
                    element.dispatchEvent(event);
                };

                // Mapeamento de campos padrão do RD
                const nameInput = rdForm.querySelector('input[name="name"]') as HTMLInputElement;
                const emailInput = rdForm.querySelector('input[name="email"]') as HTMLInputElement;
                const phoneInput = (rdForm.querySelector('input[name="mobile_phone"]') || rdForm.querySelector('input[name="personal_phone"]')) as HTMLInputElement;
                
                if (nameInput) setNativeValue(nameInput, payload.nome);
                if (emailInput) setNativeValue(emailInput, payload.email);
                if (phoneInput) setNativeValue(phoneInput, payload.telefone);

                // FUNÇÃO DE FORÇA BRUTA PARA CAMPOS CUSTOMIZADOS
                const setCustomField = (possibleNames: string[], value: string) => {
                    let found = false;
                    // 1. Tenta encontrar um campo existente
                    for (const name of possibleNames) {
                        const input = rdForm.querySelector(`input[name="${name}"]`) as HTMLInputElement;
                        if (input) {
                            input.value = value; // Atribuição direta
                            // Dispara eventos para garantir que scripts de terceiros peguem a mudança
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            input.dispatchEvent(new Event('change', { bubbles: true }));
                            found = true;
                        }
                    }
                    
                    // 2. Se não encontrou nenhum, cria um campo com o primeiro nome da lista (o mais provável)
                    if (!found) {
                        const nameToCreate = possibleNames[0];
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = nameToCreate;
                        input.value = value;
                        rdForm.appendChild(input);
                    }
                };

                // TRATAMENTO: CAMPO 'PROJETO' (NOME)
                // Tenta todas as variantes possíveis para "Nome do Projeto"
                setCustomField(
                    ['projeto', 'nome_projeto', 'imovel', 'empreendimento', 'interesse'], 
                    payload.projeto
                );

                // TRATAMENTO: CAMPO 'ID_PROJETO' (TÉCNICO)
                // Configurado explicitamente no RD Station como "id_projeto"
                setCustomField(
                    ['id_projeto'],
                    payload.id_projeto
                );

                // Mensagem
                const messageInput = rdForm.querySelector('textarea, input[name="message"], input[name="mensagem"]') as HTMLInputElement;
                if (messageInput) {
                    setNativeValue(messageInput, payload.mensagem);
                }
                
                // Submit via Iframe
                let iframe = document.getElementById('rd-submission-iframe') as HTMLIFrameElement;
                if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = 'rd-submission-iframe';
                iframe.name = 'rd-submission-iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                }
                
                rdForm.target = 'rd-submission-iframe';
                rdForm.submit();
                
                // Pequeno delay para garantir o envio antes do redirect
                await new Promise(resolve => setTimeout(resolve, 1000));

            } catch (error) {
                console.error("Error submitting to RD Station:", error);
            }
        } else {
            // RD form not ready or blocked, proceed with mock/fallback
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } else {
        // Mock submission
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    setIsLoading(false);
    window.location.href = '/obrigado';
  };

  return (
    <>
      {/* Container do Formulário RD Station (Invisível) */}
      {provider === 'rd-station' && rdStation?.formId && (
        <div 
            id={rdStation.formId}
            role="main" 
            style={{ position: 'absolute', left: '-9999px', top: '-9999px', visibility: 'hidden' }} 
            aria-hidden="true"
        ></div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md mx-auto"
      >
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome</Label>
          <Input 
            id="nome" 
            name="nome" 
            type="text" 
            required 
            placeholder="Seu nome" 
            className="bg-white border-gray-300 focus:border-[var(--primary)] focus:ring-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            required 
            placeholder="seuemail@exemplo.com" 
            className="bg-white border-gray-300 focus:border-[var(--primary)] focus:ring-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</Label>
          <Input 
            id="telefone" 
            name="telefone" 
            type="tel" 
            required 
            placeholder="(00) 00000-0000" 
            className="bg-white border-gray-300 focus:border-[var(--primary)] focus:ring-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project_select" className="text-sm font-medium text-gray-700">Projeto de Interesse</Label>
          <div className="relative">
            <select
              id="project_select"
              name="project_select"
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
            >
              <option value="">Selecione um projeto (opcional)</option>
              {CONTENT.projects.items.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
              <option value="0">Outro / Geral</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem" className="text-sm font-medium text-gray-700">Mensagem</Label>
          <Textarea 
            id="mensagem" 
            name="mensagem" 
            rows={4} 
            required 
            placeholder="Digite sua mensagem" 
            className="bg-white border-gray-300 focus:border-[var(--primary)] focus:ring-[var(--primary)] resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium tracking-wide py-6 disabled:opacity-70"
        >
          {isLoading ? (messages?.loadingText || "ENVIANDO...") : (messages?.submitText || "ENVIAR MENSAGEM")}
        </Button>
      </form>
    </>
  );
}
