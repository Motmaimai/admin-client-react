import React, {useState} from 'react'
import {defaultSettings, ISettings} from './CreatesModel'
import { SelectFilter } from '../../../../../_metronic/partials'
import { SelectFilterModel } from '../../../../../_metronic/partials/form/select-filter/SelectFilterModel'
import { CheckBox } from '../../../../../_metronic/partials/form/check-box/CheckBox'
import { Textarea } from '../../../../../_metronic/partials/form/textarea/Textarea'

export function Create() {
  const options: Array<SelectFilterModel> = [
    {
      value: "Demo",
      label: "Demo" 
    }
  ]

  var checked = true;

  const [data, setData] = useState<ISettings>(defaultSettings)
  //const [hasError, setHasError] = useState(false);

  const updateData = (fieldsToUpdate: Partial<ISettings>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  return (
    <div className='card'>
      {/* begin::Form */}
      <form className='form d-flex flex-center'>
        <div className='card-body py-20'>
          {/* begin::Form row */}
          <div className="row m-0">
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <SelectFilter label='Người gửi' options={options} />
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <SelectFilter label='Người xử lý' options={options} />
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <label className='col-lg-12 col-form-label'>Hình ảnh</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='file'
                    onChange={(e) => updateData({username: e.target.value})}
                  />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <label className='col-lg-12 col-form-label'>File</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='file'
                    onChange={(e) => updateData({username: e.target.value})}
                  />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <SelectFilter label='Hệ thống' options={options} />
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <label className='col-lg-12 col-form-label'>Date Support</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    onChange={(e) => updateData({username: e.target.value})}
                  />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <SelectFilter label='Loại hỗ trợ' options={options} />
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-3 mb-3'>
              <label className='col-lg-12 col-form-label'>Loại hỗ trợ</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <CheckBox checked={checked} />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-12 mb-3'>
              <Textarea value={data.username} label="Nội dung" />
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='col-lg-12 mb-3'>
              <Textarea value={data.username} label="Giải pháp" />
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='mt-3'>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <button type='reset' className='btn btn-primary fw-bolder px-6 py-3 me-3 float-end'>
                    Save Changes
                  </button>
                  <button
                    type='reset'
                    className='btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3 float-end'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            {/* end::Form row */}
          </div>
          {/* end::Form row */}
        </div>
      </form>
      {/* end::Form */}
    </div>
  )
}
