import React from 'react';
import { IconType } from 'react-icons';
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

interface ButtonProps {
  children: React.ReactNode;
  type?: 'stroke' | 'fill' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const NewButton: React.FC<ButtonProps> = ({
  children,
  type = 'stroke',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
}) => {
  const classes = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'transition',
    'ease-in-out',
    'duration-200',
  ];

  switch (type) {
    case 'stroke':
      classes.push('border', 'border-gray-300', 'bg-transparent');
      break;
    case 'fill':
      classes.push('bg-blue-500', 'text-white');
      break;
    case 'plain':
      classes.push('bg-transparent', 'text-gray-600');
      break;
    default:
      break;
  }

  switch (size) {
    case 'sm':
      classes.push('px-2', 'py-1', 'text-xs');
      break;
    case 'md':
      classes.push('px-4', 'py-2', 'text-sm');
      break;
    case 'lg':
      classes.push('px-6', 'py-3', 'text-base');
      break;
    default:
      break;
  }

  if (icon) {
    classes.push('flex');
  }

  return (
    <button
      type="button"
      className={`${classes.join(' ')} ${className}`}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">
          <HiChevronLeft />
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">
          <HiChevronRight />
        </span>
      )}
    </button>
  );
};

export default NewButton;