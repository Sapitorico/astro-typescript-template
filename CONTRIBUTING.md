## 🤝 Cómo Contribuir

### 🌍 Para Miembros de la Comunidad

Sigue estos pasos si eres un contribuidor externo:

1. Haz un [_fork_](https://github.com/sapitorico/astro-typescript-template/fork) del proyecto
`2. Clona tu fork localmente:
    ```bash
    git clone https://github.com/<TU_USUARIO>/astro-typescript-template.git
    ```
3. Configura el upstream:
    ```bash
    git remote add upstream https://github.com/sapitorico/astro-typescript-template.git
    ```
4. Crea tu Rama de Funcionalidad:
    ```bash
    git switch -c feature/Caracteristica
    ```
5. Realiza y commit tus Cambios:
    ```bash
    git commit -m 'Add: alguna Característica'
    ```
6. Sincroniza con upstream:
    ```bash
    git fetch upstream
    git rebase upstream/main
    ```
7. Haz Push a la Rama:
    ```bash
    git push origin feature/Caracteristica`
    ```
8. Abre una [_pull request_](https://github.com/sapitorico/astro-typescript-template/pulls)

### 👥 Para Colaboradores del Repositorio

Si tienes acceso directo al repositorio:

1. Clona directamente el repo:
    ```bash
    git clone https://github.com/sapitorico/astro-typescript-template.git
    ```
2. Crea tu Rama de Funcionalidad:
    ```bash
    git switch -c feature/Caracteristica
    ```
5. Realiza y commit tus Cambios:
    ```bash
    git commit -m 'Add: alguna Característica'
    ```
6. Haz Push a la Rama:
    ```bash
    git push origin feature/Caracteristica`
    ```
5. Abre una [_pull request_](https://github.com/sapitorico/astro-typescript-template/pulls)

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


<div align="right">
  <a href="#" style="
    display: inline-block;
    padding: 5px 10px;
    background: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
  ">↑ Subir</a>
</div>
