import React, {FC, ReactNode} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../helpers'
import {Item1} from '../../content/activity/Item1'

type Props = {
  id?: string,
  title?: string,
  body?: any,
}

const ActivityDrawer: FC<Props> = ({id = 'kt_activities',title = 'Activity Logs',body}) => (
  <div
    id={id}
    className='bg-body'
    data-kt-drawer='true'
    data-kt-drawer-name='activities'
    data-kt-drawer-activate='true'
    data-kt-drawer-overlay='true'
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction='end'
    data-kt-drawer-toggle={'#'+id+'_toggle'}
    data-kt-drawer-close={'#'+id+'_close'}
  >
    <div className='card shadow-none rounded-0'>
      <div className='card-header' id={id+'_header'}>
        <h3 className='card-title fw-bolder text-dark'>{title}</h3>
        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
            id={id+'_close'}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </button>
        </div>
      </div>
      <div className='card-body position-relative' id={id+'_body'}>
        <div
          id='kt_activities_scroll'
          className='position-relative scroll-y me-n5 pe-5'
          data-kt-scroll='true'
          data-kt-scroll-height='auto'
          data-kt-scroll-wrappers={'#'+id+'_body'}
          data-kt-scroll-dependencies={'#'+id+'_header, #'+id+'_footer'}
          data-kt-scroll-offset='5px'
        >
          <div className='timeline'>
            {body}
          </div>
        </div>
      </div>
      <div className='card-footer py-5 text-center' id={id+'_footer'}>
        <Link to='/crafted/pages/profile' className='btn btn-bg-body text-primary'>
          View All Activities
          <KTSVG
            path='/media/icons/duotune/arrows/arr064.svg'
            className='svg-icon-3 svg-icon-primary'
          />
        </Link>
      </div>
    </div>
  </div>
)

export {ActivityDrawer}
