import {FC} from 'react'
import {useLang} from './Metronici18n'
import {IntlProvider} from 'react-intl'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'
import '@formatjs/intl-relativetimeformat/locale-data/vi'

import enMessages from './messages/en.json'
import viMessages from './messages/vi.json'
import { WithChildren } from '../helpers'
import React from 'react'

const allMessages = {
  en: enMessages,
  vi: viMessages,
}

const I18nProvider: FC<WithChildren> = ({children}) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export {I18nProvider}
