# Parcial 1 | Construccion de interfaces de usuarios

| El diseño esta inspirado en la [pagina de ejemplo](https://www.virbela.com/go/metaverse-future-of-work)

## Tecnologias
- Se trabajo con Javascript vanila para la funcionalidad
- Se trabajo con bootrstrap para facilitar el uso del css

## Estructura de carpetas
```
┌ css
|  └- // Aca se encuentran los .css
├ img
|  └- // Aca se encuentran las imagenes
├ scripts
|  └- // Aca se encuentran los .js
| // Aca se encuentran los .html
```

## Comentarios
| Se agregaron algunas cosas extra a los requerimientos del parcial
- Se agrego validacion con regex al campo de email del formulario
- Se bloqueo el uso del boton "enviar" en caso de que el email sea invalido
- Se agrego una logica para cargar los datos del email, asunto y cuerpo del mensaje al `mailto`
