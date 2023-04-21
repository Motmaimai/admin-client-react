import React from 'react'
import Select from 'react-select'
import { SelectFilterModel } from './SelectFilterModel'

type Props = {
    label?: string,
    options: Array<SelectFilterModel>,
    className?: string
}
const SelectFilter: React.FC<Props> = ({label = 'Label Title', options, className}) => {
    return (
        <div className={className}>
            <label className='col-lg-12 col-form-label'>{label}</label>
            <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                    <Select options={options} className={className}/>
                </div>
            </div>
        </div>
    )
}

export {SelectFilter}
