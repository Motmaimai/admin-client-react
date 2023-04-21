import React from 'react'

type Props = {
    text?: string,
    className?: string
}

const Textarea: React.FC<Props> = ({text, className}) => {

    return (
        <div className={className}>
            <p>{text}</p>
        </div>
    )
}

export {Textarea}