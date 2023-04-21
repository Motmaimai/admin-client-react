export interface ISettings {
  username: string
  email: string
  language: string
  timeZone: string
  communications: {
    email: boolean
    sms: boolean
    phone: boolean
  }
  requireInfo: boolean,
  stack: boolean
}

export const defaultSettings: ISettings = {
  username: 'max_stone',
  email: 'nick.watson@loop.com',
  language: 'en',
  timeZone: 'Alaska',
  communications: {
    email: false,
    sms: true,
    phone: false,
  },
  requireInfo: false,
  stack: true
}
