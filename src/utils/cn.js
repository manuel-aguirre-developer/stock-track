/**
 * cn (class names)
 * Une clases CSS condicionales de forma segura.
 *
 * Uso:
 * cn("base", condicion && "clase-extra", otraCondicion && "otra-clase")
 *
 * - Elimina falsy values (false, null, undefined)
 * - Devuelve un string listo para className
 * - No tiene dependencias
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
