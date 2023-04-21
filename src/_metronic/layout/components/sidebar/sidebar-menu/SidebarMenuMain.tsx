/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title={intl.formatMessage({id: 'MENU.LAYOUT_BUILDER'})}
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({id: 'MENU.CRAFTED'})}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/example'
        title={intl.formatMessage({id: 'MENU.EXAMPLE'})}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <SidebarMenuItem
          to='/crafted/pages/example/overview'
          title='Overview'
          hasBullet={true}
        />
        <SidebarMenuItem
          to='/crafted/pages/example/create'
          title='Create'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}
