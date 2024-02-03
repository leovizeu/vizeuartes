"use client"

import React from 'react'
import { CustomButtomProps } from '../types'

const CustomButtom = ({title, containerStyles, handleClick}: CustomButtomProps) => {
  return (
    <button 
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
        
    </button>
  )
}

export default CustomButtom