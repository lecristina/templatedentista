# Configuração do Site

Este diretório contém toda a configuração de conteúdo do site em formato TypeScript/JSON.

## Arquivo Principal

### `site.config.ts`

Arquivo centralizado com todo o conteúdo textual e dados do site. Este arquivo é usado por todos os componentes React para renderizar o conteúdo dinamicamente.

## Estrutura do Config

```typescript
siteConfig
├── header          // Cabeçalho e navegação
├── hero            // Seção principal
├── stats           // Estatísticas/números
├── about           // Seção sobre
├── services        // Serviços oferecidos
├── whyChoose       // Diferenciais
├── blog            // Posts do blog
├── faq             // Perguntas frequentes
└── footer          // Rodapé
```

## Como Usar

Todos os componentes importam e usam o `siteConfig`:

```typescript
import { siteConfig } from "@/config/site.config"

// Exemplo de uso
const { title, description } = siteConfig.hero
```

## O que está no Config

### ✅ Conteúdo Extraído

- **Textos**: Todos os textos visíveis no site
- **Títulos e Subtítulos**: Headings de todas as seções
- **Descrições**: Parágrafos descritivos
- **Links**: URLs e âncoras de navegação
- **Dados**: Arrays de serviços, posts, FAQs, etc.
- **CTAs**: Textos de botões de ação
- **Metadados**: Informações de contato, redes sociais, etc.

### ⚠️ O que NÃO está no Config (por design)

- **Estilos CSS**: Classes Tailwind e estilos visuais
- **Lógica de Componentes**: Estados React, handlers, etc.
- **Animações**: Configurações do Framer Motion
- **Estrutura HTML**: Layout e estrutura JSX
- **Cores**: Valores de cores específicos (podem ser adicionados no futuro)

## Vantagens

1. **Geração via IA**: A IA pode gerar apenas o JSON/TypeScript
2. **Manutenção**: Todo conteúdo em um único lugar
3. **Type Safety**: TypeScript garante tipos corretos
4. **Reutilização**: Template pode ser usado com diferentes conteúdos
5. **Versionamento**: Fácil de versionar e comparar mudanças

## Próximos Passos

Para tornar o template ainda mais flexível, considere:

1. Adicionar configuração de cores/temas
2. Configurar breakpoints de responsividade
3. Parametrizar animações
4. Adicionar configuração de imagens

