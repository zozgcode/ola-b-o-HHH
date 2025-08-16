'use client';
import { Account, Transaction } from '@/utils/types';
import React, { useState } from 'react';
import { formatCurrency } from '../formatCurrency';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';

interface TransactionHistoryProps {
  user: Account;
  hideBalance: boolean;
}
const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user, hideBalance }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const hasTransactions = user.transaction_history && user.transaction_history.length > 0;
  const transactionsToShow = showMore ? user.transaction_history : user.transaction_history.slice(0, 6);

  return (
    <div className="px-[16px]">
      <div className="w-full">
        <div className="text-[14px] rounded bg-[#d71e28]/10 p-2 w-full font-[500] flex items-center justify-between">
          <span>Recent Transactions</span>
          {hasTransactions && (
            <Link href="/dashboard/transactions" className="text-[13px] font-[500] text-[#d71e28]">
              See More
            </Link>
          )}
        </div>
        <div className="mt-[10px]">
          {transactionsToShow.length == 0 && <div className="text-sm text-center p-4">No Recent Transaction</div>}
          {transactionsToShow.map((transaction: Transaction) => (
            <div key={transaction.transaction_id} className="flex justify-between gap-4 py-3">
              <div className="flex gap-2 text-gray-800">
                <div className="">
                  <button className="border-none flex items-center justify-center outline-none rounded-full w-[35px] h-[35px] bg-[#d71e28]/10">
                    <HiArrowDown className={`${transaction.amount_usd < 0 ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="flex flex-col gap-1 justify-between">
                  <span className="text-[14px] uppercase font-[600]">{transaction.description}</span>
                  <span className="text-[10px] font-medium">{transaction.dateTime}</span>
                </div>
              </div>
              <div className="flex flex-col text-nowrap gap-1 text-right">
                <span className={`text-[14px] font-[600] ${transaction.amount_usd < 0 ? 'text-red-800' : ''}`}>{hideBalance ? '*****' : `${formatCurrency(transaction.amount_usd)}`}</span>
                <span className={`text-[10px] font-medium ${transaction.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>{transaction.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
