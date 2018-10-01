import * as React from 'react'
import logo from '../logo.svg'

interface IProps {
    logo?: string,
}

const Logo: React.SFC<IProps> = (props: IProps) => {
    return(
        <img src={props.logo} className="App-logo" alt='Logo' />
    )
}

Logo.defaultProps = {
    logo,
}

export default Logo
