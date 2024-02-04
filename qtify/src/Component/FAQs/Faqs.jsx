import React, { useState } from 'react'
import styles from './Faqs.module.css'
import accordionDownArrow from '../../assets/accordionDownArrow.png'
import accordionUpArrow from '../../assets/accordionUpArrow.png'

const Faqs = () => {
    const [accordionToggle1, setAccordionToggle1] = useState(false);
    const [accordionToggle2, setAccordionToggle2] = useState(false);

    const handleToggle1 =() =>(
        setAccordionToggle1(!accordionToggle1)
    )
    const handleToggle2 =() =>(
        setAccordionToggle2(!accordionToggle2)
    )
  return (
    <div className={styles.wrapper}>
        <h1>FAQs</h1>
        <div className={styles.accordionSummary}>
            <p>Is QTify free to use?</p>
            {!accordionToggle1 ? 
            <img src={accordionDownArrow} alt="DownArrow" onClick={handleToggle1} /> :
            <img src={accordionUpArrow} alt="DownArrow" onClick={handleToggle1} />
            }
        </div>
        {accordionToggle1 &&
        <div className={styles.accordionDescription}>
            <p>Yes! It is 100% free, and has 0% ads!</p>
        </div>
        }
        <div className={styles.accordionSummary}>
            <p>Can I download and listen to songs offline?</p>
            {!accordionToggle2 ? 
            <img src={accordionDownArrow} alt="DownArrow" onClick={handleToggle2} /> :
            <img src={accordionUpArrow} alt="DownArrow" onClick={handleToggle2} />
            }
        </div>
        {accordionToggle2 &&
        <div className={styles.accordionDescription}>
            <p>Sorry, unfortunately we don't provide the service to download any songs.</p>
        </div>
        }
    </div>
  )
}

export default Faqs