/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../helpers'

const HelpDrawer = () => {
  return (
    <div
      id='kt_help'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='help'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'350px', 'md': '525px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_help_toggle'
      data-kt-drawer-close='#kt_help_close'
    >
      {/* begin::Card */}
      <div className='card shadow-none rounded-0 w-100'>
        {/* begin::Header */}
        <div className='card-header' id='kt_help_header'>
          <h5 className='card-title fw-bold text-gray-600'>Learn & Get Inspired</h5>

          <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-sm btn-icon explore-btn-dismiss me-n5'
              id='kt_help_close'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
            </button>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className='card-body' id='kt_help_body'>
          {/* begin::Content */}
          <div
            id='kt_help_scroll'
            className='hover-scroll-overlay-y'
            data-kt-scroll='true'
            data-kt-scroll-height='auto'
            data-kt-scroll-wrappers='#kt_help_body'
            data-kt-scroll-dependencies='#kt_help_header'
            data-kt-scroll-offset='5px'
          >
            {/* begin::Support */}
            <div className='rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10'>
              {/* begin::Heading */}
              <h2 className='fw-bolder mb-5'>
                Support at{' '}
                <a href='https://devs.keenthemes.com' className=''>
                  devs.keenthemes.com
                </a>
              </h2>
              {/* end::Heading */}

              {/* begin::Description */}
              <div className='fs-5 fw-bold mb-5'>
                <span className='text-gray-500'>
                  Join our developers community to find answer to your question and help others.
                </span>
                <a className='explore-link d-none' href='https://keenthemes.com/licensing'>
                  FAQs
                </a>
              </div>
              {/* end::Description */}

              {/* begin::Link */}
              <a
                href='https://devs.keenthemes.com'
                className='btn btn-lg explore-btn-primary w-100'
              >
                Get Support
              </a>
              {/* end::Link */}
            </div>
            {/* end::Support */}

          </div>
          {/* end::Content */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Card */}
    </div>
  )
}

export {HelpDrawer}
