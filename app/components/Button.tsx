// components/CustomButton.tsx
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi2';

interface CustomButtonProps {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  buttonText?: string;
  hideButton?: boolean;
  swapIconPosition?: 'left' | 'right' | 'none';
  link?: string;
  target?: '_self' | '_blank';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor = 'bg-transparent',
  borderColor = 'border-transparent',
  textColor = 'text-black',
  iconColor = 'text-black',
  buttonText = 'Read more',
  hideButton = false,
  swapIconPosition = 'right',
  link,
  target = '_self',
}) => {
  if (hideButton) return null;

  const renderIcon = () => (
    <HiOutlineArrowRight
      className={`size-6  ${iconColor}`}
      style={{ strokeWidth: 1 }}
    />
  );

  if (link) {
    return (
      <a href={link} target={target}>
        <button
          className={`gap-3 flex items-center relative px-4 sm:px-4 py-3 sm:py-4 text-center
            text-[1.25rem] leading-[140%] font-medium font-montserrat border rounded-full ${bgColor} ${borderColor} ${textColor}`}
        >
          {swapIconPosition === 'left' && renderIcon()}
          <span>{buttonText}</span>
          {swapIconPosition === 'right' && renderIcon()}
        </button>
      </a>
    );
  }

  return (
    <div>
      <button
        className={`gap-3 flex items-center relative px-4 sm:px-4 py-3 sm:py-4 text-center text-[1.25rem] leading-[140%] font-medium font-montserrat border rounded-full ${bgColor} ${borderColor} ${textColor}`}
      >
        {swapIconPosition === 'left' && renderIcon()}
        <span>{buttonText}</span>
        {swapIconPosition === 'right' && renderIcon()}
      </button>
    </div>
  );
};

export default CustomButton;
