import React, {FC, useEffect, useRef, useState} from 'react'
import {SearchComponent} from '../../../assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const Search: FC = () => {
  const [menuState, setMenuState] = useState<'main' | 'advanced' | 'preferences'>('main')
  const element = useRef<HTMLDivElement | null>(null)
  const wrapperElement = useRef<HTMLDivElement | null>(null)
  const resultsElement = useRef<HTMLDivElement | null>(null)
  const suggestionsElement = useRef<HTMLDivElement | null>(null)
  const emptyElement = useRef<HTMLDivElement | null>(null)

  const processs = (search: SearchComponent) => {
    setTimeout(function () {
      const number = Math.floor(Math.random() * 6) + 1

      // Hide recently viewed
      suggestionsElement.current!.classList.add('d-none')

      if (number === 3) {
        // Hide results
        resultsElement.current!.classList.add('d-none')
        // Show empty message
        emptyElement.current!.classList.remove('d-none')
      } else {
        // Show results
        resultsElement.current!.classList.remove('d-none')
        // Hide empty message
        emptyElement.current!.classList.add('d-none')
      }

      // Complete search
      search.complete()
    }, 1500)
  }

  const clear = (search: SearchComponent) => {
    // Show recently viewed
    suggestionsElement.current!.classList.remove('d-none')
    // Hide results
    resultsElement.current!.classList.add('d-none')
    // Hide empty message
    emptyElement.current!.classList.add('d-none')
  }

  useEffect(() => {
    // Initialize search handler
    const searchObject = SearchComponent.createInsance('#kt_header_search')

    // Search handler
    searchObject!.on('kt.search.process', processs)

    // Clear handler
    searchObject!.on('kt.search.clear', clear)
  }, [])

  return (
    <>
      <div
        id='kt_header_search'
        className='d-flex align-items-stretch'
        data-kt-search-keypress='true'
        data-kt-search-min-length='2'
        data-kt-search-enter='enter'
        data-kt-search-layout='menu'
        data-kt-menu-trigger='auto'
        data-kt-menu-overflow='false'
        data-kt-menu-permanent='true'
        data-kt-menu-placement='bottom-end'
        ref={element}
      >
        <div
          className='d-flex align-items-center'
          data-kt-search-element='toggle'
          id='kt_header_search_toggle'
        >
          <div className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'>
            <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-1' />
          </div>
        </div>

        <div
          data-kt-search-element='content'
          className='menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px'
        >
          <div
            className={`${menuState === 'main' ? '' : 'd-none'}`}
            ref={wrapperElement}
            data-kt-search-element='wrapper'
          >
            <form
              data-kt-search-element='form'
              className='w-100 position-relative mb-3'
              autoComplete='off'
            >
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0'
              />

              <input
                type='text'
                className='form-control form-control-flush ps-10'
                name='search'
                placeholder='Search...'
                data-kt-search-element='input'
              />

              <span
                className='position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1'
                data-kt-search-element='spinner'
              >
                <span className='spinner-border h-15px w-15px align-middle text-gray-400' />
              </span>

              <span
                className='btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none'
                data-kt-search-element='clear'
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon-2 svg-icon-lg-1 me-0'
                />
              </span>
            </form>

            <div ref={resultsElement} data-kt-search-element='results' className='d-none'>
              <div className='scroll-y mh-200px mh-lg-350px'>
                <h3 className='fs-5 text-muted m-0 pb-5' data-kt-search-element='category-title'>
                  Users
                </h3>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                  </div>

                  <div className='d-flex flex-column justify-content-start fw-bold'>
                    <span className='fs-6 fw-bold'>Karina Clark</span>
                    <span className='fs-7 fw-bold text-muted'>Marketing Manager</span>
                  </div>
                </a>

                <h3
                  className='fs-5 text-muted m-0 pt-5 pb-5'
                  data-kt-search-element='category-title'
                >
                  Customers
                </h3>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <img
                        className='w-20px h-20px'
                        src={toAbsoluteUrl('/media/svg/brand-logos/volicity-9.svg')}
                        alt=''
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column justify-content-start fw-bold'>
                    <span className='fs-6 fw-bold'>Company Rbranding</span>
                    <span className='fs-7 fw-bold text-muted'>UI Design</span>
                  </div>
                </a>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <img
                        className='w-20px h-20px'
                        src={toAbsoluteUrl('/media/svg/brand-logos/tvit.svg')}
                        alt=''
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column justify-content-start fw-bold'>
                    <span className='fs-6 fw-bold'>Company Re-branding</span>
                    <span className='fs-7 fw-bold text-muted'>Web Development</span>
                  </div>
                </a>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <img
                        className='w-20px h-20px'
                        src={toAbsoluteUrl('/media/svg/misc/infography.svg')}
                        alt=''
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column justify-content-start fw-bold'>
                    <span className='fs-6 fw-bold'>Business Analytics App</span>
                    <span className='fs-7 fw-bold text-muted'>Administration</span>
                  </div>
                </a>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <img
                        className='w-20px h-20px'
                        src={toAbsoluteUrl('/media/svg/brand-logos/leaf.svg')}
                        alt=''
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column justify-content-start fw-bold'>
                    <span className='fs-6 fw-bold'>EcoLeaf App Launch</span>
                    <span className='fs-7 fw-bold text-muted'>Marketing</span>
                  </div>
                </a>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <img
                        className='w-20px h-20px'
                        src={toAbsoluteUrl('/media/svg/brand-logos/tower.svg')}
                        alt=''
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column justify-content-start fw-bold'>
                    <span className='fs-6 fw-bold'>Tower Group Website</span>
                    <span className='fs-7 fw-bold text-muted'>Google Adwords</span>
                  </div>
                </a>

                <h3
                  className='fs-5 text-muted m-0 pt-5 pb-5'
                  data-kt-search-element='category-title'
                >
                  Projects
                </h3>

                <a
                  href='/#'
                  className='d-flex text-dark text-hover-primary align-items-center mb-5'
                >
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <KTSVG
                        path='/media/icons/duotune/communication/com006.svg'
                        className='svg-icon-2 svg-icon-primary'
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column'>
                    <span className='fs-6 fw-bold'>Dashboard Analitics Launch</span>
                    <span className='fs-7 fw-bold text-muted'>#34560</span>
                  </div>
                </a>
              </div>
            </div>

            <div ref={suggestionsElement} className='mb-4' data-kt-search-element='main'>
              <div className='d-flex flex-stack fw-bold mb-4'>
                <span className='text-muted fs-6 me-2'>Recently Searched:</span>
              </div>

              <div className='scroll-y mh-200px mh-lg-325px'>
                <div className='d-flex align-items-center mb-5'>
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <KTSVG
                        path='/media/icons/duotune/electronics/elc004.svg'
                        className='svg-icon-2 svg-icon-primary'
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column'>
                    <a href='/#' className='fs-6 text-gray-800 text-hover-primary fw-bold'>
                      BoomApp by Keenthemes
                    </a>
                    <span className='fs-7 text-muted fw-bold'>#45789</span>
                  </div>
                </div>

              </div>
            </div>

            <div ref={emptyElement} data-kt-search-element='empty' className='text-center d-none'>
              <div className='pt-10 pb-10'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  className='svg-icon-4x opacity-50'
                />
              </div>

              <div className='pb-15 fw-bold'>
                <h3 className='text-gray-600 fs-5 mb-2'>No result found</h3>
                <div className='text-muted fs-7'>Please try again with a different query</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export {Search}
