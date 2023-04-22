import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { TbArrowsRight } from 'react-icons/tb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AccountLayout, setLayout } from './AccountSlice';

export const Account = () => {
  const dispatch = useAppDispatch();
  const layout = useAppSelector((state) => state.account.layout);
  return (
    <div className='flex flex-col w-full gap-2 md:flex-row flex-1 py-2'>
      <div className='flex items-center md:items-start md:flex-col md:justify-start gap-4 text-center border-b-2 md:border-b-0 md:border-r-2 border-cyan-950 px-4 pb-4'>
        <button
          className='link items-center'
          onClick={() => {
            dispatch(setLayout(AccountLayout.Personal));
          }}
        >
          <BsPerson className='inline mb-1' /> Personal
        </button>
        <button
          className='link'
          onClick={() => {
            dispatch(setLayout(AccountLayout.Sessions));
          }}
        >
          <TbArrowsRight className='inline mb-1' /> Sessions
        </button>
      </div>
      <div className='px-4'>
        {layout === AccountLayout.Personal && 'Personal'}
        {layout === AccountLayout.Sessions && 'Sessions'}
      </div>
    </div>
  );
};
