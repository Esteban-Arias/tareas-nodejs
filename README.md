# Aplicación de tareas por realizar
Esta aplicación permite agregar tareas a una lista, con la opción de marcarlas como realizadas (true) o pendientes (false), además de eliminar cualquier tarea.
## Comandos
### Crear tarea
```
node app crear --descripcion "TAREA" 
```
### Actualizar tarea 
Para actualizar el estado de una tarea:
#### Tarea realizada
Por defecto el completado lleva un valor de true:
```
node app actualizar --descripcion "TAREA" --completado
```
#### Tarea pendiente
En caso de que la tarea esté pendiente de nuevo, se pone en estado false:
```
node app actualizar --descripcion "TAREA" --completado false
```

### Borrar tarea 
Elimina una tarea de la base de datos:
```
node app borrar --descrpcion "TAREA" 
``` 
## Notas importantes
La descripcion de la tarea debe ir sintácticamente igual, si no no va la va a reconocer.
## Shortcuts
El --descripcion es equivalente a -d. Y el --completado a -c.

