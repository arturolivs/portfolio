export function opacify(hex_color: string, opacity: number): string {
  hex_color = hex_color.slice(1)
  const splitAt = 2

  const red = parseInt(hex_color.substring(0, splitAt), 16)
  const green = parseInt(hex_color.substring(splitAt, splitAt + splitAt), 16)
  const blue = parseInt(hex_color.substring(splitAt + splitAt), 16)

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}
