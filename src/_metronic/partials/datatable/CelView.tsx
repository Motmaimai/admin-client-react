import React from 'react'
import { DataTableSource } from './DataTableModel'
import { File } from '../view/file/File'
import { TypeData } from '../../enum/type-data'
import { Textarea } from '../view/textarea/Textarea'

type Props = {
    data?: DataTableSource,
    className?: string
}

const CelView: React.FC<Props> = ({data, className}) => {
    return (
        <div className={className}>
            {(() => {
                if (data?.dataType == TypeData.FILE) {
                    return (
                        <div>someCase</div>
                    )
                }  
                if (data?.dataType == TypeData.TEXTAREA) {
                    return (
                        <Textarea className='text-dark fw-bold text-hover-primary fs-6' 
                        text={data.value} />
                    )
                } 
            })()}
        </div>
    )
}

export {CelView}