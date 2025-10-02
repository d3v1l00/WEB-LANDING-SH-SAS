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

## Deploy manual (sin GitHub) con Netlify CLI
Si no quieres vincular GitHub, puedes subir solo la carpeta compilada `dist/` usando la CLI de Netlify.

1) Asegura el fallback de SPA
- Este proyecto incluye `public/_redirects` con:
	`/* /index.html 200`
- Al compilar, ese archivo se copia a `dist/` y permite que las rutas internas funcionen.

2) Compila localmente
```powershell
npm run build
```

3) Instala y autentica la CLI (cuenta de la empresa)
```powershell
npm install -g netlify-cli
netlify login
```
Se abrirá el navegador para autorizar la sesión. Usa la cuenta de la empresa.

4) Sube la carpeta `dist/`
Primera vez (crea el sitio y elige el team de la empresa cuando lo pida):
```powershell
netlify deploy --dir=dist --prod
```
La CLI te permitirá asignar un nombre (opcional). Guardará el `siteId` en `.netlify/` para futuros despliegues.

5) Próximos despliegues
```powershell
npm run build
netlify deploy --dir=dist --prod
```

Notas:
- No hace falta conectar GitHub para este flujo.
- El sitio queda publicado en el subdominio de Netlify; luego puedes agregar tu dominio propio en Site settings → Domain management.
