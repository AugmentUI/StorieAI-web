'use client';
import Image from 'next/image';
import StorieAILight from '@/assets/logo/StorieAI_light.png';
import StorieAIDark from '@/assets/logo/StorieAI_dark.png';

const StorieAILogo = () => {
  return (
    <div className="relative w-[120px] h-[45px]">
      <Image
        src={StorieAILight}
        alt="StorieAI Logo Light"
        fill
        className="block dark:hidden object-contain"
        priority
      />

      <Image
        src={StorieAIDark}
        alt="StorieAI Logo Dark"
        fill
        className="hidden dark:block object-contain"
        priority
      />
    </div>
  );
};

export default StorieAILogo;
