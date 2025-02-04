import React from 'react'
import styles from './card.module.css'
import { FiEdit3 } from "react-icons/fi";

interface buttonInterface{
    onEdit: () => void
}

const button = ({onEdit}:buttonInterface) => {
  return (
    <div className='pos' onClick={onEdit}>
      <div className={styles.btn}>
        <FiEdit3 />
        </div>
    </div>
  )
}

export default button