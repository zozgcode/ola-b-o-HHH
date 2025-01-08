import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      gender: 'Male',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Lilian',
      lastName: 'Willson',
      nickName: 'willz',
      email: 'l*@gmail.com',
      jointNames: '',
      username: 'LilianWillson',
      password: 'lilian1204'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 4800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'July 24 2024, 8:03:06 am',
        description: 'Transfer from G&C Mutual Bank',
        status: 'Success',
        amount_usd: 1500000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN001',
        dateTime: 'July 24 2024, 1:20:40 pm',
        description: 'Transfer from G&C Mutual Bank',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN001',
        dateTime: 'July 24 2024, 6:14:18 pm',
        description: 'Transfer from G&C Mutual Bank',
        status: 'Success',
        amount_usd: 700000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'JUDSON F GREENE',
      lastName: '',
      nickName: '',
      email: 'j*@gmail.com',
      jointNames: '',
      username: 'Greene669',
      password: 'Greene@66907'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 85002300.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'July 29 2024, 14:21:01 pm',
        description: 'Wire Transfer Facebook',
        status: 'Success',
        amount_usd: 45000000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'July 29 2024, 12:10:04 pm',
        description: 'Wire Transfer Facebook',
        status: 'Success',
        amount_usd: 40000000.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'July 29 2024, 9:19:20 am',
        description: 'Deposit from Coin flip Machine',
        status: 'Success',
        amount_usd: 300.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 29 2024, 7:10:04 am',
        description: 'Deposit from Coin flip Machine',
        status: 'Success',
        amount_usd: 1000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'July 27 2024, 8:03:06 am',
        description: 'Deposit from Coin flip Machine',
        status: 'Success',
        amount_usd: 700.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'July 26 2024, 1:20:40 pm',
        description: 'Deposit from Coin flip Machine',
        status: 'Success',
        amount_usd: 300.0,
        account_no: '****2637'
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      firstName: 'Michelle Owens',
      lastName: '',
      nickName: '',
      email: 'm*@gmail.com',
      jointNames: '',
      username: 'MichelleOwes1',
      password: 'Michelle1@@@'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 950000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'August 5 2024, 11:21:01 am',
        description: 'Deposit from AUL Corp',
        status: 'Pending',
        amount_usd: 180000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'July 29 2024, 12:10:04 pm',
        description: 'Deposit from Abacus Group',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'July 25 2024, 9:19:20 am',
        description: 'Deposit from Abington Bank',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 1 2024, 13:10:04 pm',
        description: 'Deposit from Above Lending',
        status: 'Success',
        amount_usd: 70000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'June 27 2024, 20:03:06 pm',
        description: 'Deposit from Coin flip Machine',
        status: 'Success',
        amount_usd: 157000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 17 2024, 1:20:40 pm',
        description: 'Deposit from Coin flip Machine',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****2637'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'May 21 2024, 11:30:15 am',
        description: 'Deposit from Basecamp USA',
        status: 'Success',
        amount_usd: 45000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'April 20 2024, 4:50:10 pm',
        description: 'Deposit from Bombas USA',
        status: 'Success',
        amount_usd: 67500.0,
        account_no: '****4532'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'March 19 2024, 3:15:30 pm',
        description: 'Deposit from The Sill USA',
        status: 'Success',
        amount_usd: 125000.0,
        account_no: '****6123'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'July 18 2024, 9:40:25 am',
        description: 'Deposit from Cotopaxi USA',
        status: 'Success',
        amount_usd: 86000.0,
        account_no: '****8745'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'January 16 2024, 10:05:40 am',
        description: 'Deposit from Oatly UK',
        status: 'Success',
        amount_usd: 235000.0,
        account_no: '****2637'
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      firstName: 'David Griffin',
      lastName: '',
      mobileNumber: '+1 424 373 9448',
      email: 'beautifullove1304@gmail.com',
      jointNames: '',
      username: 'DavidG1304',
      password: 'Ola303060'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 27747.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'August 20 2024',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 11000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 20 2024',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 400000.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 19 2024',
        description: 'Debit from Delta airlines',
        status: 'Success',
        amount_usd: -2316.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'August 19 2024',
        description: 'Debit from booking.com',
        status: 'Success',
        amount_usd: -3302.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'August 10 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'August 5 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 5 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'August 1 2024',
        description: 'Account 0pen',
        status: 'Success',
        amount_usd: -1000.0,
        account_no: '****4532'
      }
    ]
  },
  {
    account_id: 'ACC006',
    holder: {
      firstName: 'Robert Martin',
      lastName: '',
      mobileNumber: '970-213-3353',
      email: 'robert.martin2260@outlook.com',
      jointNames: '',
      username: 'Robert2260',
      password: 'saythetruth220'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN00339a',
        dateTime: 'November 18 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 100000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN00339b',
        dateTime: 'November 18 2024',
        description: 'Credit',
        status: 'Pending',
        amount_usd: 320000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN00339c',
        dateTime: 'November 12 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -50000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN00339',
        dateTime: 'October 15 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 50000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN001',
        dateTime: 'October 1 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -30000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN001',
        dateTime: 'September 24 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 18 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -1000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 27 2024',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 420000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'August 21 2024',
        description: 'Debit from booking.com',
        status: 'Success',
        amount_usd: -1302.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'August 19 2024',
        description: 'Debit from United Airlines',
        status: 'Success',
        amount_usd: -970.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'August 16 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -375.52,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 10 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'August 5 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'August 5 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'August 1 2024',
        description: 'Account 0pen',
        status: 'Success',
        amount_usd: -100.0,
        account_no: '****4532'
      }
    ]
  },
  {
    account_id: 'ACC007',
    holder: {
      firstName: 'Sarah Lee Walter',
      lastName: '',
      mobileNumber: '',
      email: 's*@gmail.com',
      jointNames: '',
      username: 'sarahbart12',
      password: 'sarah992'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 356789.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'August 26 2024',
        description: 'Credit from Health & Human Service',
        status: 'Pending',
        amount_usd: 356789.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 23 2024',
        description: 'Account 0pen',
        status: 'Success',
        amount_usd: -100.0,
        account_no: '****4532'
      }
    ]
  },
  {
    account_id: 'ACC008',
    holder: {
      firstName: 'Morgan Conrad',
      lastName: '',
      mobileNumber: '',
      email: 'morganconrad7790@hotmail.com',
      jointNames: '',
      username: 'Morgan7790',
      password: '@Morgan12345$$!28'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 4400000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'August 2 2024',
        description: 'Credit from BT Group',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'July 20 2024',
        description: 'Credit from Supermicro',
        status: 'Success',
        amount_usd: 100000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'July 15 2024',
        description: 'Debit from Zendesk',
        status: 'Success',
        amount_usd: -250000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'June 30 2024',
        description: 'Transfer to Corsair',
        status: 'Success',
        amount_usd: -150000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'May 25 2024',
        description: 'Credit from Atlassian',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****7320'
      },
      {
        transaction_id: '006',
        dateTime: 'April 10 2024',
        description: 'Debit from Sonos',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****9457'
      },
      {
        transaction_id: '007',
        dateTime: 'March 5 2024',
        description: 'Transfer to Qualtrics',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****6328'
      },
      {
        transaction_id: '008',
        dateTime: 'February 20 2024',
        description: 'Debit from Zebra Technologies',
        status: 'Success',
        amount_usd: -100000.0,
        account_no: '****2736'
      },
      {
        transaction_id: '009',
        dateTime: 'January 15 2024',
        description: 'Credit from Splunk',
        status: 'Success',
        amount_usd: 300000.0,
        account_no: '****9834'
      },
      {
        transaction_id: '010',
        dateTime: 'December 5 2023',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        transaction_id: '011',
        dateTime: 'November 22 2023',
        description: 'Transfer to HubSpot',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        transaction_id: '012',
        dateTime: 'October 10 2023',
        description: 'Credit from iRobot',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        transaction_id: '013',
        dateTime: 'September 25 2023',
        description: 'Debit from Datadog',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        transaction_id: '014',
        dateTime: 'August 15 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        transaction_id: '015',
        dateTime: 'July 5 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        transaction_id: '016',
        dateTime: 'June 10 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC009',
    holder: {
      firstName: 'Carolina West',
      lastName: '',
      mobileNumber: '',
      email: 'c*@gmail.com',
      jointNames: '',
      username: 'Carolina7790',
      password: 'Athlete2288'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 5100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'August 23 2024',
        description: 'Credit from BT Group',
        status: 'Success',
        amount_usd: 1500000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'August 23 2024',
        description: 'Credit from Supermicro',
        status: 'Success',
        amount_usd: 1200000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'August 23 2024',
        description: 'Credit from Zendesk',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'August 23 2024',
        description: 'Credit from Corsair',
        status: 'Success',
        amount_usd: 800000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'August 23 2024',
        description: 'Credit from Atlassian',
        status: 'Success',
        amount_usd: 600000.0,
        account_no: '****7320'
      }
    ]
  },
  {
    account_id: 'ACC010',
    holder: {
      firstName: 'Mark & Hana Smith',
      lastName: '',
      mobileNumber: '489-178-0042',
      email: 'smithmark@Mhunlimited.com',
      jointNames: '',
      username: 'MHSA1987',
      password: 'IncrediblyGodfearing112383$'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 23 2013',
        description: 'Wire Transfer from Hana Smith',
        status: 'Success',
        amount_usd: 200000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'March 23 2013',
        description: 'Check Deposit by Mark Smith',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'April 4 2011',
        description: 'Credit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'February 20 2009',
        description: 'Credit from Hana Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'February 2 2009',
        description: 'Credit from Mark Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****0933'
      }
    ]
  },
  {
    account_id: 'ACC011',
    holder: {
      firstName: 'Melody Smith E',
      lastName: 'Elizabeth',
      mobileNumber: '',
      email: '',
      jointNames: '',
      username: 'Melody0912',
      password: 'Verdell1414'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1000850.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832w2762',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'August 31 2024',
        description: 'Apple Gift Cards',
        status: 'Success',
        amount_usd: 150.0
      },
      {
        transaction_id: '002',
        dateTime: 'August 30 2024',
        description: 'Apple Gift Cards',
        status: 'Success',
        amount_usd: 300.0
      },
      {
        transaction_id: '003',
        dateTime: 'August 27 2024',
        description: 'Apple Gift Cards',
        status: 'Success',
        amount_usd: 200.0
      },
      {
        transaction_id: '004',
        dateTime: 'August 23 2024',
        description: 'Apple Gift Cards',
        status: 'Success',
        amount_usd: 200.0
      },
      {
        transaction_id: '005',
        dateTime: 'August 21 2024',
        description: 'Transfer from Jack Carlos Brian business account',
        status: 'Success',
        amount_usd: 1000000.0
      }
    ]
  },
  {
    account_id: 'ACC012',
    holder: {
      firstName: 'Robert',
      lastName: 'Cartwright',
      mobileNumber: '',
      email: 'r@gmail.com',
      jointNames: '',
      username: 'CartwrightF24',
      password: 'Rsassy2021'
    },
    bank_details: {
      account_type: 'Checking',
      account_type2: 'saving_account',
      balance_usd: 80571.0,
      saving_balance_usd: 710200.99
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832w2762',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'October 7 2024',
        description: 'Corporate Expansion Project',
        status: 'Success',
        amount_usd: 450000.0
      },
      {
        transaction_id: '002',
        dateTime: 'September 30 2024',
        description: 'Annual Marketing Budget',
        status: 'Success',
        amount_usd: 400000.0
      },
      {
        transaction_id: '003',
        dateTime: 'September 22 2024',
        description: 'New Equipment Purchase',
        status: 'Success',
        amount_usd: -350000.0
      },
      {
        transaction_id: '004',
        dateTime: 'September 15 2024',
        description: 'Real Estate Investment',
        status: 'Success',
        amount_usd: -420000.0
      },
      {
        transaction_id: '005',
        dateTime: 'September 8 2024',
        description: 'Acquisition of Smaller Firm',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        transaction_id: '006',
        dateTime: 'September 1 2024',
        description: 'IT Infrastructure Upgrade',
        status: 'Success',
        amount_usd: -310000.0
      },
      {
        transaction_id: '007',
        dateTime: 'August 24 2024',
        description: 'Warehouse Expansion',
        status: 'Success',
        amount_usd: 430000.0
      },
      {
        transaction_id: '008',
        dateTime: 'August 17 2024',
        description: 'New Fleet Purchase',
        status: 'Success',
        amount_usd: -350000.0
      },
      {
        transaction_id: '009',
        dateTime: 'August 10 2024',
        description: 'Research and Development Funding',
        status: 'Success',
        amount_usd: 200000.0
      },
      {
        transaction_id: '010',
        dateTime: 'August 3 2024',
        description: 'Corporate Event Sponsorship',
        status: 'Success',
        amount_usd: -180000.0
      },
      {
        transaction_id: '011',
        dateTime: 'July 27 2024',
        description: 'Acquisition of Office Space',
        status: 'Success',
        amount_usd: 420000.0
      },
      {
        transaction_id: '012',
        dateTime: 'July 20 2024',
        description: 'Consulting Services',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        transaction_id: '013',
        dateTime: 'July 13 2024',
        description: 'Product Line Expansion',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        transaction_id: '014',
        dateTime: 'July 6 2024',
        description: 'Digital Transformation Initiative',
        status: 'Success',
        amount_usd: 260000.0
      },
      {
        transaction_id: '015',
        dateTime: 'June 29 2024',
        description: 'Logistics Optimization Project',
        status: 'Success',
        amount_usd: -350000.0
      },
      {
        transaction_id: '016',
        dateTime: 'June 22 2024',
        description: 'Supply Chain Management Software',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        transaction_id: '017',
        dateTime: 'June 15 2024',
        description: 'Employee Training Program',
        status: 'Success',
        amount_usd: -105000.0
      },
      {
        transaction_id: '018',
        dateTime: 'June 8 2024',
        description: 'Partnership with Vendor',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        transaction_id: '019',
        dateTime: 'June 1 2024',
        description: 'International Expansion Planning',
        status: 'Success',
        amount_usd: 400000.0
      },
      {
        transaction_id: '020',
        dateTime: 'May 25 2024',
        description: 'Tech Infrastructure Overhaul',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        transaction_id: '021',
        dateTime: 'May 18 2024',
        description: 'Corporate Social Responsibility Initiative',
        status: 'Success',
        amount_usd: -240000.0
      },
      {
        transaction_id: '022',
        dateTime: 'May 11 2024',
        description: 'New Distribution Center',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        transaction_id: '023',
        dateTime: 'May 4 2024',
        description: 'Enterprise Resource Planning Implementation',
        status: 'Success',
        amount_usd: 420000.0
      },
      {
        transaction_id: '024',
        dateTime: 'April 27 2024',
        description: 'Employee Benefits Program',
        status: 'Success',
        amount_usd: 140000.0
      },
      {
        transaction_id: '025',
        dateTime: 'April 20 2024',
        description: 'Sustainability Initiative',
        status: 'Success',
        amount_usd: -370000.0
      }
    ]
  },
  {
    account_id: 'ACC013',
    holder: {
      firstName: 'Thomas',
      lastName: 'Leatherman',
      mobileNumber: '',
      email: 't@gmail.com',
      jointNames: '',
      username: 'ThomasLeath24',
      password: 'Leath@2779'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2010000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832w2762',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 8 2024',
        description: 'Digital Transformation Initiative',
        status: 'Success',
        amount_usd: 2000000.0
      },
      {
        transaction_id: '002',
        dateTime: 'November 4 2024',
        description: 'Corporate Expansion',
        status: 'Success',
        amount_usd: 10000.0
      }
    ]
  },
  {
    account_id: 'ACC014',
    holder: {
      firstName: 'Bernie',
      lastName: 'Greenberg',
      mobileNumber: '',
      email: 'b@gmail.com',
      jointNames: '',
      username: 'BernieGreen24',
      password: 'Green@2779'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832w2762',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 7, 2024',
        description: 'Strategic Partnerships',
        status: 'Success',
        amount_usd: 100000.0
      },
      {
        transaction_id: '002',
        dateTime: 'November 7, 2024',
        description: 'Quanta Services Inc',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        transaction_id: '003',
        dateTime: 'November 7, 2024',
        description: 'Customer Retention Program',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        transaction_id: '004',
        dateTime: 'November 7, 2024',
        description: 'IT Infrastructure Enhancement',
        status: 'Success',
        amount_usd: 200000.0
      },
      {
        transaction_id: '005',
        dateTime: 'November 6, 2024',
        description: 'Operational Expansion',
        status: 'Success',
        amount_usd: 200000.0
      },
      {
        transaction_id: '006',
        dateTime: 'November 6, 2024',
        description: 'Corporate Event Sponsorship',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        transaction_id: '007',
        dateTime: 'November 6, 2024',
        description: 'Infrastructure Development',
        status: 'Success',
        amount_usd: 100000.0
      },
      {
        transaction_id: '008',
        dateTime: 'November 5, 2024',
        description: 'Market Research',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        transaction_id: '009',
        dateTime: 'November 5, 2024',
        description: 'Employee Training Programs',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        transaction_id: '010',
        dateTime: 'November 5, 2024',
        description: 'Research & Development Funding',
        status: 'Success',
        amount_usd: 300000.0
      }
    ]
  },
  {
    account_id: 'ACC015',
    holder: {
      firstName: 'Debra',
      lastName: 'Deabreu',
      mobileNumber: '+1-347-435-5523',
      email: 'saythetruth223@outlook.com',
      jointNames: '',
      username: 'Debra1313',
      password: 'saythetruth220'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 25100.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378322762',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 15, 2024',
        description: 'Credit from Quanta Services Inc',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        transaction_id: '002',
        dateTime: 'November 4, 2024',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 500000.0
      },
      {
        transaction_id: '003',
        dateTime: 'October 25, 2024',
        description: 'Cheque Deposit',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        transaction_id: '004',
        dateTime: 'September 23, 2024',
        description: 'Debit from United Airline',
        status: 'Success',
        amount_usd: -970.0
      },
      {
        transaction_id: '005',
        dateTime: 'September 16, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -375.52
      },
      {
        transaction_id: '006',
        dateTime: 'September 10, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -1550.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 5, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 3, 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        transaction_id: '009',
        dateTime: 'September 1, 2024',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 100.0
      }
    ]
  },
  {
    account_id: 'ACC016',
    holder: {
      firstName: 'Iambitch Craft',
      lastName: '',
      mobileNumber: '+1-***-***-***',
      email: 'saythetruth223@outlook.com',
      jointNames: '',
      username: 'Iambitch1313',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2521000.45
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252126',
      lastStepText: 'Transaction sent successfully',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 15, 2024',
        description: 'Credit from Quanta Services Inc',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        transaction_id: '002',
        dateTime: 'November 4, 2024',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 500000.0
      },
      {
        transaction_id: '003',
        dateTime: 'October 25, 2024',
        description: 'Cheque Deposit',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        transaction_id: '004',
        dateTime: 'September 23, 2024',
        description: 'Debit from United Airline',
        status: 'Success',
        amount_usd: -970.0
      },
      {
        transaction_id: '005',
        dateTime: 'September 16, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -375.52
      },
      {
        transaction_id: '006',
        dateTime: 'September 10, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -1550.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 5, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 3, 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        transaction_id: '009',
        dateTime: 'September 1, 2024',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 100.0
      }
    ]
  },
  {
    account_id: 'ACC017',
    holder: {
      firstName: 'Alexander Rigena',
      lastName: '',
      mobileNumber: '+1-***-***-***',
      email: 'a@gmail.com',
      jointNames: '',
      username: 'Alexander19',
      password: 'Godneverfail19@'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 920000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252120',
      lastStepText: 'Transaction Pending..',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'December 2, 2024',
        description: 'Credit from Quanta Services Inc',
        status: 'Success',
        amount_usd: 28000.0
      },
      {
        transaction_id: '002',
        dateTime: 'November 4, 2024',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        transaction_id: '003',
        dateTime: 'October 25, 2024',
        description: 'Cheque Deposit',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        transaction_id: '004',
        dateTime: 'September 23, 2024',
        description: 'Debit from United Airline',
        status: 'Success',
        amount_usd: -970.0
      },
      {
        transaction_id: '005',
        dateTime: 'September 16, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -375.52
      },
      {
        transaction_id: '006',
        dateTime: 'September 10, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -1550.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 5, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 3, 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        transaction_id: '009',
        dateTime: 'September 1, 2024',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 100.0
      }
    ]
  },
  {
    account_id: 'ACC018',
    holder: {
      firstName: 'Martin C Dumais',
      lastName: '',
      mobileNumber: '+1-***-***-***',
      email: 'm@gmail.com',
      jointNames: '',
      username: 'dmartin',
      password: '1977'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2240000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'December 18, 2024',
        description: 'Credit from Royal Bank of Canada.',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        transaction_id: '002',
        dateTime: 'November 22, 2024',
        description: 'Credit from Barclays Bank UK.',
        status: 'Success',
        amount_usd: 32000.0
      },
      {
        transaction_id: '003',
        dateTime: 'November 18, 2024',
        description: 'Credit from Nova Tech Solutions.',
        status: 'Success',
        amount_usd: 14000.0
      },
      {
        transaction_id: '004',
        dateTime: 'November 10, 2024',
        description: 'Credit from Citibank US.',
        status: 'Success',
        amount_usd: 22500.0
      },
      {
        transaction_id: '005',
        dateTime: 'October 30, 2024',
        description: 'Credit from Ascend Innovations Ltd.',
        status: 'Success',
        amount_usd: 19000.0
      },
      {
        transaction_id: '006',
        dateTime: 'October 15, 2024',
        description: 'Debit to Chase Bank US.',
        status: 'Success',
        amount_usd: -11000.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 25, 2024',
        description: 'Credit from HSBC UK.',
        status: 'Success',
        amount_usd: 27000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 10, 2024',
        description: 'Debit to Orion Capital Holdings.',
        status: 'Success',
        amount_usd: -21000.0
      },
      {
        transaction_id: '009',
        dateTime: 'August 20, 2024',
        description: 'Credit from NatWest Bank UK.',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        transaction_id: '010',
        dateTime: 'August 10, 2024',
        description: 'Debit to Capital One Bank.',
        status: 'Success',
        amount_usd: -18000.0
      },
      {
        transaction_id: '011',
        dateTime: 'July 25, 2024',
        description: 'Credit from Stellar Innovations Co.',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        transaction_id: '012',
        dateTime: 'July 15, 2024',
        description: 'Debit to Aurora Systems Ltd.',
        status: 'Success',
        amount_usd: -24000.0
      },
      {
        transaction_id: '013',
        dateTime: 'June 30, 2024',
        description: 'Credit from Nexus Ventures.',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        transaction_id: '014',
        dateTime: 'June 12, 2024',
        description: 'Debit to PNC Bank US.',
        status: 'Success',
        amount_usd: -8000.0
      },
      {
        transaction_id: '015',
        dateTime: 'May 28, 2024',
        description: 'Credit from RBS Bank UK.',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        transaction_id: '016',
        dateTime: 'May 10, 2024',
        description: 'Debit to Stellar Networks Ltd.',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        transaction_id: '017',
        dateTime: 'April 22, 2024',
        description: 'Credit from Apex Dynamics Co.',
        status: 'Success',
        amount_usd: 26000.0
      },
      {
        transaction_id: '018',
        dateTime: 'April 12, 2024',
        description: 'Debit to Fifth Third Bank US.',
        status: 'Success',
        amount_usd: -14000.0
      },
      {
        transaction_id: '019',
        dateTime: 'April 5, 2024',
        description: 'Credit from Quantum Dynamics Co.',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        transaction_id: '020',
        dateTime: 'April 1, 2024',
        description: 'Debit to KeyBank US.',
        status: 'Success',
        amount_usd: -12500.0
      }
    ]
  },
  {
    account_id: 'ACC019',
    holder: {
      firstName: 'Ken Quang',
      lastName: '',
      mobileNumber: '+1-***-***-***',
      email: 'k@gmail.com',
      jointNames: '',
      username: 'Quangken',
      password: 'Tessie'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1600000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'December 18 2024',
        description: 'Transfer from Glasgow Investment Corp.',
        status: 'Success',
        amount_usd: 18500.0,
        account_no: '****5009'
      },
      {
        transaction_id: '002',
        dateTime: 'December 15 2024',
        description: 'Transfer from Glasgow Investment Corp.',
        status: 'Success',
        amount_usd: 40000.0,
        account_no: '****2930'
      },
      {
        transaction_id: '003',
        dateTime: 'November 25 2024',
        description: 'Transfer from Aramco Pension',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '004',
        dateTime: 'November 22 2024',
        description: 'Transfer from Lamco Mortgage',
        status: 'Success',
        amount_usd: 35000.0,
        account_no: '****2930'
      },
      {
        transaction_id: '005',
        dateTime: 'November 16, 2024',
        description: 'Credit from Aramco Incentives',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        transaction_id: '006',
        dateTime: 'October 18, 2024',
        description: 'Credit from Frisal Company ',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        transaction_id: '007',
        dateTime: 'October 10, 2024',
        description: 'Credit from Devon Energy Corporation',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 25, 2024',
        description: 'Credit from Ascend Innovations Ltd.',
        status: 'Success',
        amount_usd: 19000.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 15, 2024',
        description: 'Debit to Walmart',
        status: 'Success',
        amount_usd: -1100.0
      },
      {
        transaction_id: '008',
        dateTime: 'August 18, 2024',
        description: 'Grocery Purchase at Supermarket.',
        status: 'Success',
        amount_usd: -350.0
      },
      {
        transaction_id: '009',
        dateTime: 'August 10, 2024',
        description: 'Debit to Orion Capital Holdings.',
        status: 'Success',
        amount_usd: -21000.0
      },
      {
        transaction_id: '010',
        dateTime: 'August 5, 2024',
        description: 'Credit from Valero Energy Corporation',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        transaction_id: '011',
        dateTime: 'July 21, 2024',
        description: 'Grocery Shopping at Local Market',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        transaction_id: '012',
        dateTime: 'July 18, 2024',
        description: 'Credit from Stellar Innovations Co.',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        transaction_id: '014',
        dateTime: 'June 30, 2024',
        description: 'Credit from Nexus Ventures.',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        transaction_id: '015',
        dateTime: 'June 12, 2024',
        description: 'Debit to Exxon Mobil',
        status: 'Success',
        amount_usd: 12500.0
      },
      {
        transaction_id: '016',
        dateTime: 'May 28, 2024',
        description: 'Credit from Murphy Oil',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        transaction_id: '017',
        dateTime: 'May 10, 2024',
        description: 'Debit to Stellar Networks Ltd.',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        transaction_id: '018',
        dateTime: 'April 22, 2024',
        description: 'Credit from Apex Dynamics Co.',
        status: 'Success',
        amount_usd: 26000.0
      },
      {
        transaction_id: '019',
        dateTime: 'April 12, 2024',
        description: 'Debit to Coterra Energy',
        status: 'Success',
        amount_usd: 14000.0
      },
      {
        transaction_id: '020',
        dateTime: 'April 5, 2024',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -240.0
      }
    ]
  },
  {
    account_id: 'ACC020',
    holder: {
      firstName: 'Marilyn',
      lastName: 'Greenwood',
      mobileNumber: '+1-***-***-***',
      email: 'm@gmail.com',
      jointNames: '',
      username: 'Marilyn666',
      password: 'Midtjylland29'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2446000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '003',
        dateTime: 'November 25 2024',
        description: 'Transfer from Aramco Pension',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '004',
        dateTime: 'November 22 2024',
        description: 'Transfer from Lamco Mortgage',
        status: 'Success',
        amount_usd: 35000.0,
        account_no: '****2930'
      },
      {
        transaction_id: '005',
        dateTime: 'November 16, 2024',
        description: 'Credit from Aramco Incentives',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        transaction_id: '006',
        dateTime: 'October 18, 2024',
        description: 'Credit from Frisal Company ',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        transaction_id: '007',
        dateTime: 'October 10, 2024',
        description: 'Credit from Devon Energy Corporation',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 25, 2024',
        description: 'Credit from Ascend Innovations Ltd.',
        status: 'Success',
        amount_usd: 19000.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 15, 2024',
        description: 'Debit to Walmart',
        status: 'Success',
        amount_usd: -1100.0
      },
      {
        transaction_id: '008',
        dateTime: 'August 18, 2024',
        description: 'Grocery Purchase at Supermarket.',
        status: 'Success',
        amount_usd: -350.0
      },
      {
        transaction_id: '009',
        dateTime: 'August 10, 2024',
        description: 'Debit to Orion Capital Holdings.',
        status: 'Success',
        amount_usd: -21000.0
      },
      {
        transaction_id: '010',
        dateTime: 'August 5, 2024',
        description: 'Credit from Valero Energy Corporation',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        transaction_id: '011',
        dateTime: 'July 21, 2024',
        description: 'Grocery Shopping at Local Market',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        transaction_id: '012',
        dateTime: 'July 18, 2024',
        description: 'Credit from Stellar Innovations Co.',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        transaction_id: '014',
        dateTime: 'June 30, 2024',
        description: 'Credit from Nexus Ventures.',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        transaction_id: '015',
        dateTime: 'June 12, 2024',
        description: 'Debit to Exxon Mobil',
        status: 'Success',
        amount_usd: 12500.0
      },
      {
        transaction_id: '016',
        dateTime: 'May 28, 2024',
        description: 'Credit from Murphy Oil',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        transaction_id: '017',
        dateTime: 'May 10, 2024',
        description: 'Debit to Stellar Networks Ltd.',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        transaction_id: '018',
        dateTime: 'April 22, 2024',
        description: 'Credit from Apex Dynamics Co.',
        status: 'Success',
        amount_usd: 26000.0
      },
      {
        transaction_id: '019',
        dateTime: 'April 12, 2024',
        description: 'Debit to Coterra Energy',
        status: 'Success',
        amount_usd: 14000.0
      },
      {
        transaction_id: '020',
        dateTime: 'April 5, 2024',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -240.0
      }
    ]
  },
  {
    account_id: 'ACC021',
    holder: {
      firstName: 'Michael',
      lastName: 'Ackerson',
      mobileNumber: '+1-424-373-9448',
      email: 'beautifullove1304@outlook.com',
      createdOn: '1/04/2025', // m/d/y
      username: 'Mich1304@',
      password: 'saythetruth220'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 221.07
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'January 3, 2025',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 850000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '002',
        dateTime: 'January 2, 2025',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -2000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '003',
        dateTime: 'January 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0,
        account_no: '****5009'
      },
      {
        transaction_id: '004',
        dateTime: 'December 29, 2024',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -975.0,
        account_no: '****5009'
      },
      {
        transaction_id: '005',
        dateTime: 'December 17, 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '006',
        dateTime: 'December 15, 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 10000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '007',
        dateTime: 'December 13, 2024',
        description: 'Account Open',
        status: 'Success',
        amount_usd: -100.0,
        account_no: '****5009'
      }
    ]
  },
  {
    account_id: 'ACC022',
    holder: {
      firstName: 'Reyes Becky',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'r***@gmail.com',
      createdOn: '1/08/2025', // m/d/y
      username: 'Reyes11',
      password: 'Becky001'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 758000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 27, 2024',
        description: 'Credit from International Business Development',
        status: 'Success',
        amount_usd: 255000.0
      },
      {
        dateTime: 'November 20, 2024',
        description: 'Credit from Investment Management',
        status: 'Success',
        amount_usd: 212000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Credit from Aurora Systems Ltd.',
        status: 'Success',
        amount_usd: 3750.0
      },
      {
        dateTime: 'August 10, 2023',
        description: 'Credit from Ascend Innovations Ltd.',
        status: 'Success',
        amount_usd: 9000.0
      },
      {
        dateTime: 'February 18, 2023',
        description: 'Credit from Nexus Ventures.',
        status: 'Success',
        amount_usd: 4200.0
      },
      {
        dateTime: 'September 12, 2022',
        description: 'Debit to Marketing Campaign',
        status: 'Success',
        amount_usd: -7000.0
      },
      {
        dateTime: 'February 7, 2022',
        description: 'Credit from Devon Energy Corporation',
        status: 'Success',
        amount_usd: 32750.0
      },
      {
        dateTime: 'December 12, 2021',
        description: 'Debit to Devon Energy Corporation',
        status: 'Success',
        amount_usd: -15300.0
      },
      {
        dateTime: 'August 22, 2021',
        description: 'Credit from Aramco Pension',
        status: 'Success',
        amount_usd: 8000.0
      },
      {
        dateTime: 'November 15, 2019',
        description: 'Credit from Orion Capital Holdings.',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 18, 2019',
        description: 'Grocery Shopping at Local Market',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'July 19, 2018',
        description: 'Credit from Coterra Energy',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'June 5, 2018',
        description: 'Account Opened',
        status: 'Success',
        amount_usd: -100.0
      },
    ]
  }
];
