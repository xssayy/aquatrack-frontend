import { useEffect, useState } from 'react';
import css from './CalendarPagination.module.css';

export const CalendarPagination = () => {
  const [currentMonthYear, setCurrentMonthYear] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setCurrentMonthYear(formattedDate);
  }, []);

  return (
    <div className={css.dateWrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 13.5L6.75 9L11.25 4.5"
          stroke="#323F47"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h3 className={css.dateTitle}>April, 2024</h3>

      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75 13.5L11.25 9L6.75 4.5"
          stroke="#323F47"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" clip-path="url(#clip0_66_438)">
          <path
            d="M14.3332 11.6666C14.564 11.6666 14.6794 11.6666 14.773 11.7179C14.8501 11.7602 14.922 11.8396 14.9563 11.9206C14.998 12.0188 14.9875 12.1232 14.9665 12.3322C14.8578 13.4156 14.485 14.4595 13.8763 15.3704C13.1438 16.4668 12.1026 17.3212 10.8844 17.8258C9.66622 18.3304 8.32578 18.4624 7.03257 18.2052C5.73936 17.948 4.55148 17.313 3.61913 16.3807C2.68678 15.4483 2.05184 14.2604 1.79461 12.9672C1.53737 11.674 1.66939 10.3336 2.17398 9.11541C2.67856 7.89724 3.53304 6.85605 4.62937 6.12351C5.54031 5.51484 6.58422 5.14197 7.66759 5.03327C7.87656 5.01231 7.98104 5.00182 8.07924 5.04348C8.16024 5.07785 8.23964 5.14968 8.28192 5.22684C8.33317 5.32039 8.33317 5.4358 8.33317 5.66664V11C8.33317 11.2333 8.33317 11.35 8.37859 11.4391C8.41853 11.5175 8.48228 11.5813 8.56068 11.6212C8.64981 11.6666 8.76649 11.6666 8.99984 11.6666H14.3332Z"
            stroke="#323F47"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6665 2.33339C11.6665 2.10256 11.6665 1.98714 11.7178 1.89359C11.76 1.81643 11.8394 1.7446 11.9204 1.71023C12.0186 1.66857 12.1231 1.67905 12.3321 1.70001C13.8558 1.85285 15.2882 2.52698 16.3805 3.61935C17.4729 4.71172 18.1471 6.14414 18.2999 7.66781C18.3208 7.87679 18.3313 7.98127 18.2897 8.07947C18.2553 8.16047 18.1835 8.23986 18.1063 8.28214C18.0128 8.33339 17.8973 8.33339 17.6665 8.33339L12.3332 8.33339C12.0998 8.33339 11.9831 8.33339 11.894 8.28798C11.8156 8.24803 11.7519 8.18429 11.7119 8.10589C11.6665 8.01676 11.6665 7.90008 11.6665 7.66673L11.6665 2.33339Z"
            stroke="#9BE1A0"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_66_438">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
