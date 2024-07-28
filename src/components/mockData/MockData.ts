import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: "ACC001",
    holder: {
      firstName: "Andrew",
      lastName: "McNulty",
      mobileNumber: "+1-224-463-7589",
      nickName: "jford",
      gender: "Male",
      email: "a*@gmail.com",
      jointNames: "",
      username: "sample1",
      password: "sample1",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 115678.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 10 2024, 3:32:32 am",
        description: "Grimms supply holding's",
        status: "Success",
        amount_usd: 58000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2023, 1:04:02 pm",
        description: "Transfer from TABITHA MARTEL",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2022, 10:11:22 am",
        description: "Transfer from NICHOLAS DUKE",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "July 2 2021, 7:08:32 am",
        description: "Transfer from BRANDON PERKINS",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN005",
        dateTime: "November 23 2020, 1:15:02 pm",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: -650.0,
        account_no: "****1403",
      }, 
      {
        transaction_id: "TXN006",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN007",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN008",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN009",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN010",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN011",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN012",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN013",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN014",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN015",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN016",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN017",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
    ],
  },
  {
    account_id: "ACC002",
    holder: {
      firstName: "Lilian",
      lastName: "Willson",
      nickName: "willz",
      email: "l*@gmail.com",
      jointNames: "",
      username: "LilianWillson",
      password: "lilian1204",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 4800000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "July 24 2024, 8:03:06 am",
        description: "Transfer from G&C Mutual Bank",
        status: "Success",
        amount_usd: 1500000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN001",
        dateTime: "July 24 2024, 1:20:40 pm",
        description: "Transfer from G&C Mutual Bank",
        status: "Success",
        amount_usd: 1000000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN001",
        dateTime: "July 24 2024, 6:14:18 pm",
        description: "Transfer from G&C Mutual Bank",
        status: "Success",
        amount_usd: 700000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN001",
        dateTime: "June 10 2024, 3:32:32 am",
        description: "Grimms supply holding's",
        status: "Success",
        amount_usd: 58000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2023, 1:04:02 pm",
        description: "Transfer from TABITHA MARTEL",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2022, 10:11:22 am",
        description: "Transfer from NICHOLAS DUKE",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "July 2 2021, 7:08:32 am",
        description: "Transfer from BRANDON PERKINS",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN005",
        dateTime: "November 23 2020, 1:15:02 pm",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: -650.0,
        account_no: "****1403",
      }, 
      {
        transaction_id: "TXN006",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN007",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN008",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN009",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN010",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN011",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN012",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN013",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN014",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN015",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN016",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN017",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
    ],
  },
  {
    account_id: "ACC003",
    holder: {
      firstName: "JUDSON F GREENE",
      lastName: "",
      nickName: "",
      email: "j*@gmail.com",
      jointNames: "",
      username: "Greene669",
      password: "Greene@66907",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 0.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "July 27 2024, 8:03:06 am",
        description: "Deposit from Coin flip Machine",
        status: "Pending",
        amount_usd: 700.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "July 26 2024, 1:20:40 pm",
        description: "Deposit from Coin flip Machine",
        status: "Pending",
        amount_usd: 300.0,
        account_no: "****2637",
      },
    ],
  },
];
