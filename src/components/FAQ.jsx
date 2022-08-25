import React from 'react'
import "../styles/faq.css"
import { FaqData } from './FAQData'

const FAQ = () => {
  return (
    <div className='faqContainer'>
        {FaqData.map((faq, index) => {
            return (
                <div className="faq" key={index}>
                    <h4 className='faqTitle'>{faq.title}</h4>
                    <p className='faqContent'>{faq.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FAQ