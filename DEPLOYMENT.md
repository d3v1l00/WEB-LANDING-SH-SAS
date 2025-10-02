# Guía de Deployment

## GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DEL_REPO>
git push -u origin main
```

## Hosting estático
- Ejecuta `npm run build` y sirve el contenido de `dist/`.
- Para Netlify: build `npm run build`, publish `dist` (usa `netlify.toml` incluido para SPA).
- Para otros proveedores, configura redirect a `index.html` para rutas internas.

## Notas de seguridad
No se requieren variables de entorno para el formulario (Formspree). No se exponen credenciales en el cliente.