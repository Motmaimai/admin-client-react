/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { SelectFilter } from '../../../../../_metronic/partials';
import { SelectFilterModel } from '../../../../../_metronic/partials/form/select-filter/SelectFilterModel';
import { ISettings, defaultSettings } from '../create/CreatesModel';
import { CheckBox } from '../../../../../_metronic/partials/form/check-box/CheckBox';

export function Update() {
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
          <div className="row">
            {/* begin::Form row */}
            <div className='row col-lg-6 mb-3'>
              <label className='col-lg-12 col-form-label'>Người gửi</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <SelectFilter options={options} />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row col-lg-6 mb-3'>
              <label className='col-lg-12 col-form-label'>Người xử lý</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <SelectFilter options={options} />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row col-lg-6 mb-3'>
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
            <div className='row col-lg-6 mb-3'>
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
            <div className='row col-lg-6 mb-3'>
              <label className='col-lg-12 col-form-label'>Hệ thống</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <SelectFilter options={options} />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row col-lg-6 mb-3'>
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
            <div className='row col-lg-6 mb-3'>
              <label className='col-lg-12 col-form-label'>Loại hỗ trợ</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <SelectFilter options={options} />
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row col-lg-6 mb-3'>
              <label className='col-lg-12 col-form-label'>Loại hỗ trợ</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>

                  <CheckBox checked={checked} />
                  
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row col-lg-12 mb-3'>
              <label className='col-lg-12 col-form-label'>Nội dung</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <textarea
                    className='form-control form-control-lg form-control-solid'
                    onChange={(e) => updateData({username: e.target.value})}
                    defaultValue={data.username}
                  >
                  </textarea>
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row col-lg-12 mb-3'>
              <label className='col-lg-12 col-form-label'>Giải pháp</label>
              <div className='col-lg-12'>
                <div className='spinner spinner-sm spinner-primary spinner-right'>
                  <textarea
                    className='form-control form-control-lg form-control-solid'
                    onChange={(e) => updateData({username: e.target.value})}
                    defaultValue={data.username}
                  >
                    
                  </textarea>
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className='row mt-3'>
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
