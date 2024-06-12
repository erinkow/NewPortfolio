"use client";

import React from 'react';

export const ScrollUp = () => {

    return (
        <div className='fixed bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer'>
            <div className='relative w-6 h-6'>
                <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move rotate-180'></div>
                <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move1 rotate-180'></div>
                <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move2 rotate-180'></div>
            </div>
            <span className='block mt-[3rem] text-center font-sans text-xs text-white uppercase whitespace-nowrap opacity-25 animate-pulse'>
                scroll up
            </span>
        </div>
    );
};
