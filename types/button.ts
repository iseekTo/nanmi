export type buttonType = 'success' | 'fail' | 'danger' | 'none'
export type buttonSize = 'large' | 'small' | 'middle'

export interface ButtonProps extends React.HtmlHTMLAttributes<{}> {
    types?: buttonType
    size?: buttonSize
    // onClick?: (event: any) => void
    onClick?: React.EventHandler<React.MouseEvent>,
    defaultcls?: string
    diasbled?: boolean
    loading?: boolean
    icon?: string | React.ReactNode,
    className?: string,
    style?: React.CSSProperties
}
