'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import successfullIcon from '@/public/icons/icon-success.svg';
import errorIcon from '@/public/icons/icon-error.svg';
import style from './index.module.css';

export default function SubscribeSection() {
  const [mail, setMail] = useState<string>('');
  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(mail);
    if (!isValidEmail) return setIsSuccessful(false);
    setIsSuccessful(true);
  };

  return (
    <form onSubmit={handleSubmit} className={`${style.container} ${isSuccessful ? style.success : isSuccessful === false ? style.error : ''}`}>
      <label>Email Address</label>
      <input placeholder='email@example.com' value={mail} onChange={(e) => setMail(e.target.value)} />
      {isSuccessful !== null && (
        <div className={style.infoContainer}>
          <Image src={isSuccessful ? successfullIcon : errorIcon} alt='info icon' width={16} height={16} />
          <p className={`${isSuccessful ? style.success : style.error}`}>{`${isSuccessful ? 'You’re subscribed! Check your inbox for updates.' : 'Please enter a valid email address.'}`} </p>
        </div>
      )}
      <button type='submit'>Stay updated</button>
      <p>Unsubscribe anytime. No spam, I promise 🙂</p>
    </form>
  );
}
