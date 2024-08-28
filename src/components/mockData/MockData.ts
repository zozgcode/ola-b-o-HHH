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
      transaction_code: '123569w2762',
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
      transaction_code: '123569w2762',
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
      transaction_code: '123569w2762',
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
      transaction_code: '123569w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'August 5 2024, 11:21:01 am',
        description: 'Deposit from AUL Corp.',
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
      transaction_code: '123569w2762',
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
      balance_usd: 1355.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '123569w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'August 27 2024',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 500000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 21 2024',
        description: 'Debit from booking.com',
        status: 'Success',
        amount_usd: -1302.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 19 2024',
        description: 'Debit from United Airlines',
        status: 'Success',
        amount_usd: -970.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'August 16 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -375.52,
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
        amount_usd: -7000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 5 2024',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN008',
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
      transaction_code: '123569w2762',
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
      // {
      //   transaction_id: "TXN003",
      //   dateTime: "March 19 2024",
      //   description: "Debit from United Airlines",
      //   status: "Success",
      //   amount_usd: -970.0,
      //   account_no: "****1156",
      // },
      // {
      //   transaction_id: "TXN004",
      //   dateTime: "January 16 2024",
      //   description: "Debit from Walmart",
      //   status: "Success",
      //   amount_usd: -375.52,
      //   account_no: "****1156",
      // },
      // {
      //   transaction_id: "TXN005",
      //   dateTime: "November 10 2023",
      //   description: "Withdrawal",
      //   status: "Success",
      //   amount_usd: -4000.0,
      //   account_no: "****1156",
      // },
      // {
      //   transaction_id: "TXN006",
      //   dateTime: "August 5 2023",
      //   description: "Withdrawal",
      //   status: "Success",
      //   amount_usd: -7000.0,
      //   account_no: "****9876",
      // },
      // {
      //   transaction_id: "TXN007",
      //   dateTime: "May 20 2023",
      //   description: "Credit from Investment",
      //   status: "Success",
      //   amount_usd: 15000.0,
      //   account_no: "****9876",
      // },
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
      username: 'f',
      password: 'ff'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 4400000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '123569w2762',
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
        description: 'transfer to Zendesk',
        status: 'Success',
        amount_usd: -250000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'June 30 2024',
        description: 'transfer to Corsair',
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
        description: 'transfer to Sonos',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****9457'
      },
      {
        transaction_id: '007',
        dateTime: 'March 5 2024',
        description: 'transfer to Qualtrics',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****6328'
      },
      {
        transaction_id: '008',
        dateTime: 'February 20 2024',
        description: 'transfer to Zebra Technologies',
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
        description: 'transfer to Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        transaction_id: '011',
        dateTime: 'November 22 2023',
        description: 'transfer to HubSpot',
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
        description: 'transfer to Datadog',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        transaction_id: '014',
        dateTime: 'August 15 2023',
        description: 'transfer to Western Digital',
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
      transaction_code: '123569w2762',
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
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
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
  }
];
