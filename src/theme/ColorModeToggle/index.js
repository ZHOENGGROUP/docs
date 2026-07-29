import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L7.4,4.58C7.01,4.19,6.38,4.19,5.99,4.58z M16.54,16.95c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41l-1.06-1.06C17.56,16.56,16.93,16.56,16.54,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41c0.39,0.39,1.03,0.39,1.41,0L19.42,5.99z M7.05,16.54c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,16.54z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.37,5.51c-0.18,0.64-0.27,1.31-0.27,2c0,4.42,3.58,8,8,8c0.69,0,1.36-0.09,2-0.27C18.23,19.32,14.38,22,10,22c-4.97,0-9-4.03-9-9C1,8.62,4.68,4.77,9.37,5.51z"
      />
    </svg>
  );
}

export default function ColorModeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <button
      className={clsx('clean-btn', 'colorModeToggle')}
      onClick={toggleColorMode}
      type="button"
      aria-label={isDark ? '切换为浅色模式' : '切换为暗黑模式'}
      title={isDark ? '切换为浅色模式' : '切换为暗黑模式'}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
