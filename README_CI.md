# CI/CD

Incluye un workflow de GitHub Actions que:
- Instala dependencias (npm ci)
- Ejecuta lint (si existe configuración)
- Genera el build de producción (Vite)
- Publica el artefacto `dist`

Para CD, conecta Netlify al repositorio; hará build en cada push a `main`.
