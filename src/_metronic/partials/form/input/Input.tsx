import React from 'react'

type Props = {
    label?: string,
    value?: string,
    className?: string
}

const Input: React.FC<Props> = ({value, label='Label Title', className}) => {

    const updateData = () => {

    }
    return (
        <div className={className}>
            <label className='col-lg-12 col-form-label'>{label}</label>
                <div className='col-lg-12'>
                    <div className='spinner spinner-sm spinner-primary spinner-right'>
                        <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={value}
                        onChange={(e) => updateData()}
                    />
                </div>
            </div>
        </div>
    )
}

export {Input}
