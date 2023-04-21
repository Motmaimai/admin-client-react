import React from 'react'

type Props = {
    src?: string,
    alt?: string,
    className?: string
}

const Image: React.FC<Props> = ({src, alt, className}) => {
    return (
        <div className={className}>
            <img src={src} alt={alt} />
        </div>
    )
}

export {Image}