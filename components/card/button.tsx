import React from 'react'
import styles from './card.module.css'
import { RiDeleteBin5Line } from "react-icons/ri";

interface buttonInterface{
    onDelete: () => void
}

const button = ({onDelete}:buttonInterface) => {
  return (
    <div className='pos' onClick={onDelete}>
      <div className={styles.btn}>
        <RiDeleteBin5Line />
        </div>
    </div>
  )
}

export default button