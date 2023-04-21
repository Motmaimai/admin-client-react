import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import React from 'react'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title={intl.formatMessage({id: 'MENU.LAYOUT_BUILDER'})} to='/builder' />
      <MenuInnerWithSub
        title={intl.formatMessage({id: 'MENU.CRAFTED'})}
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* Example */}
        <MenuInnerWithSub
          title={intl.formatMessage({id: 'MENU.EXAMPLE'})}
          to='/crafted/example'
          fontIcon='bi-archive'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/pages/example/overview' title='Overview' hasBullet={true} />
          <MenuItem to='/crafted/pages/example/create' title='create' hasBullet={true} />
        </MenuInnerWithSub>

      </MenuInnerWithSub>
    </>
  )
}
