type classes = { [key: string]: string };

export const classGenerator = (className: string, styles: classes) => (isHoverable: boolean|undefined, isSelectable: boolean|undefined) => (
  `${styles[`${className}`]}${isHoverable ? ` ${styles[`${className}Hoverable`]}` : ``}${isSelectable ? ` ${styles[`${className}Selectable`]}` : ``}`
)