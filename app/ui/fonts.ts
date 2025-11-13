import { Lusitana } from 'next/font/google';

// Expose a Lusitana font instance for components to consume.
// This file is intentionally simple — adjust weights/subsets as needed.
export const lusitana = Lusitana({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default lusitana;
