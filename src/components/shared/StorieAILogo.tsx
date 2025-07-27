'use client';
import Image from 'next/image';

const StorieAILogo = () => {
  return (
    <div className="relative w-[120px] h-[45px]">
      <Image
        src="/logo/storieAI_light.png"
        alt="StorieAI Logo Light"
        fill
        className="block dark:hidden object-contain"
        priority
      />

      <Image
        src="/logo/storieAI_dark.png"
        alt="StorieAI Logo Dark"
        fill
        className="hidden dark:block object-contain"
        priority
      />
    </div>
  );
};

export default StorieAILogo;
