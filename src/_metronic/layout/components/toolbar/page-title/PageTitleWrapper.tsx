import {useLayout} from '../../../core'
import {PageTitle} from './PageTitle'
import React from 'react'

const PageTitleWrapper = () => {
  const {config} = useLayout()
  if (!config.app?.pageTitle?.display) {
    return null
  }

  return <PageTitle />
}

export {PageTitleWrapper}
