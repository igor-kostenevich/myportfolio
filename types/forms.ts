export interface ISelectOptionsObjectValue {
  name: string
  value: string | number
  icon?: string
}

export type ISelectOptionsSimpleValue = string | number

export type ISelectOptions = ISelectOptionsSimpleValue[] | ISelectOptionsObjectValue[]

export interface IContactForm {
  name: string
  email: string
  serviceType: string
  aboutProject?: string
}
