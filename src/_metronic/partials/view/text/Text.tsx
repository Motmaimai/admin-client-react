import React from 'react'

type Props = {
    text?: string,
    className?: string
}

const Text: React.FC<Props> = ({text, className}) => {

    return (
        <div className={className}>
            <p>{text}</p>
        </div>
    )
}

export {Text}
