# Template Dentista - DENT

Template moderno e sofisticado para clínica odontológica desenvolvido com Next.js, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Características

- ✨ Design moderno e sofisticado
- 📱 Totalmente responsivo (mobile-first)
- 🎨 Animações elegantes com Framer Motion
- 🎯 Carrossel de serviços com navegação por setas (desktop) e swipe (mobile)
- 🖼️ Placeholders para imagens no Hero e Sobre
- ⚡ Performance otimizada com Next.js 14
- 🎨 Componentes shadcn/ui

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Estrutura

- `app/` - Páginas e layouts Next.js
- `components/` - Componentes React reutilizáveis
- `components/ui/` - Componentes shadcn/ui
- `lib/` - Utilitários

## 🎨 Personalização

### Cores

As cores principais estão definidas em `app/globals.css`:
- Primary: `#1a4d4d` (teal escuro)
- Accent: `#2d7a7a` (teal médio)
- Background: `#f5f5f0` (off-white)

### Imagens

Para adicionar imagens:
1. Coloque as imagens na pasta `public/`
2. Descomente e ajuste os componentes `Image` em:
   - `components/Hero.tsx`
   - `components/About.tsx`

## 📄 Licença

Este projeto é um template livre para uso.

