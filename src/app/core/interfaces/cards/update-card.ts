export interface UpdatedCard {
  value?: SwitchData;
  currentAmount?: SwitchData;
  number?: SwitchData;
  pinCode?: SwitchData;
  expiration?: SwitchData;
}

export type SwitchData = string | number | Date;
