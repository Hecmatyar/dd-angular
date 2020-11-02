export const debitKeys = ['payment', 'internalPaymentFunds', 'bonusPayment', 'balance'];
export const creditKeys = ['withdraw', 'internalPayOutFunds', 'chargeBack', 'payOut', 'sentBonus', 'balance'];
export const bonusKeys = ['referral', 'cashBack', 'manual', 'balance'];

export const debit: Record<string, Record<string, string | number>> = {
  payment: {lineHead: 'Payment'},
  internalPaymentFunds: {lineHead: 'Internal payment (funds)'},
  bonusPayment: {lineHead: 'Bonus payment'},
  balance: {lineHead: ''},
};

export const credit: Record<string, Record<string, string | number>> = {
  withdraw: {lineHead: 'Withdraw'},
  internalPayOutFunds: {lineHead: 'Internal pay out (funds)'},
  chargeBack: {lineHead: 'Chargeback'},
  payOut: {lineHead: 'Pay out'},
  sentBonus: {lineHead: 'Sent bonus'},
  balance: {lineHead: ''},
};

export const bonus: Record<string, Record<string, string | number>> = {
  referral: {lineHead: 'Referal'},
  cashBack: {lineHead: 'Cashback'},
  manual: {lineHead: 'Manual'},
  balance: {lineHead: ''},
};
