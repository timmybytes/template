export type ContainerProps = CustomCssProps & {
  direction?: 'row' | 'column'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  /** Only takes effect on multi-line flexible containers where flex-wrap: wrap || wrap-reverse */
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
  wrap?: 'wrap' | 'nowrap'
  width?: string | number
  height?: string | number
  padding?: string | number
  margin?: string | number
  border?: string | number
  borderRadius?: string | number
  backgroundColor?: string
  color?: string
}

export type TypographyProps = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strike?: boolean
  center?: boolean
  left?: boolean
  right?: boolean
  uppercase?: boolean
  lowercase?: boolean
}
