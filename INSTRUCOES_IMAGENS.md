# 📸 Instruções para Adicionar Imagens

## Hero Section

Para adicionar a imagem no Hero (`components/Hero.tsx`):

1. Coloque sua imagem na pasta `public/` (ex: `public/hero-image.jpg`)
2. Descomente as linhas 72-78 em `components/Hero.tsx`
3. Ajuste o caminho da imagem se necessário
4. Remova ou comente o div com placeholder (linhas 62-70)

**Tamanho recomendado:** 800x600px ou maior (proporção 4:3 ou 16:9)

```tsx
<Image
  src="/hero-image.jpg"
  alt="Dentista sorrindo"
  fill
  className="object-cover"
  priority
/>
```

## Sobre Section

Para adicionar a imagem na seção Sobre (`components/About.tsx`):

1. Coloque sua imagem na pasta `public/` (ex: `public/about-image.jpg`)
2. Descomente as linhas correspondentes em `components/About.tsx`
3. Ajuste o caminho da imagem se necessário
4. Remova ou comente o div com placeholder

**Tamanho recomendado:** 600x800px ou maior (proporção vertical)

```tsx
<Image
  src="/about-image.jpg"
  alt="Sobre nossa clínica"
  fill
  className="object-cover"
/>
```

## Configuração do Next.js

Certifique-se de que o arquivo `next.config.js` tenha o domínio configurado se estiver usando imagens externas:

```js
images: {
  domains: ['seu-dominio.com'],
}
```

