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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      transaction_code: '252118',
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
      balance_usd: 758658.25
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
        amount_usd: 255653.94
      },
      {
        dateTime: 'November 20, 2024',
        description: 'Credit from Investment Management',
        status: 'Success',
        amount_usd: 212362.23
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
        amount_usd: 9752.1
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
        amount_usd: -7085.0
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
        amount_usd: -15330.0
      },
      {
        dateTime: 'August 22, 2021',
        description: 'Credit from Aramco Pension',
        status: 'Success',
        amount_usd: 850.0
      },
      {
        dateTime: 'November 15, 2019',
        description: 'Credit from Orion Capital Holdings.',
        status: 'Success',
        amount_usd: 10280.0
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
        amount_usd: 5170.45
      },
      {
        dateTime: 'June 5, 2018',
        description: 'Account Opened',
        status: 'Success',
        amount_usd: -100.0
      }
    ]
  },
  {
    account_id: 'ACC023',
    holder: {
      firstName: 'Lynn Slaughter',
      lastName: '',
      mobileNumber: '+1-806-640-4206',
      email: 'lrs3385@gmail.com',
      createdOn: '1/13/2025', // m/d/y
      username: 'Lslaughter2025',
      password: 'Lynn2025'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3000003.97
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 13, 2025',
        description: 'Deposit from Facebook Lottery Winning Check',
        status: 'Success',
        amount_usd: 3000000.0
      }
    ]
  },
  {
    account_id: 'ACC024',
    holder: {
      firstName: 'Roseann Hecker',
      lastName: '',
      mobileNumber: '+1-920-786-5290',
      email: 'roseannsheridan117@gmail.com',
      createdOn: '1/15/2025', // m/d/y
      username: 'Rose117',
      password: 'William0206'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 500.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 14, 2025',
        description: 'Credit from Coinabh Investment',
        status: 'Pending',
        amount_usd: 1200000.0
      },
      {
        dateTime: 'January 8, 2025',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 500.0
      }
    ]
  },
  {
    account_id: 'ACC025',
    holder: {
      firstName: 'Nelson Bennett',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'n@gmail.com',
      createdOn: '1/24/2025', // m/d/y
      username: 'Nelson@6543',
      password: 'Bennett@6543'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '483068119945',
      routing_number: '021000322',
      balance_usd: 2740649.86
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 23 2025',
        description: 'Transfer from Paris Event',
        status: 'Success',
        amount_usd: 750000.0
      },
      {
        dateTime: 'January 20 2025',
        description: 'PetroQuest Energy Payment',
        status: 'Success',
        amount_usd: 11000.0
      },
      {
        dateTime: 'January 18 2025',
        description: 'W&T Offshore Invoice',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'January 17 2025',
        description: 'Comstock Resources Contract',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'January 15 2025',
        description: 'Abraxas Petroleum Settlement',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'January 13 2025',
        description: 'Northern Oil and Gas Royalty',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'January 12 2025',
        description: 'Earthstone Energy Licensing',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'October 1 2024',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'September 23 2024',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'September 10 2024',
        description: 'Transfer from Cory Mack',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'July 6 2023, 3:00:02pm',
        description: 'Celeb City Farms',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 10 2023, 5:15:02pm',
        description: 'Company Officials',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5 2022, 8:30:08am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 3100.0
      },
      {
        dateTime: 'October 19 2022, 1:03:05pm',
        description: 'Company Van Maintenance',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'September 13 2021, 2:10:06pm',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'June 24 2021, 9:00:13am',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 3 2020, 4:22:05pm',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0
      },
      {
        dateTime: 'January 8 2020, 10:11:22am',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'May 20 2019, 2:00pm',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 23 2019, 8:50am',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'August 23 2018, 8:50am',
        description: 'Transfer to Nikky&co enterprises',
        status: 'Success',
        amount_usd: -66500.0
      },
      {
        dateTime: 'March 23 2018, 8:50am',
        description: 'Transfer from Tee~Energy services',
        status: 'Success',
        amount_usd: 33200.0
      },
      {
        dateTime: 'November 15 2023, 12:45:00pm',
        description: 'Office Supplies Purchase',
        status: 'Success',
        amount_usd: -2300.0
      },
      {
        dateTime: 'April 9 2022, 11:30:45am',
        description: 'Refund from Vendor',
        status: 'Success',
        amount_usd: 1200.0
      },
      {
        dateTime: 'February 18 2021, 10:05:23am',
        description: 'IT Equipment Maintenance',
        status: 'Success',
        amount_usd: -7800.0
      },
      {
        dateTime: 'December 29 2020, 2:22:11pm',
        description: 'Transfer to Company Savings',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'July 4 2019, 3:14:52pm',
        description: 'Employee Travel Reimbursement',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'October 10 2018, 4:50:35pm',
        description: 'Transfer from Parent Organization',
        status: 'Success',
        amount_usd: 20000.0
      }
    ]
  },
  {
    account_id: 'ACC026',
    holder: {
      firstName: 'Micheal Sullivan',
      lastName: '',
      mobileNumber: '+1-601-258-4558',
      email: 'michealsullivan204@careorg.net',
      createdOn: '1/26/2025', // m/d/y
      username: 'Sullivan204',
      password: 'Sullivan@6543'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 6801400.86
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 27, 2025',
        description: 'Debit from Supreme Court of Ohio',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'Interest fee',
        status: 'Success',
        amount_usd: 6800.0
      },
      {
        dateTime: 'December 3, 2024',
        description: 'Interest fee',
        status: 'Success',
        amount_usd: 6700.0
      }
    ]
  },
  {
    account_id: 'ACC027',
    holder: {
      firstName: 'Flora Richard',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'f*@gmail.com',
      createdOn: '2/9/2025', // m/d/y
      username: 'florarichard08',
      password: 'Haryomidey08'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 500000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 10, 2025',
        description: 'Transfer from ice box jewelry’s company XXXXXX8324',
        status: 'Success',
        amount_usd: 500000000.0
      },
      {
        dateTime: 'August 6, 2023',
        description: 'electronic charges XXXXXX0763',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'July 9, 2023',
        description: 'duties charges XXXXXX8324',
        status: 'Success',
        amount_usd: -47.0
      },
      {
        dateTime: 'June 19, 2023',
        description: 'Transfer from monthly sales allowance XXXXXX62537',
        status: 'Success',
        amount_usd: 45.0
      },
      {
        dateTime: 'May 13, 2023',
        description: 'foodstuff XXXXXX8732',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'May 3, 2023',
        description: 'Transfer to water supply company XXXXXX5323 Funds Transfer',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'April 1, 2023',
        description: 'Monthly allowance',
        status: 'Success',
        amount_usd: 150.0
      },
      {
        dateTime: 'March 30, 2023 ',
        description: 'Transfer to Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'March 30, 2023',
        description: 'Salary payments from bammy wears store',
        status: 'Success',
        amount_usd: 250.0
      }
    ]
  },
  {
    account_id: 'ACC028',
    holder: {
      firstName: 'HELEN ANALIZA',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'analizaHellen@gmail.com',
      createdOn: '2/26/2025', // m/d/y
      username: 'AnalizaHellen',
      password: 'Helen1254'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 15000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 3, 2025',
        description: 'Transfer from Internal revenue Central bank of Nigeria (CBN) XXXXXX8324',
        status: 'Success',
        amount_usd: 15000000.0
      },
      {
        dateTime: 'September 5, 2024',
        description: 'Electronic charges XXXXXX1237',
        status: 'Success',
        amount_usd: -25.0
      },
      {
        dateTime: 'August 6, 2023',
        description: 'Duties charges XXXXXX6328',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'June 9, 2023',
        description: 'Transfer from monthly sales allowance XXXXXX7464',
        status: 'Success',
        amount_usd: 47.0
      },
      {
        dateTime: 'June 19, 2022',
        description: 'foodstuff XXXXXX2224',
        status: 'Success',
        amount_usd: 45.0
      },
      {
        dateTime: 'May 13, 2022',
        description: 'Transfer to water supply company XXXXXX1133 Funds Transfer',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'May 3, 2022',
        description: 'Monthly allowance',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'April 1, 2021',
        description: 'Transfer from Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: 150.0
      },
      {
        dateTime: 'March 30, 2021',
        description: 'Salary payments from bammy wears store',
        status: 'Success',
        amount_usd: 75.0
      },
      {
        dateTime: 'March 3, 2021',
        description: 'DEPOSIT XXXXXX6489',
        status: 'Success',
        amount_usd: 250.0
      }
    ]
  },
  {
    account_id: 'ACC029',
    holder: {
      firstName: 'Dr William Robert',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'ssntallman@gmail.com',
      createdOn: '2/28/2025', // m/d/y
      username: 'Ssntallman',
      password: 'Locationdc1'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 50000093.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 10, 2025',
        description: 'Transfer from ANGLO AMERICAN PLATINUM MAIN MINERAL: PLATINUM (CBN) XXXXXX8324',
        status: 'Success',
        amount_usd: 50000000.0
      },
      {
        dateTime: 'September 5, 2024',
        description: 'Electronic charges XXXXXX1237',
        status: 'Success',
        amount_usd: -25.0
      },
      {
        dateTime: 'August 6, 2023',
        description: 'Duties charges XXXXXX6328',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'June 9, 2023',
        description: 'Transfer from monthly sales allowance XXXXXX7464',
        status: 'Success',
        amount_usd: 47.0
      },
      {
        dateTime: 'June 19, 2022',
        description: 'foodstuff XXXXXX2224',
        status: 'Success',
        amount_usd: 45.0
      },
      {
        dateTime: 'May 13, 2022',
        description: 'Transfer to water supply company XXXXXX1133 Funds Transfer',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'May 3, 2022',
        description: 'Monthly allowance',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'April 1, 2021',
        description: 'Transfer from Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: 150.0
      },
      {
        dateTime: 'March 30, 2021',
        description: 'Salary payments from bammy wears store',
        status: 'Success',
        amount_usd: 75.0
      },
      {
        dateTime: 'March 3, 2021',
        description: 'DEPOSIT XXXXXX6489',
        status: 'Success',
        amount_usd: 250.0
      }
    ]
  },
  {
    account_id: 'ACC030',
    holder: {
      firstName: 'Santiago Tata Sally',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 's*@gmail.com',
      createdOn: '3/5/2025', // m/d/y
      username: 'Sallytata',
      password: 'Tata22'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 50000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 3, 2025',
        description: 'Transfer from ANGLO AMERICAN PLATINUM MAIN MINERAL: PLATINUM (CBN) XXXXXX8324',
        status: 'Success',
        amount_usd: 50000000.0
      },
      {
        dateTime: 'February 17, 2025',
        description: 'Purchase: Tactical Gear Supply Depot XXXXXX0912',
        status: 'Success',
        amount_usd: -2500.0
      },
      {
        dateTime: 'January 29, 2025',
        description: 'Salary Payment: U.S. ARMY PAYROLL (DoD) XXXXXX7621',
        status: 'Success',
        amount_usd: 7000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Withdrawal: Military Base ATM FORT BRAGG XXXXXX2034',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'November 8, 2024',
        description: 'Transfer to DEPLOYMENT FUNDS (Overseas Ops) XXXXXX6742',
        status: 'Success',
        amount_usd: -5000.0
      },
      {
        dateTime: 'October 3, 2024',
        description: 'Direct Deposit: Military Hazard Pay (DoD) XXXXXX1289',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'September 12, 2024',
        description: 'Purchase: Military Exchange Store XXXXXX8123',
        status: 'Success',
        amount_usd: -320.0
      },
      {
        dateTime: 'August 27, 2024',
        description: 'Transfer from MILITARY RETIREMENT FUND (DoD) XXXXXX0091',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'July 4, 2024',
        description: 'Purchase: Army Commemorative Store XXXXXX5576',
        status: 'Success',
        amount_usd: -150.0
      },
      {
        dateTime: 'June 18, 2024',
        description: 'Deposit: Combat Zone Tax Exclusion (CZTE) XXXXXX4812',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'May 20, 2024',
        description: 'Withdrawal: Military Base ATM CAMP PENDLETON XXXXXX9041',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'April 9, 2024',
        description: 'Transfer to FAMILY SUPPORT ALLOWANCE XXXXXX6104',
        status: 'Success',
        amount_usd: -4000.0
      },
      {
        dateTime: 'March 2, 2024',
        description: 'Salary Payment: U.S. ARMY PAYROLL (DoD) XXXXXX5023',
        status: 'Success',
        amount_usd: 6800.0
      },
      {
        dateTime: 'February 14, 2024',
        description: 'Purchase: Tactical Equipment Store XXXXXX3298',
        status: 'Success',
        amount_usd: -250.0
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Deposit: Military Bonus Pay (DoD) XXXXXX1105',
        status: 'Success',
        amount_usd: 15000.0
      }
    ]
  },
  {
    account_id: 'ACC031',
    holder: {
      firstName: 'Owen Henry',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'o*@gmail.com',
      createdOn: '3/6/2025', // m/d/y
      username: 'Owenhenry1463',
      password: 'OWENhenry141263'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 2600000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 3 2025',
        description: 'Transfer from ANGLO AMERICAN PLATINUM MAIN MINERAL: PLATINUM (CBN) XXXXXX8324',
        status: 'Success',
        amount_usd: 50560.0
      },
      {
        dateTime: 'February 17 2025',
        description: 'Transfer from Tactical Gear Supply Depot XXXXXX0912',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'January 23 2025',
        description: 'Transfer from Paris Event XXXXXX3749',
        status: 'Success',
        amount_usd: 75000.0
      },
      {
        dateTime: 'January 20 2025',
        description: 'PetroQuest Energy Payment XXXXXX6218',
        status: 'Success',
        amount_usd: 11000.0
      },
      {
        dateTime: 'January 18 2025',
        description: 'W&T Offshore Invoice XXXXXX9473',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'January 17 2025',
        description: 'Comstock Resources Contract XXXXXX1852',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'January 15 2025',
        description: 'Abraxas Petroleum Settlement XXXXXX7394',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'January 13 2025',
        description: 'Northern Oil and Gas Royalty XXXXXX0561',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'January 12 2025',
        description: 'Earthstone Energy Licensing XXXXXX4279',
        status: 'Success',
        amount_usd: 2500.0
      },
      {
        dateTime: 'October 1 2024',
        description: "Grimms supply holding's XXXXXX8506",
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'September 23 2024',
        description: 'Transfer from TABITHA MARTEL XXXXXX3142',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'September 10 2024',
        description: 'Transfer from Cory Mack XXXXXX7035',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'August 18 2024',
        description: 'Land Payment XXXXXX9684',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'November 15 2023',
        description: 'Office Supplies Purchase XXXXXX2317',
        status: 'Success',
        amount_usd: -2300.0
      },
      {
        dateTime: 'July 6 2023',
        description: 'Celeb City Farms XXXXXX5840',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 10 2023',
        description: 'Company Officials XXXXXX1463',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'December 5 2022',
        description: 'Transfer from Tee~Energy services XXXXXX9725',
        status: 'Success',
        amount_usd: 3100.0
      },
      {
        dateTime: 'October 19 2022',
        description: 'Company Van Maintenance XXXXXX4058',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'April 9 2022',
        description: 'Refund from Vendor XXXXXX6291',
        status: 'Success',
        amount_usd: 1200.0
      },
      {
        dateTime: 'September 13 2021',
        description: 'Transfer from Nikky&co enterprises XXXXXX7836',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'June 24 2021',
        description: 'Appointment Form Payment XXXXXX2509',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 18 2021',
        description: 'IT Equipment Maintenance XXXXXX3974',
        status: 'Success',
        amount_usd: -7800.0
      },
      {
        dateTime: 'December 29 2020',
        description: 'Transfer to Company Savings XXXXXX8152',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'February 3 2020',
        description: 'Department Workers XXXXXX0693',
        status: 'Success',
        amount_usd: -10000.0
      },
      {
        dateTime: 'January 8 2020',
        description: 'Transfer from Chad Estate Management XXXXXX4281',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'July 4 2019',
        description: 'Employee Travel Reimbursement XXXXXX7546',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'May 20 2019',
        description: 'Bammy Work Wear and Maintenance XXXXXX2937',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 23 2019',
        description: 'Transfer from JayJay Group XXXXXX5018',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'October 10 2018',
        description: 'Transfer from Parent Organization XXXXXX3624',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'August 23 2018',
        description: 'Transfer to Nikky&co enterprises XXXXXX9157',
        status: 'Success',
        amount_usd: -66500.0
      },
      {
        dateTime: 'March 23 2018',
        description: 'Transfer from Tee~Energy services XXXXXX4083',
        status: 'Success',
        amount_usd: 33200.0
      },
      {
        dateTime: 'June 15 2017',
        description: 'Transfer from Local Partnership XXXXXX4012',
        status: 'Success',
        amount_usd: 17500.0
      },
      {
        dateTime: 'April 2 2016',
        description: 'Office Renovation Payment XXXXXX5378',
        status: 'Success',
        amount_usd: -8500.0
      },
      {
        dateTime: 'September 20 2015',
        description: 'Transfer from Westward Logistics XXXXXX2197',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'July 8 2014',
        description: 'Purchase of Industrial Equipment XXXXXX9315',
        status: 'Success',
        amount_usd: -9700.0
      },
      {
        dateTime: 'March 11 2013',
        description: 'Transfer from Investment Portfolio XXXXXX5210',
        status: 'Success',
        amount_usd: 22500.0
      },
      {
        dateTime: 'December 5 2012',
        description: 'Legal Settlement Fee XXXXXX8492',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'June 25 2011',
        description: 'Transfer from Business Partner XXXXXX3205',
        status: 'Success',
        amount_usd: 14500.0
      },
      {
        dateTime: 'April 18 2010',
        description: 'Company Event Sponsorship XXXXXX4283',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'November 22 2009',
        description: 'Transfer from Regional Office XXXXXX2048',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        dateTime: 'May 12 2008',
        description: 'Business Expense Reimbursement XXXXXX1347',
        status: 'Success',
        amount_usd: -4600.0
      }
    ]
  },
  {
    account_id: 'ACC032',
    holder: {
      firstName: 'Melinda Smith Velma',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'm*@gmail.com',
      createdOn: '3/16/2025', // m/d/y
      username: 'MelindaSmith16',
      password: 'msv_linda289'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 1085000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 11 2025',
        description: 'Transfer from Citizen Bank XXXXXX4127',
        status: 'Success',
        amount_usd: 32640.0
      },
      {
        dateTime: 'March 9 2025',
        description: 'Transfer from Citizen Bank XXXXXX1234',
        status: 'Success',
        amount_usd: 50560.0
      },
      {
        dateTime: 'March 7 2025',
        description: 'Transfer from Citizen Bank XXXXXX5678',
        status: 'Success',
        amount_usd: 21480.0
      },
      {
        dateTime: 'March 5 2025',
        description: 'Bank Charges XXXXXX3344',
        status: 'Success',
        amount_usd: -120.0
      },
      {
        dateTime: 'March 3 2025',
        description: 'Transfer from Citizen Bank XXXXXX1122',
        status: 'Success',
        amount_usd: 39250.0
      },
      {
        dateTime: 'March 1 2025',
        description: 'Bank Charges XXXXXX3344',
        status: 'Success',
        amount_usd: -120.0
      },
      {
        dateTime: 'February 27 2025',
        description: 'Transfer from Citizen Bank XXXXXX5566',
        status: 'Success',
        amount_usd: 58920.0
      },
      {
        dateTime: 'February 25 2025',
        description: 'Transfer from Citizen Bank XXXXXX7788',
        status: 'Success',
        amount_usd: 27830.0
      },
      {
        dateTime: 'February 23 2025',
        description: 'Utility Payment - Electricity Bill XXXXXX9900',
        status: 'Success',
        amount_usd: -50.0
      },
      {
        dateTime: 'February 21 2025',
        description: 'Transfer from Citizen Bank XXXXXX2233',
        status: 'Success',
        amount_usd: 67500.0
      },
      {
        dateTime: 'February 19 2025',
        description: 'Transfer from Citizen Bank XXXXXX4455',
        status: 'Success',
        amount_usd: 31980.0
      },
      {
        dateTime: 'February 17 2025',
        description: 'Transfer from Citizen Bank XXXXXX6677',
        status: 'Success',
        amount_usd: 48200.0
      },
      {
        dateTime: 'February 15 2025',
        description: 'ATM Withdrawal XXXXXX8899',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'February 13 2025',
        description: 'Transfer from Citizen Bank XXXXXX3344',
        status: 'Success',
        amount_usd: 21540.0
      },
      {
        dateTime: 'February 11 2025',
        description: 'Transfer from Citizen Bank XXXXXX5566',
        status: 'Success',
        amount_usd: 42900.0
      }
    ]
  },
  {
    account_id: 'ACC033',
    holder: {
      firstName: 'MR. ISMAIL HASHEM ABDULHAKEEM .K',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'i*@gmail.com',
      createdOn: '3/20/2025', // m/d/y
      username: 'FlorenceFasuyi',
      password: 'Fasuyi22'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 1000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 21, 2025',
        description: 'Transfer from Internal revenue Central bank of Nigeria (CBN) XXXXXX8324',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'September 5, 2024',
        description: 'Electronic charges  XXXXXX8324',
        status: 'Success',
        amount_usd: -25.0
      },
      {
        dateTime: 'August 6, 2023',
        description: 'Duties charges XXXXXX8324',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'July 9, 2023',
        description: 'Transfer from monthly sales allowance XXXXXX8324',
        status: 'Success',
        amount_usd: -47.0
      },
      {
        dateTime: 'June 19, 2022',
        description: 'foodstuff  XXXXXX8324',
        status: 'Success',
        amount_usd: 45.0
      },
      {
        dateTime: 'May 13, 2022',
        description: 'Transfer from water supply company XXXXXX8324 Funds Transfer',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'May 3, 2022',
        description: 'monthly allowance XXXXXX8653',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'April 1, 2021',
        description: 'Transfer from Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: 150.0
      },
      {
        dateTime: 'March 30, 2021',
        description: 'Salary Payments from Bammy Wears Store XXXXXX2233',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'March 30, 2021',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 250.0
      }
    ]
  },
  {
    account_id: 'ACC034',
    holder: {
      firstName: 'Leonard Richard Spencer',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'l*@gmail.com',
      createdOn: '3/29/2025', // m/d/y
      username: 'Leonard1440',
      password: 'Bunnie1440'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 10031200.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 25, 2025',
        description: 'Inheritance transfer from Estate of William Anderson XXXXXX8324',
        status: 'Success',
        amount_usd: 750000.0
      },
      {
        dateTime: 'March 20, 2025',
        description: 'Payment to Oakridge Luxury Motors for vehicle purchase',
        status: 'Success',
        amount_usd: -450000.0
      },
      {
        dateTime: 'March 15, 2025',
        description: 'Inheritance transfer from Estate of Elizabeth Carter XXXXXX5678',
        status: 'Success',
        amount_usd: 1250000.0
      },
      {
        dateTime: 'March 1, 2025',
        description: 'Property tax payment to Riverside Accounting Solutions',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Inheritance transfer from Estate of Jonathan Williams XXXXXX4321',
        status: 'Success',
        amount_usd: 210000.0
      },
      {
        dateTime: 'January 15, 2025',
        description: 'Private jet rental payment to Skyhigh Aviation Services',
        status: 'Success',
        amount_usd: -90000.0
      },
      {
        dateTime: 'October 22, 2024',
        description: 'Inheritance transfer from Estate of Robert Mitchell XXXXXX5432',
        status: 'Success',
        amount_usd: 180000.0
      },
      {
        dateTime: 'October 10, 2024',
        description: 'Luxury hotel stay payment to Greenpine Resorts',
        status: 'Success',
        amount_usd: -15000.0
      },
      {
        dateTime: 'July 10, 2023',
        description: 'Inheritance transfer from Estate of James Rodriguez XXXXXX5673',
        status: 'Success',
        amount_usd: 350000.0
      },
      {
        dateTime: 'July 1, 2023',
        description: 'Yacht maintenance payment to Blue Wave Marine Services',
        status: 'Success',
        amount_usd: -20000.0
      },
      {
        dateTime: 'May 15, 2023',
        description: 'Inheritance transfer from Estate of Richard Thompson XXXXXX8745',
        status: 'Success',
        amount_usd: 275000.0
      },
      {
        dateTime: 'March 3, 2022',
        description: 'Inheritance transfer from Estate of Henry Clark XXXXXX2345',
        status: 'Success',
        amount_usd: 400000.0
      },
      {
        dateTime: 'March 1, 2022',
        description: 'Donation to Bright Hope Charitable Trust',
        status: 'Success',
        amount_usd: -5000.0
      },
      {
        dateTime: 'January 20, 2021',
        description: 'Inheritance transfer from Estate of Robert Johnson XXXXXX6574',
        status: 'Success',
        amount_usd: 295000.0
      },
      {
        dateTime: 'January 5, 2021',
        description: 'Payment to Everglow Jewelers for diamond necklace',
        status: 'Success',
        amount_usd: -22000.0
      },
      {
        dateTime: 'October 30, 2020',
        description: 'Inheritance transfer from Estate of Anthony White XXXXXX3421',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'October 1, 2020',
        description: 'First-class flight booking with Horizon Travel Agency',
        status: 'Success',
        amount_usd: -8000.0
      },
      {
        dateTime: 'July 8, 2020',
        description: 'Inheritance transfer from Estate of Michael Williams XXXXXX8764',
        status: 'Success',
        amount_usd: 320000.0
      },
      {
        dateTime: 'April 12, 2019',
        description: 'Inheritance transfer from Estate of Richard Thompson XXXXXX4853',
        status: 'Success',
        amount_usd: 210000.0
      },
      {
        dateTime: 'April 1, 2019',
        description: 'Real estate investment payment to Skyline Property Developers',
        status: 'Success',
        amount_usd: -150000.0
      }
    ]
  },
  {
    account_id: 'ACC035',
    holder: {
      firstName: 'Henry Stanley Hatcher',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'h*@gmail.com',
      createdOn: '4/3/2025', // m/d/y
      username: 'Kinghenry@022',
      password: 'Myking4life04'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 35000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 14, 2025',
        description: 'Transfer from Orion Capital XXXXXX5678',
        status: 'Success',
        amount_usd: 125000.0
      },
      {
        dateTime: 'February 8, 2025',
        description: 'Payment to Northwest Contractors XXXXXX3421',
        status: 'Success',
        amount_usd: -47500.0
      },
      {
        dateTime: 'February 1, 2025',
        description: 'Transfer from Angel White XXXXXX9821',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Withdrawal Branch #103',
        status: 'Success',
        amount_usd: -8500.0
      },
      {
        dateTime: 'January 21, 2025',
        description: 'Transfer from PERRY JOHNSON REGISTERARS INC XXXXXX7632',
        status: 'Success',
        amount_usd: 100000.0
      },
      {
        dateTime: 'January 12, 2025',
        description: 'Payment to Global Logistics XXXXXX2376',
        status: 'Success',
        amount_usd: -35200.0
      },
      {
        dateTime: 'January 5, 2025',
        description: 'Transfer from Crossroads Investments XXXXXX8734',
        status: 'Success',
        amount_usd: 82500.0
      },
      {
        dateTime: 'December 28, 2024',
        description: 'Payment to Dynasty Insurance XXXXXX6543',
        status: 'Success',
        amount_usd: -14800.0
      },
      {
        dateTime: 'December 18, 2024',
        description: 'Transfer from Brock McNown XXXXXX0368',
        status: 'Success',
        amount_usd: 77000.0
      },
      {
        dateTime: 'December 12, 2024',
        description: 'Withdrawal ATM #5290',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'December 8, 2024',
        description: 'Transfer from Transoceanic Company XXXXXX1125',
        status: 'Success',
        amount_usd: 53000.0
      },
      {
        dateTime: 'November 30, 2024',
        description: 'Payment to Pinnacle Advisors XXXXXX7890',
        status: 'Success',
        amount_usd: -28600.0
      },
      {
        dateTime: 'November 22, 2024',
        description: 'Transfer from Sterling Enterprises XXXXXX4321',
        status: 'Success',
        amount_usd: 64500.0
      },
      {
        dateTime: 'November 15, 2024',
        description: 'Payment to Frontier Media XXXXXX1098',
        status: 'Success',
        amount_usd: -19700.0
      },
      {
        dateTime: 'November 2, 2024',
        description: 'Transfer from Eclipse Partners XXXXXX7654',
        status: 'Success',
        amount_usd: 95800.0
      }
    ]
  },
  {
    account_id: 'ACC036',
    holder: {
      firstName: 'MR. Henk Schouten',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'AlianaBridget@gmail.com',
      createdOn: '4/7/2025', // m/d/y
      username: 'AlianaBridget',
      password: 'maintain1243'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 2500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 11, 2025',
        description: 'Transfer from West Texas Oil and Gas, Inc. XXXXXX8324',
        status: 'Success',
        amount_usd: 2500000.0
      },
      {
        dateTime: 'January 2, 2025',
        description: 'Electronic charges XXXXXX8324',
        status: 'Success',
        amount_usd: -25.0
      },
      {
        dateTime: 'September 6, 2024',
        description: 'Duties charges XXXXXX8324',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'July 9, 2024',
        description: 'Transfer from monthly sales allowance XXXXXX8324',
        status: 'Success',
        amount_usd: -47.0
      },
      {
        dateTime: 'June 19, 2023',
        description: 'foodstuff XXXXXX8324',
        status: 'Success',
        amount_usd: 45.0
      },
      {
        dateTime: 'May 13, 2023',
        description: 'Transfer from water supply company XXXXXX8324 Funds Transfer',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'May 3, 2022',
        description: 'monthly allowance',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'April 15, 2021',
        description: 'Transfer from Lincoln Electrics XXXXXX2819',
        status: 'Success',
        amount_usd: 150.0
      },
      {
        dateTime: 'May 15, 2020',
        description: 'salary payments from bammy wears store',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'March 30, 2020',
        description: 'DEPOSIT XXXXXX8324',
        status: 'Success',
        amount_usd: 250.0
      }
    ]
  },
  {
    account_id: 'ACC037',
    holder: {
      firstName: 'Spencer Lee',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 's*@gmail.com',
      createdOn: '4/17/2025', // m/d/y
      username: 'Gerald23',
      password: 'Avery23'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 129821497.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 15, 2025',
        description: 'Transfer from Orion Capital Holdings. XXXXXX8324',
        status: 'Success',
        amount_usd: 20821497.0
      },
      {
        dateTime: 'May 10, 2019',
        description: 'Transfer from Valero Energy Corporation XXXXXX8324',
        status: 'Success',
        amount_usd: 109000000.0
      }
    ]
  },
  {
    account_id: 'ACC038',
    holder: {
      firstName: 'MR. Michael Raymond Williams',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'michaelraymond@gmail.com',
      createdOn: '4/20/2025', // m/d/y
      username: 'MichaelRaymond810',
      password: 'Melissa1986'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 8100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: ' April 20, 2025',
        description: 'Transfer from Williams Oil and Gas, Inc. - XXXXXX8324',
        status: 'Success',
        amount_usd: 1499898.0
      },
      {
        dateTime: 'January 2, 2025',
        description: 'Electronic charges - XXXXXX1228',
        status: 'Success',
        amount_usd: -25.0
      },
      {
        dateTime: 'September 6, 2024',
        description: 'Duties charges - XXXXXX3684',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'July 9, 2024',
        description: 'Transfer from monthly sales allowance - XXXXXX4393',
        status: 'Success',
        amount_usd: -47.0
      },
      {
        dateTime: 'June 19, 2023',
        description: 'Outfit - XXXXXX6457',
        status: 'Success',
        amount_usd: 99825.0
      },
      {
        dateTime: 'May 13, 2023',
        description: 'Transfer to water supply company - XXXXXX4488',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'May 3, 2022',
        description: 'monthly allowance - XXXXXX9746',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'April 15, 2021',
        description: 'Transfer from Lincoln Electrics - XXXXXX2740',
        status: 'Success',
        amount_usd: 1499925.0
      },
      {
        dateTime: 'May 15, 2020',
        description: 'salary payments from bammy wears store - XXXXXX9865',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'March 30, 2020',
        description: 'Transfer from mark Donald LLC company - XXXXXX7688',
        status: 'Success',
        amount_usd: 5000000.0
      }
    ]
  },
  {
    account_id: 'ACC039',
    holder: {
      firstName: 'JOAN JOHNSON',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'j*@gmail.com',
      createdOn: '4/28/2025', // m/d/y
      username: 'JOAN2025',
      password: 'Winners2025'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 1500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: ' April 27, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX8324',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: ' April 23, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX9474',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: ' April 18, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX3484',
        status: 'Success',
        amount_usd: 500000.0
      }
    ]
  },
  {
    account_id: 'ACC040',
    holder: {
      firstName: 'Alice F Buchanan',
      lastName: '',
      mobileNumber: '+1-667-283-6453',
      email: 'buchananalice36@gmail.com',
      createdOn: '6/7/2025', // m/d/y
      username: 'buchananalice36',
      password: 'Michael07'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 825000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 8, 2024',
        description: 'Transfer from Apex Mills - XXXXXX8324',
        status: 'Success',
        amount_usd: 75000.0
      },
      {
        dateTime: 'August 6, 2024',
        description: 'Transfer from UK Textile GB LTD - XXXXXX1123',
        status: 'Success',
        amount_usd: 60000.0
      },
      {
        dateTime: 'August 4, 2024',
        description: 'Transfer from American Textile & Apparel - XXXXXX4421',
        status: 'Success',
        amount_usd: 55000.0
      },
      {
        dateTime: 'August 2, 2024',
        description: 'Transfer from Apex Mills - XXXXXX8324',
        status: 'Success',
        amount_usd: 70000.0
      },
      {
        dateTime: 'July 30, 2024',
        description: 'Transfer from UK Textile GB LTD - XXXXXX1123',
        status: 'Success',
        amount_usd: 65000.0
      },
      {
        dateTime: 'July 28, 2024',
        description: 'Transfer from Anza Textile OYA - XXXXXX7742',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'July 25, 2024',
        description: 'Transfer from Apex Mills - XXXXXX8324',
        status: 'Success',
        amount_usd: 80000.0
      },
      {
        dateTime: 'July 22, 2024',
        description: 'Transfer from American Textile & Apparel - XXXXXX4421',
        status: 'Success',
        amount_usd: 60000.0
      },
      {
        dateTime: 'July 19, 2024',
        description: 'Transfer from UK Textile GB LTD - XXXXXX1123',
        status: 'Success',
        amount_usd: 55000.0
      },
      {
        dateTime: 'July 16, 2024',
        description: 'Transfer from Apex Mills - XXXXXX8324',
        status: 'Success',
        amount_usd: 65000.0
      },
      {
        dateTime: 'July 13, 2024',
        description: 'Transfer from Anza Textile OYA - XXXXXX7742',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'July 10, 2024',
        description: 'Transfer from UK Textile GB LTD - XXXXXX1123',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'December 1, 2023',
        description: 'Transfer from American Textile & Apparel - XXXXXX4421',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 23, 2023',
        description: 'Transfer from Apex Mills - XXXXXX8324',
        status: 'Success',
        amount_usd: 60000.0
      }
    ]
  },
  {
    account_id: 'ACC041',
    holder: {
      firstName: 'Daiz Cathy',
      lastName: '',
      mobileNumber: '****-****-****',
      email: 'd*@gmail.com',
      createdOn: '6/9/2025', // m/d/y
      username: 'DiazCathy1805',
      password: 'DiazCampbell'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 40121050.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 6, 2025',
        description: 'Inheritance: transfer from Estate of Richard Thompson - XXXXXX8745',
        status: 'Success',
        amount_usd: 275000.0
      },
      {
        dateTime: 'June 3, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX8324',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'May 7, 2025',
        description: 'Transfer to Emily Wagner - XXXXXX3467',
        status: 'Success',
        amount_usd: -80000.0
      },
      {
        dateTime: 'May 5, 2025',
        description: 'Transfer from Sofia Müller - XXXXXX9124',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'May 1, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 422000.0
      },
      {
        dateTime: 'April 28, 2025',
        description: 'Transfer fee - XXXXXX4893',
        status: 'Success',
        amount_usd: -75.5
      },
      {
        dateTime: 'April 20, 2025',
        description: 'Transfer to Lucas Dubois - XXXXXX7119',
        status: 'Success',
        amount_usd: -98000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'April 1, 2025',
        description: 'Transfer from Olivia Smith - XXXXXX6390',
        status: 'Success',
        amount_usd: 194500.0
      },
      {
        dateTime: 'March 15, 2025',
        description: 'Transfer to Matteo Rossi - XXXXXX5321',
        status: 'Success',
        amount_usd: -472350.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Emma Brown - XXXXXX2019',
        status: 'Success',
        amount_usd: 102800.0
      },
      {
        dateTime: 'February 1, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -38000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'December 30, 2024',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'December 10, 2024',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -120500.0
      },
      {
        dateTime: 'November 2, 2024',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9000.0
      },
      {
        dateTime: 'September 10, 2024',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 492300.0
      },
      {
        dateTime: 'August 4, 2024',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -15700.0
      },
      {
        dateTime: 'July 7, 2024',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 110000.0
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -240500.0
      },
      {
        dateTime: 'March 3, 2024',
        description: 'Transfer from Charlotte White - XXXXXX9800',
        status: 'Success',
        amount_usd: 70000.0
      },
      {
        dateTime: 'December 18, 2023',
        description: 'Transfer to Elias Fischer - XXXXXX4520',
        status: 'Success',
        amount_usd: -49000.0
      },
      {
        dateTime: 'October 22, 2023',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 402500.0
      },
      {
        dateTime: 'August 9, 2023',
        description: 'Transfer to Emily Wagner - XXXXXX3814',
        status: 'Success',
        amount_usd: -325000.0
      },
      {
        dateTime: 'March 11, 2022',
        description: 'Transfer from Mia Brooks - XXXXXX5230',
        status: 'Success',
        amount_usd: 460000.0
      },
      {
        dateTime: 'June 20, 2021',
        description: 'Transfer to Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: -140000.0
      },
      {
        dateTime: 'November 30, 2019',
        description: 'Transfer from Ella Foster - XXXXXX6017',
        status: 'Success',
        amount_usd: 250.0
      },
      {
        dateTime: 'September 5, 2019',
        description: 'Transfer to Daniel Keller - XXXXXX8529',
        status: 'Success',
        amount_usd: -175000.0
      },
      {
        dateTime: 'June 1, 2019',
        description: 'Transfer from Ava Lewis - XXXXXX4112',
        status: 'Success',
        amount_usd: 388900.0
      },
      {
        dateTime: 'March 20, 2019',
        description: 'Transfer to Maxime Lefevre - XXXXXX0734',
        status: 'Success',
        amount_usd: -29500.0
      },
      {
        dateTime: 'December 12, 2018',
        description: 'Transfer from Oliver Hall - XXXXXX9001',
        status: 'Success',
        amount_usd: 485500.0
      },
      {
        dateTime: 'October 6, 2018',
        description: 'Transfer fee - XXXXXX2635',
        status: 'Success',
        amount_usd: -50.5
      },
      {
        dateTime: 'September 15, 2018',
        description: 'Transfer to Amelia Rossi - XXXXXX5288',
        status: 'Success',
        amount_usd: -67800.0
      },
      {
        dateTime: 'July 30, 2018',
        description: 'Transfer from Lucas White - XXXXXX7642',
        status: 'Success',
        amount_usd: 15200.0
      },
      {
        dateTime: 'June 12, 2018',
        description: 'VAT Fee - XXXXXX0733',
        status: 'Success',
        amount_usd: -100.75
      },
      {
        dateTime: 'May 3, 2018',
        description: 'Transfer to Sophia Schneider - XXXXXX9835',
        status: 'Success',
        amount_usd: -458000.0
      },
      {
        dateTime: 'February 10, 2018',
        description: 'Transfer from James Anderson - XXXXXX3377',
        status: 'Success',
        amount_usd: 238000.0
      }
    ]
  },
  {
    account_id: 'ACC042',
    holder: {
      firstName: 'HAVERY S MISTY',
      lastName: '',
      mobileNumber: '',
      email: 'havery*@gmail.com',
      createdOn: '7/3/2025', // m/d/y
      username: 'haverymisty',
      password: 'Jennings@30'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 2001050000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        'To complete your requested transfer a mandatory VAT processing fee is required This charge complies with updated financial regulations and ensures the secure and timely handling of all transactions. If you have any questions or need further assistance please feel free to reach out to us. Thank you',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 4, 2017',
        description: 'Housing Estate, at Alabama - XXXXXX3739',
        status: 'Success',
        amount_usd: 500000000.0
      },
      {
        dateTime: 'July 19, 2017',
        description: 'Ferrari - XXXXXX4827',
        status: 'Success',
        amount_usd: 1200000.0
      },
      {
        dateTime: 'September 18, 2008',
        description: '143 Acres of Land near the family house - XXXXXX9184',
        status: 'Success',
        amount_usd: 550000000.0
      },
      {
        dateTime: 'June 11, 2008',
        description: 'Hummer - XXXXXX2053',
        status: 'Success',
        amount_usd: 150000000.0
      },
      {
        dateTime: 'July 25, 2005',
        description: 'Tractors and 2 Trucks - XXXXXX7632',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'March 12, 2000',
        description: 'Two Metal Trunk of Gold and Cash - XXXXXX6470',
        status: 'Success',
        amount_usd: 800000.0
      },
      {
        dateTime: 'November 3, 1990',
        description: 'Money in the Banks - XXXXXX1901',
        status: 'Success',
        amount_usd: 950000000.0
      }
    ]
  },
  {
    account_id: 'ACC043',
    holder: {
      firstName: 'DR. Mrs. Madison Belly',
      lastName: '',
      mobileNumber: '',
      email: 'm*@gmail.com',
      createdOn: '7/4/2025', // m/d/y
      username: 'Madisonbelly224',
      password: '@John6833'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 1000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      headerText: 'Dear Valued Customer,',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 4, 2025, 3:00:02pm',
        description: 'Transfer Payment From Eric~Edward Oilfield company - XXXXXX8293',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'March 10, 2025, 5:15:02pm',
        description: 'Credit Card Payment officials - XXXXXX4731',
        status: 'Success',
        amount_usd: -15750.0
      },
      {
        dateTime: 'October 19, 2024, 1:03:05pm',
        description: 'Credit Card Payment - XXXXXX6117',
        status: 'Success',
        amount_usd: -11500.0
      },
      {
        dateTime: 'September 13, 2024, 2:10:06pm',
        description: 'Check Deposit - XXXXXX9320',
        status: 'Success',
        amount_usd: -30500.0
      },
      {
        dateTime: 'June 24, 2024, 9:00:13am',
        description: 'Transfer Payment from Steven Porter - XXXXXX1846',
        status: 'Success',
        amount_usd: 21650.0
      },
      {
        dateTime: 'December 5, 2024, 8:30:08am',
        description: 'Transfer from Tee~Energy services - XXXXXX5074',
        status: 'Success',
        amount_usd: 27000.0
      },
      {
        dateTime: 'February 3, 2024, 4:22:05pm',
        description: 'Credit Card Payment - XXXXXX0962',
        status: 'Success',
        amount_usd: -15000.0
      },
      {
        dateTime: 'January 8, 2023, 10:11:22am',
        description: 'Transfer from Chad Estate management - XXXXXX3885',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'May 20, 2022, 2:00:00pm',
        description: 'Credit Card Payment - XXXXXX7219',
        status: 'Success',
        amount_usd: -40500.0
      },
      {
        dateTime: 'March 23, 2021, 8:50:00am',
        description: 'CHECK DEPOSIT - XXXXXX8324',
        status: 'Success',
        amount_usd: 50000.0
      }
    ]
  },
  {
    account_id: 'ACC044',
    holder: {
      firstName: 'Donald Benson',
      lastName: '',
      mobileNumber: '',
      email: 'd*@gmail.com',
      createdOn: '7/6/2025', // m/d/y
      username: 'DonaldBenson6',
      password: 'Bodmas123$'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      headerText: 'Dear Valued Customer,',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 2, 2025',
        description: 'Transfer from Folah Homes and property - XXXXXX8293',
        status: 'Success',
        amount_usd: 500000000.0
      },
      {
        dateTime: 'June 1, 2025',
        description: 'Electronic charge - XXXXXX4731',
        status: 'Success',
        amount_usd: -30.0
      },
      {
        dateTime: 'July 9, 2023',
        description: 'Duties charge - XXXXXX6117',
        status: 'Success',
        amount_usd: -47.0
      },
      {
        dateTime: 'June 19, 2023',
        description: 'Transfer from monthly sales allowance - XXXXXX9320',
        status: 'Success',
        amount_usd: 45.0
      },
      {
        dateTime: 'May 13, 2023',
        description: 'Foodstuff - XXXXXX1846',
        status: 'Success',
        amount_usd: -100.0
      }
    ]
  },
  {
    account_id: 'ACC045',
    holder: {
      firstName: 'Laura Baker Sarah',
      lastName: '',
      mobileNumber: '',
      email: 'l*@gmail.com',
      createdOn: '7/12/2025', // m/d/y
      username: 'laurasarah23',
      password: 'Homer22'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 310000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      headerText: 'Dear Valued Customer,',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 11, 2025',
        description: 'Transfer from Marcus Bailey - XXXXXX2366',
        status: 'Success',
        amount_usd: 9500
      },
      {
        dateTime: 'July 9, 2025',
        description: 'Transfer from Emily Foster - XXXXXX5094',
        status: 'Success',
        amount_usd: 9900
      },
      {
        dateTime: 'July 8, 2025',
        description: 'Transfer from SilverRock Energy - XXXXXX1883',
        status: 'Success',
        amount_usd: 7800
      },
      {
        dateTime: 'July 7, 2025',
        description: 'Transfer from Harold Simmons - XXXXXX6482',
        status: 'Success',
        amount_usd: 7300
      },
      {
        dateTime: 'July 6, 2025',
        description: 'Transfer from NorthGate Partners LLC - XXXXXX5729',
        status: 'Success',
        amount_usd: 8400
      },
      {
        dateTime: 'July 5, 2025',
        description: 'Transfer from Olivia Turner - XXXXXX1137',
        status: 'Success',
        amount_usd: 8900
      },
      {
        dateTime: 'July 4, 2025',
        description: 'Transfer from VistaPoint Solutions - XXXXXX4012',
        status: 'Success',
        amount_usd: 9400
      },
      {
        dateTime: 'July 3, 2025',
        description: 'Transfer from Jonathan Perez - XXXXXX2746',
        status: 'Success',
        amount_usd: 8600
      },
      {
        dateTime: 'July 2, 2025',
        description: 'Transfer from ApexCore Systems - XXXXXX7803',
        status: 'Success',
        amount_usd: 9100
      },
      {
        dateTime: 'June 28, 2025',
        description: 'Transfer from Sarah Clark - XXXXXX1105',
        status: 'Success',
        amount_usd: 8000
      },
      {
        dateTime: 'June 18, 2025',
        description: 'Transfer from Titan Construction Group - XXXXXX3847',
        status: 'Success',
        amount_usd: 9500
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from Michael Rivera - XXXXXX2229',
        status: 'Success',
        amount_usd: 8700
      },
      {
        dateTime: 'May 30, 2025',
        description: 'Transfer from FusionTech Solutions - XXXXXX9674',
        status: 'Success',
        amount_usd: 9100
      },
      {
        dateTime: 'May 10, 2025',
        description: 'Transfer from Amanda Johnson - XXXXXX3198',
        status: 'Success',
        amount_usd: 7400
      },
      {
        dateTime: 'April 22, 2025',
        description: 'Transfer from Atlantic Freight Co. - XXXXXX0045',
        status: 'Success',
        amount_usd: 8200
      },
      {
        dateTime: 'April 1, 2025',
        description: 'Transfer from Robert Mitchell - XXXXXX9801',
        status: 'Success',
        amount_usd: 9900
      },
      {
        dateTime: 'March 12, 2025',
        description: 'Transfer from Clearwater & Co. - XXXXXX2270',
        status: 'Success',
        amount_usd: 8700
      },
      {
        dateTime: 'February 24, 2025',
        description: 'Transfer from Isabella Adams - XXXXXX5362',
        status: 'Success',
        amount_usd: 8500
      },
      {
        dateTime: 'February 7, 2025',
        description: 'Transfer from Dakota Valley Services - XXXXXX1990',
        status: 'Success',
        amount_usd: 9400
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Transfer from Logan Brooks - XXXXXX3174',
        status: 'Success',
        amount_usd: 9200
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Horizon Midwest Group - XXXXXX6690',
        status: 'Success',
        amount_usd: 9000
      },
      {
        dateTime: 'January 6, 2025',
        description: 'Transfer from Charlotte Reed - XXXXXX7752',
        status: 'Success',
        amount_usd: 9800
      }
    ]
  },
  {
    account_id: 'ACC046',
    holder: {
      firstName: 'Lupe Ramos & Jim Denson',
      lastName: '',
      mobileNumber: '',
      email: 'lj*@gmail.com',
      createdOn: '7/22/2025', // m/d/y
      username: 'JimLupe2468',
      password: 'lupelovesjim2025'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 3000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      headerText: 'Dear Valued Customer,',
      transaction_code: '252118',
      lastStepText:
        'You need to balance up the activation fee of $1,050 which is required to activate this service. Once the balance is successfully paid, transfers will be enabled instantly because activation charge is required to proceed.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 2, 2025',
        description: 'Inheritance Funds Transfer - XXXXXX2366',
        status: 'Success',
        amount_usd: 3000000.0
      }
    ]
  },
  {
    account_id: 'ACC047',
    holder: {
      firstName: 'Lawson Philip',
      email: 'vladimirkatep@gmail.com',
      createdOn: '7/23/2025', // m/d/y
      username: 'VladimirkateP',
      password: 'Vladimirkate'
    },
    bank_details: {
      account_type: 'Checking',
      account_type2: 'saving_account',
      balance_usd: 436342000.0,
      saving_balance_usd: 60565000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact bank manager for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 9, 2012',
        description: 'Royal Investment Holdings S.A. Capital investment deposit (cleared funds) - XXXXXX8473',
        status: 'Success',
        amount_usd: 60585000.0
      },
      {
        dateTime: 'October 8, 2012',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -380.0
      },
      {
        dateTime: 'November 3, 2011',
        description: 'Elite MedEquip International Equipment sales and shipment clearance - XXXXXX2366',
        status: 'Success',
        amount_usd: 125000.0
      },
      {
        dateTime: 'November 2, 2011',
        description: 'VAT Fee - XXXXXX4536',
        status: 'Success',
        amount_usd: -128.0
      },
      {
        dateTime: 'July 14, 2010',
        description: 'Victor Huang Real estate partial settlement - XXXXXX6567',
        status: 'Success',
        amount_usd: 65200.0
      },
      {
        dateTime: 'July 10, 2010',
        description: 'VAT Fee - XXXXXX4536',
        status: 'Success',
        amount_usd: -235.0
      },
      {
        dateTime: 'January 25, 2009',
        description: 'Greenway Construction Corp. Subcontractor project payout - XXXXXX2567',
        status: 'Success',
        amount_usd: 134000.0
      },
      {
        dateTime: 'January 12, 2009',
        description: 'VAT Fee - XXXXXX2437',
        status: 'Success',
        amount_usd: -128.0
      },
      {
        dateTime: 'September 2, 2007',
        description: 'Maria Lopez Personal transfer (Family support) - XXXXXX7655',
        status: 'Success',
        amount_usd: 22300.0
      },
      {
        dateTime: 'March 18, 2006',
        description: 'GlobalTech Solutions LLC Payment for IT consulting services - XXXXXX2355',
        status: 'Success',
        amount_usd: 89500.0
      }
    ]
  },
  {
    account_id: 'ACC048',
    holder: {
      firstName: 'Diana Berg',
      email: 'd**@gmail.com',
      createdOn: '8/3/2025', // m/d/y
      username: 'Diana4122',
      password: 'Dianalovegary'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 14012600.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact bank manager for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 7, 2025',
        description: 'Transfer from Estate of Richard Thompson - XXXXXX8745',
        status: 'Success',
        amount_usd: 275000.0
      },
      {
        dateTime: 'August 4, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX8324',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'July 8, 2025',
        description: 'Transfer to Emily Wagner - XXXXXX3467',
        status: 'Success',
        amount_usd: -80000.0
      },
      {
        dateTime: 'July 6, 2025',
        description: 'Transfer from Sofia Müller - XXXXXX9124',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'July 2, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 422000.0
      },
      {
        dateTime: 'June 29, 2025',
        description: 'Transfer fee - XXXXXX4893',
        status: 'Success',
        amount_usd: -75.5
      },
      {
        dateTime: 'June 21, 2025',
        description: 'Transfer to Lucas Dubois - XXXXXX7119',
        status: 'Success',
        amount_usd: -98000.0
      },
      {
        dateTime: 'June 15, 2025',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 2, 2025',
        description: 'Transfer from Olivia Smith - XXXXXX6390',
        status: 'Success',
        amount_usd: 194500.0
      },
      {
        dateTime: 'May 16, 2025',
        description: 'Transfer to Matteo Rossi - XXXXXX5321',
        status: 'Success',
        amount_usd: -472350.0
      },
      {
        dateTime: 'May 10, 2025',
        description: 'Transfer from Lucas Bianchi - XXXXXX1234',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'May 5, 2025',
        description: 'Service Fee - XXXXXX5678',
        status: 'Success',
        amount_usd: -150.0
      },
      {
        dateTime: 'April 21, 2025',
        description: 'Transfer from Emma Brown - XXXXXX2019',
        status: 'Success',
        amount_usd: 102800.0
      },
      {
        dateTime: 'April 15, 2025',
        description: 'Transfer to William Green - XXXXXX8765',
        status: 'Success',
        amount_usd: -45000.0
      },
      {
        dateTime: 'April 2, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -38000.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Transfer from Hannah Lee - XXXXXX4321',
        status: 'Success',
        amount_usd: 95000.0
      },
      {
        dateTime: 'March 1, 2025',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer to David Clark - XXXXXX2910',
        status: 'Success',
        amount_usd: -35000.0
      },
      {
        dateTime: 'February 15, 2025',
        description: 'Service Fee - XXXXXX6543',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'February 9, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -120500.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer from Olivia Brown - XXXXXX9987',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Service Fee - XXXXXX2234',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'January 1, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      }
    ]
  },
  {
    account_id: 'ACC049',
    holder: {
      firstName: 'Philip Johnson',
      welcomeName: 'Johnson',
      email: 'johnsonph**@gmail.com',
      createdOn: '8/6/2025', // m/d/y
      username: 'johnsonphilip5071',
      password: 'Janet001'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 3000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact bank manager for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 15, 2019',
        description: 'Transfer from Matthew Miller - XXXXXX8745',
        status: 'Success',
        amount_usd: 500480.0
      },
      {
        dateTime: 'August 14, 2019',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 20, 2019',
        description: 'Transfer from Sarah Johnson - XXXXXX1234',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'July 19, 2019',
        description: 'VAT Fee - XXXXXX4666',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'October 25, 2017',
        description: 'Transfer from Becky Bells donations - XXXXXX8324',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 24, 2017',
        description: 'VAT Fee - XXXXXX3482',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 27, 2017',
        description: 'Transfer from Michael Green - XXXXXX2345',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'September 26, 2017',
        description: 'VAT Fee - XXXXXX3764',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'November 15, 2016',
        description: 'Transfer from Robert Wilson - XXXXXX5566',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'November 14, 2016',
        description: 'VAT Fee - XXXXXX3487',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'October 25, 2016',
        description: 'Transfer from Patricia Moore - XXXXXX7788',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 24, 2016',
        description: 'VAT Fee - XXXXXX3488',
        status: 'Success',
        amount_usd: -80.0
      }
    ]
  },
  {
    account_id: 'ACC050',
    holder: {
      firstName: 'William Scott Serrano',
      email: 'w**@gmail.com',
      createdOn: '8/16/2025', // m/d/y
      username: 'WilliamSerrano26',
      password: 'Angie25'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 3500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '25217',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact bank manager for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 14, 2025',
        description: 'Transfer from Michael Green - XXXXXX3458',
        status: 'Success',
        amount_usd: 285000.0
      },
      {
        dateTime: 'August 7, 2025',
        description: 'Transfer from Estate of Richard Thompson - XXXXXX8745',
        status: 'Success',
        amount_usd: 127500.0
      },
      {
        dateTime: 'August 4, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX8324',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'July 8, 2025',
        description: 'Transfer to Emily Wagner - XXXXXX3467',
        status: 'Success',
        amount_usd: -80000.0
      },
      {
        dateTime: 'July 6, 2025',
        description: 'Transfer from Sofia Müller - XXXXXX9124',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'July 2, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        dateTime: 'June 29, 2025',
        description: 'Transfer fee - XXXXXX4893',
        status: 'Success',
        amount_usd: -75.5
      },
      {
        dateTime: 'June 21, 2025',
        description: 'Transfer to Lucas Dubois - XXXXXX7119',
        status: 'Success',
        amount_usd: -9800.0
      },
      {
        dateTime: 'June 15, 2025',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 2, 2025',
        description: 'Transfer from Olivia Smith - XXXXXX6390',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'May 16, 2025',
        description: 'Transfer to Matteo Rossi - XXXXXX5321',
        status: 'Success',
        amount_usd: -47230.0
      },
      {
        dateTime: 'May 10, 2025',
        description: 'Transfer from Lucas Bianchi - XXXXXX1234',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'May 5, 2025',
        description: 'Service Fee - XXXXXX5678',
        status: 'Success',
        amount_usd: -150.0
      },
      {
        dateTime: 'April 21, 2025',
        description: 'Transfer from Emma Brown - XXXXXX2019',
        status: 'Success',
        amount_usd: 10280.0
      },
      {
        dateTime: 'April 15, 2025',
        description: 'Transfer to William Green - XXXXXX8765',
        status: 'Success',
        amount_usd: -45000.0
      },
      {
        dateTime: 'April 2, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -38000.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Transfer from Hannah Lee - XXXXXX4321',
        status: 'Success',
        amount_usd: 95000.0
      },
      {
        dateTime: 'March 1, 2025',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer to David Clark - XXXXXX2910',
        status: 'Success',
        amount_usd: -35000.0
      },
      {
        dateTime: 'February 15, 2025',
        description: 'Service Fee - XXXXXX6543',
        status: 'Success',
        amount_usd: -75.0
      },
      {
        dateTime: 'February 9, 2025',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -120500.0
      },
      {
        dateTime: 'January 25, 2025',
        description: 'Transfer from Olivia Brown - XXXXXX9987',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Service Fee - XXXXXX2234',
        status: 'Success',
        amount_usd: -100.0
      },
      {
        dateTime: 'January 1, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'December 30, 2024',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'December 10, 2024',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -120500.0
      },
      {
        dateTime: 'November 2, 2024',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9000.0
      },
      {
        dateTime: 'September 10, 2024',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 492300.0
      },
      {
        dateTime: 'August 4, 2024',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -15700.0
      },
      {
        dateTime: 'July 7, 2024',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 110000.0
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -240500.0
      },
      {
        dateTime: 'March 3, 2024',
        description: 'Transfer from Charlotte White - XXXXXX9800',
        status: 'Success',
        amount_usd: 70000.0
      }
    ]
  },
  {
    account_id: 'ACC051',
    holder: {
      firstName: 'Jenny Miller',
      email: 'j**@gmail.com',
      createdOn: '8/17/2025', // m/d/y
      username: 'JennyMiller24',
      password: 'Tahoka@23'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 4000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '25217',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact headquarters Bank of America for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 28, 2025',
        description: 'Wire transfer - XXXXXX3458',
        status: 'Success',
        amount_usd: 45350800.0
      },
      {
        dateTime: 'May 2, 2025',
        description: 'Wire transfer - XXXXXX8745',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'March 16, 2025',
        description: 'Wire transfer - XXXXXX8324',
        status: 'Success',
        amount_usd: 6450.0
      },
      {
        dateTime: 'January 7, 2025',
        description: 'Wire transfer - XXXXXX3467',
        status: 'Success',
        amount_usd: 3500.0
      },
      {
        dateTime: 'April 8, 2024',
        description: 'Wire transfer - XXXXXX9124',
        status: 'Success',
        amount_usd: 750.0
      },
      {
        dateTime: 'April 5, 2024',
        description: 'Wire transfer - XXXXXX3491',
        status: 'Success',
        amount_usd: 900.0
      },
      {
        dateTime: 'October 23, 2023',
        description: 'Wire transfer - XXXXXX4893',
        status: 'Success',
        amount_usd: 1250.5
      },
      {
        dateTime: 'September 10, 2023',
        description: 'Wire transfer - XXXXXX7119',
        status: 'Success',
        amount_usd: 3500.0
      },
    ]
  },
  {
    account_id: 'ACC052',
    holder: {
      firstName: 'Alison Krauss',
      email: 'a*@gmail.com',
      createdOn: '9/1/2025', // m/d/y
      username: 'fiddlequeen1971',
      password: 'TAkus1971$'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 7020300.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '25217',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact headquarters Bank of America for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Concert Revenue – Nashville Show - XXXXXX1023',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'August 27, 2025',
        description: 'Session Musicians & Crew Payroll - XXXXXX8472',
        status: 'Success',
        amount_usd: -42800.0
      },
      {
        dateTime: 'August 23, 2025',
        description: 'Streaming Royalty Deposit - XXXXXX5639',
        status: 'Success',
        amount_usd: 76450.0
      },
      {
        dateTime: 'August 20, 2025',
        description: 'Tour Bus Lease (August) - XXXXXX2314',
        status: 'Success',
        amount_usd: -9200.0
      },
      {
        dateTime: 'August 15, 2025',
        description: 'Merchandise Sales – Online Store - XXXXXX4590',
        status: 'Success',
        amount_usd: 18750.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Hotel Accommodations – Dallas Tour - XXXXXX9806',
        status: 'Success',
        amount_usd: -6480.0
      },
      {
        dateTime: 'August 8, 2025',
        description: 'Collector’s Fiddle Purchase - XXXXXX3178',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'August 5, 2025',
        description: 'Ticket Revenue – Chicago Concert - XXXXXX6845',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'August 1, 2025',
        description: 'Utility & Studio Overhead - XXXXXX7529',
        status: 'Success',
        amount_usd: -2150.0
      },
      {
        dateTime: 'March 20, 2024',
        description: 'Studio sessions for duet album - XXXXXX1023',
        status: 'Success',
        amount_usd: -16900.0
      },
      {
        dateTime: 'January 15, 2024',
        description: 'New year merchandise sales - XXXXXX5738',
        status: 'Success',
        amount_usd: 14200.0
      },
      {
        dateTime: 'December 20, 2023',
        description: 'End-of-year royalty payout - XXXXXX6849',
        status: 'Success',
        amount_usd: 72500.0
      },
      {
        dateTime: 'October 15, 2023',
        description: 'Tour payroll & expenses - XXXXXX3092',
        status: 'Success',
        amount_usd: -61800.0
      },
      {
        dateTime: 'August 20, 2023',
        description: 'TV appearance performance fee - XXXXXX4810',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Merch booth sales (summer shows) - XXXXXX7291',
        status: 'Success',
        amount_usd: 18250.0
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Bus & equipment transport - XXXXXX1847',
        status: 'Success',
        amount_usd: -22600.0
      },
      {
        dateTime: 'April 15, 2023',
        description: 'Ticket revenue (Spring Concert Series) - XXXXXX3928',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'February 20, 2023',
        description: 'Studio rental for collaborations - XXXXXX1027',
        status: 'Success',
        amount_usd: -11400.0
      },
      {
        dateTime: 'December 15, 2022',
        description: 'Holiday album streaming royalties - XXXXXX5928',
        status: 'Success',
        amount_usd: 33700.0
      },
      {
        dateTime: 'November 20, 2022',
        description: 'Sponsorship payment (music gear brand) - XXXXXX7012',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'June 20, 2021',
        description: 'Ticket presales (Summer Tour, later canceled) - XXXXXX9401',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'April 15, 2021',
        description: 'Session musicians payroll - XXXXXX5739',
        status: 'Success',
        amount_usd: -35200.0
      },
      {
        dateTime: 'February 20, 2021',
        description: 'Grammy appearance stipend - XXXXXX2390',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'December 15, 2020',
        description: 'Holiday merchandise sales - XXXXXX9045',
        status: 'Success',
        amount_usd: 12400.0
      },
      {
        dateTime: 'September 20, 2020',
        description: 'Home studio equipment upgrade - XXXXXX1203',
        status: 'Success',
        amount_usd: -18300.0
      },
      {
        dateTime: 'July 15, 2020',
        description: 'Charity donation (COVID-19 relief) - XXXXXX1983',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'May 20, 2020',
        description: 'Streaming platform royalty deposit - XXXXXX2749',
        status: 'Success',
        amount_usd: 42600.0
      },
      {
        dateTime: 'March 15, 2020',
        description: 'Instrument insurance annual premium - XXXXXX4837',
        status: 'Success',
        amount_usd: -1750.0
      },
      {
        dateTime: 'February 20, 2020',
        description: 'Studio rental for recording sessions - XXXXXX5921',
        status: 'Success',
        amount_usd: -8200.0
      },
      {
        dateTime: 'January 15, 2020',
        description: 'Album royalty payment (2019 sales) - XXXXXX1083',
        status: 'Success',
        amount_usd: 55800.0
      }
    ]
  },
  {
    account_id: 'ACC053',
    holder: {
      firstName: 'Joseph Kerlin',
      email: 'jk***@gmail.com',
      createdOn: '9/8/2025', // m/d/y
      username: 'Josephlin256',
      password: 'Luli1947'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      account_number: '',
      routing_number: '',
      balance_usd: 500000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '25217',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on Hold . You can’t make transactions right now please contact your activation manager for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer Payment From Eric~Edward Oilfield company - XXXXXX8293',
        status: 'Success',
        amount_usd: 125000000.0
      },
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer Payment From Eric~Edward Oilfield company - XXXXXX3843',
        status: 'Success',
        amount_usd: 125000000.0
      },
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer Payment From Eric~Edward Oilfield company - XXXXXX5444',
        status: 'Success',
        amount_usd: 125000000.0
      },
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer Payment From Eric~Edward Oilfield company - XXXXXX6456',
        status: 'Success',
        amount_usd: 125000000.0
      },
    ]
  }
];
