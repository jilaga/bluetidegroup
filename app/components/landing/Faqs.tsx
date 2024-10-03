'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { faqData } from './index'; // Assuming you have this file with the FAQ data
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';
import Smallie from '../Smallie';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="border w-full border-foundation-grey-grey-100 rounded-2xl sm:rounded-3xl overflow-hidden scrollbar-hide transition"
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between sm:items-center items-start sm:p-5 p-3 text-left gap-2"
    >
      <span className="w-full text-[1rem] sm:text-[1.25rem] text-foundation-grey-grey-400 tracking-[0.03em] leading-[150%] font-medium flex">
        {question}
      </span>
      {isOpen ? (
        <div className=" flex justify-center items-center size-8 sm:size-12 text-foundation-grey-grey-400 border rounded-3xl">
          <HiChevronUp
            className="size-4 sm:size-6 "
            style={{ strokeWidth: 0.25 }}
          />
        </div>
      ) : (
        <div className=" flex justify-center items-center size-8 sm:size-12 text-foundation-grey-grey-400 border rounded-3xl">
          <HiChevronDown
            className="size-4 sm:size-6 "
            style={{ strokeWidth: 0.25 }}
          />
        </div>
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <p className="text-[1rem]  leading-[150%] text-foundation-grey-grey-400">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ: NextPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full relative overflow-hidden flex flex-col items-start justify-start py-8 md:py-20 px-5 md:px-10 lg:px-20 box-border text-left text-xl text-foundation-grey-grey-100 font-title-1-semibold"
    >
      <div className="w-full flex flex-col lg:flex-row items-start  gap-10">
        <div className=" w-full flex flex-col items-start justify-start gap-4 ">
          <Smallie text = 'FAQs'/>
          <p className="max-w-[500px] text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] text-h4-semibold leading-[140%] font-semibold text-gray text-left">
            Find answers to common questions about us
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
