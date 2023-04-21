import React from 'react'
import { ViewObjModel } from './ViewObjModel'
import { File } from '../file/File'
import { Textarea } from '../textarea/Textarea'
import { Text } from '../text/Text'
import { Image } from '../image/Image'
import { TypeData } from '../../../enum/type-data'

type Props = {
    data?: ViewObjModel,
    className?: string
}

const ViewObj: React.FC<Props> = ({data, className}) => {
    return (
        <div className={className}>
            <div className='row'>
                {data?.data.map((object, i) => {

                    if (object.type = TypeData.FILE) {
                        return (
                            <div className='col-md-12'>
                                <File url={object.value}/>
                            </div>
                        )
                    }

                    if (object.type = TypeData.TEXTAREA) {
                        return (
                            <div className='col-md-12'>
                                <Textarea text={object.value}/>
                            </div>
                        )
                    }

                    if (object.type = TypeData.TEXTAREA) {
                        return (
                            <div className='col-md-12'>
                                <Text text={object.value}/>
                            </div>
                        )
                    }

                    if (object.type = TypeData.TEXTAREA) {
                        return (
                            <div className='col-md-12'>
                                <Image src={object.value}/>
                            </div>
                        )
                    }

                })}
            </div>
        </div>
    )
}

export {ViewObj}