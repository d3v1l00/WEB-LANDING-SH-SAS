# Deploy en Netlify

SPA (React + Vite) sin secretos en el cliente. El formulario usa Formspree.

## Requisitos
- Cuenta de GitHub
- Cuenta de Netlify

## Pasos
1. Sube este repositorio a GitHub.
2. En Netlify: Add new site → Import an existing project → GitHub → selecciona el repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

## Notas
- `netlify.toml` ya configura el redirect SPA hacia `index.html`.
- Assets públicos en `/public` (por ejemplo, `/logo.png`).
