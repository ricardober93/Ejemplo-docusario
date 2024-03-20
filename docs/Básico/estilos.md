---
sidebar_position: 2
---

# Estilos

Los estilos estan en base de un tema para escribir en variables de Css:
Se pueden sobreescribir los estilos que tienen los componentes por defecto


```md title="globals.css"
# variables root

.root{
  ---btn-primary: var(#000)
}

```

Automanticamente el componente toca las variables que se implmentan en los estilos globales.

```md title="any component"
# Component Jsx

<Button>
 Click Me!
</Button>

```