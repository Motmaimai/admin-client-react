import React from 'react'
import { KTSVG } from '../../../helpers'

type Props = {
    url?: string,
    alt?: string,
    className?: string
}

const File: React.FC<Props> = ({url, alt, className}) => {
    return (
        <div className={className}>
            <a href={url} download>
                <KTSVG path="/media/icons/duotune/files/fil008.svg" className="svg-icon-muted svg-icon-2hx" />
            </a>
        </div>
    )
}

export {File}