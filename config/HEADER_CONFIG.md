# Configuração do Header

## ✅ Elementos Extraídos para `site.config.ts`

Os seguintes elementos foram movidos para o arquivo de configuração:

### 1. **Logo**
- ✅ Nome: "DENT"
- ✅ Subtítulo: "Odontologia"
- ✅ Link de destino: "#inicio"
- ✅ Ícone SVG (path e viewBox)

### 2. **Navegação**
- ✅ Todos os itens do menu (label e href):
  - Início → #inicio
  - Sobre → #sobre
  - Serviços → #servicos
  - Blog → #blog
  - FAQ → #faq
  - Contato → #contato

### 3. **CTA (Call to Action)**
- ✅ Texto do botão: "Agendar Consulta"

---

## ⚠️ Elementos que AINDA estão Hardcoded no Componente

Os seguintes elementos permanecem no componente `Header.tsx` porque são relacionados a lógica, estilo ou estrutura:

### 1. **Lógica e Estados**
- Estados React (`isScrolled`, `isMobileMenuOpen`)
- Lógica de scroll (detecção de scroll > 20px)
- Handlers de eventos (onClick, scroll listeners)

### 2. **Estilos e Classes CSS**
- Classes Tailwind condicionais baseadas em `isScrolled`
- Cores específicas (`#1a4d4d`, `#2d7a7a`, etc.)
- Tamanhos e espaçamentos (w-12, h-12, px-6, py-2.5, etc.)
- Gradientes e efeitos visuais
- Transições e animações

### 3. **Estrutura HTML/JSX**
- Layout e estrutura do componente
- Responsividade (classes `lg:hidden`, `hidden lg:flex`, etc.)
- Animações do Framer Motion (initial, animate, transition)

### 4. **Ícones**
- Ícones do Lucide React (Menu, X) - podem ser configuráveis no futuro

---

## 📝 Próximos Passos

Para tornar o Header completamente configurável via JSON, seria necessário:

1. **Cores e Temas**: Mover cores para o config (ex: `colors.primary`, `colors.secondary`)
2. **Estilos Condicionais**: Criar sistema de temas (claro/escuro)
3. **Breakpoints**: Configurar breakpoints de responsividade
4. **Animações**: Tornar configurações de animação parametrizáveis

Por enquanto, apenas o **conteúdo textual e links** foram extraídos, que é o mais importante para geração via IA.

