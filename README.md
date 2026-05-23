# GenesiTech Site Institucional

Site institucional/comercial da GenesiTech, criado em React + Vite para apresentar a empresa como plataforma de tecnologia aplicada a cadeias produtivas de alimentos e proteína animal.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicacao

O projeto inclui um workflow em `.github/workflows/deploy.yml` para publicar no GitHub Pages a partir do build gerado em `dist`.

O dominio principal esta configurado em:

```txt
CNAME
public/CNAME
```

## Editar soluções e produtos

Os cards da seção "Soluções e produtos" ficam em:

```txt
src/data/solutions.js
```

Para adicionar uma nova solução, copie um objeto do array e ajuste:

- `name`
- `category`
- `description`
- `image`
- `link`
- `status`
- `cta`

## Conteúdo

O site é institucional e comercial. A linguagem evita detalhes técnicos internos e foca em monitoramento, automação, rastreabilidade, segurança operacional e inteligência aplicada a operações de proteína animal.
