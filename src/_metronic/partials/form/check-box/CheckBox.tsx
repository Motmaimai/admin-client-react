import React from 'react'

type Props = {
    checked: boolean
    className?: string
}
const trueTxt = <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>Đã hoàn thành</a>
const falseTxt = <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>Chưa hoàn thành</a>

const CheckBox: React.FC<Props> = ({checked, className}) => {
    if (checked) {
        var titleTxt = trueTxt
    }else{
        var titleTxt = falseTxt
    }

    const updateData = () => {
        checked = !checked;
    }
    return (
        <div className={className}>
            <div className='d-flex flex-stack'>
                <div className='d-flex'>
                    <div className='d-flex flex-column'>
                        {titleTxt}
                    <div className='fs-6 fw-bold text-gray-400'>Tích khi công việc đã được hoàn thành</div>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='form-check form-check-solid form-switch'>
                    <input
                        className='form-check-input w-45px h-30px'
                        type='checkbox'
                        onChange={() =>
                            updateData()
                        }
                    />
                    <label className='form-check-label' htmlFor='slackswitch'></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {CheckBox}
