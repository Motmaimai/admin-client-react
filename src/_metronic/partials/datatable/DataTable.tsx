/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../helpers'
import { DataTableModel, DataTableSource } from './DataTableModel'
import { ActivityDrawer } from '../layout/activity-drawer/ActivityDrawer'
import { CelView } from './CelView'
import { useIntl } from 'react-intl'

type Props = {
  className?: string,
  dataTitle: Array<DataTableModel>,
  dataSource: Array<DataTableSource>,
  updateModel?: any,
  viewModel?: any,
  title?: string,
  titleModal?: string
}

const DataTable: React.FC<Props> = ({title, titleModal = 'Activity Logs', dataTitle, dataSource, updateModel, viewModel, className}) => {
  const intl = useIntl()
  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>{intl.formatMessage({id: 'DATA_TABLE.TITLE'})} : {title}</span>
        <span className='text-muted mt-1 fw-semibold fs-7'>{intl.formatMessage({id: 'DATA_TABLE.COUNT'})} {dataSource.length}</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>{intl.formatMessage({id: 'DATA_TABLE.QUICK_ACTION'})}</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                Export excel
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                Export Pdf
              </a>
            </div>
            {/* end::Menu item */}
          
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                {dataTitle.map((object, i) => {
                  return <th className='min-w-150px'>{object.value}</th>
                })}
                <th className='min-w-100px text-end'>{intl.formatMessage({id: 'DATA_TABLE.ACTION'})}</th>

              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                {dataSource.map((object, i) => {
                  return <CelView data={object} />
                })}
                
                <td className='text-end'>
                  <a
                    id='kt_activities_view_toggle'
                    href='javascript:void(0)'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
                  </a>
                  <a
                    id="kt_activities_update_toggle"
                    href='javascript:void(0)'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='javascript:void(0)' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}

      {/* begin::Model */}
      <ActivityDrawer id='kt_activities_update' title={titleModal} body={updateModel}/>     
      <ActivityDrawer id='kt_activities_view' title={titleModal} body={viewModel}/>         
      {/* end::Model */}
    </div>
  )
}

export {DataTable}
