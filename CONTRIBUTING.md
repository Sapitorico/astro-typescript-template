## 🤝 Cómo Contribuir

Aquí tienes una guía rápida:

1. Clona el repo (`git clone <URL>`)
2. Crea tu Rama de Funcionalidad (`git switch -c feature/Caracteristica`)
3. Realiza tus Cambios (`git commit -m 'Add: alguna Característica'`)
4. Haz Push a la Rama (`git push origin feature/Caracteristica`)
5. Abre una [_pull request_](https://github.com/<username>/<proyect_name>/pulls)

### 📋 Estándares de Código

#### Commits

Describe tus cambios utilizando los siguientes prefijos

- `feat:` - Nuevas características
- `fix:` - Correcciones de bugs
- `docs:` - Cambios en documentación
- `style:` - Cambios que no afectan el código (espacios, formato, etc)
- `refactor:` - Refactorización del código
- `test:` - Añadir o modificar tests
- `chore:` - Cambios en el proceso de build o herramientas auxiliares

Ejemplo: `feat: add newsletter subscription component`

#### Código

- Utiliza en lo posible el estilo de codificación configurado
- Nombra las variables y funciones en camelCase
- Utiliza nombres descriptivos en variables y funciones
- Comenta tu código cuando solo sea necesario
- Sigue las reglas de ESLint, Prettier y Oxlint configuradas en el proyecto

#### CSS/TailwindCSS

- Utiliza las clases de Tailwind siempre que sea posible
- Evita CSS personalizado a menos que sea absolutamente necesario

#### Pull Requests

- Describe claramente los cambios realizados
- Asegúrate de que los tests pasen si lo hay
- Referencia los issues relacionados si los hay
- Mantén los PR pequeños y enfocados en una sola característica

### 🚫 Qué evitar

- No hagas commit directamente a `main`
- No uses `!important` en CSS
- No dejes console.logs en el código
- No modifiques la configuración del proyecto sin consenso

### 👥 Proceso de Review

1. Los PR necesitan al menos una aprobación
2. Atiende los comentarios del review
3. Asegúrate de que el CI/CD pase

### 🌟 Buenas prácticas

- **Mantén tus commits limpios y descriptivos**.
- **Sigue las convenciones de código del proyecto**.
- **Actualiza tu rama con frecuencia** para mantenerla al día con la rama principal del proyecto.
- **Uso de objetos y typos globales** como `new Date` -> `new window.Date`, `NodeListOf` -> `globalThis.NodeListOf`, `NodeJS` -> `globalThis.NodeJS`. En caso de no saber que usar, referenciad en [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) o en la documentación del framework [Astro](https://docs.astro.build/en/guides/typescript/#extending-window-and-globalthis)


<p align="right"><a href="#readme-top">volver arriba ⬆️</a></p>
