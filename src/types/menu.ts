export interface Menu {
  id: number
  name: string
  type_id: number
  type: MenuType
  created_at: string
  updated_at: string
  variant_values: MenuVariant[]
}

export interface MenuType {
  id: number
  type: string
}

export interface MenuVariant {
  menu_id: string
  option_id: number
  option_value_id: number
  option: MenuOption
  option_value: MenuOptionValue
  price: number
}

export interface MenuOption {
  id: number
  name: string
}

export interface MenuOptionValue {
  id: number
  option_id: number
  value: string
}
