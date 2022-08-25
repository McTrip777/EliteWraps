import React from 'react'
import FAQ from './FAQ'
import "../styles/about.css"

const About = () => {
  return (
    <div className='aboutContainer'>
        <h2 className='aboutTitle'>About Us</h2>
        <p>
            Elite Wraps is a family owned operation here in the Treasure Valley 
            to provide captivating art with high quality cutting edge vinyl wraps 
            of all kinds. Since 1981, we have helped customers rise to new heights 
            in their business with the use of digital advertising. Whether you desire 
            a wrap for commercial use or personal use, no doubt, we help you STAND OUT!
        </p>
        <p>
            The origins of our family business goes back three generations. My grandfather
            built signs way before the digital printing era, but even before he discovered 
            the sign industry, my grandfather served the US when he toured in France during 
            World War II. He was awarded two medals, including the victory metal and came 
            home with thousands of American heroes. A year after his return, he went into 
            constructing signs and eventually started his own sign business called “Night and Day” 
            in 1957. My grandfather specialized mostly in steel framed signs for skyscrapers and 
            built his most prized signs, the KTLA sign. His business became a segway for my 
            father, Richard Meyers.
        </p>
        <p>
            Richard began hand lettering and painting as an artist. In 1981, 
            he opened up his own business, called Richard Signs.
            Through the years, Richard developed the skills and techniques in art design. 
            The techniques of art can be taught, but the imagination and an eye for design 
            are gifts that Richard was blessed with. He used these skills to produce high quality 
            work for his customers.
        </p>
        <p>
            Before the digital era, Richard satisfied his customers with hand painted signs 
            and designs. As technology spiked, he evolved his business into the digital printing 
            realm and integrated wraps of all kinds into it. Vehicle and storefront wraps became 
            essentials to advertising, providing unlimited measures to capture the audience's attention. 
            In 2013, Richard and my older brother Chris started Variety Wraps in Ventura County, California. 
            Variety Wraps became incredibly successful serving customers throughout all of southern California. 
            My name is Thomas Meyers and I joined the team at Variety Wraps in 2014, managing prints and vinyl 
            wrap installations. In 2022, Richard and I opened our family owned business, “Elite Wraps” and we 
            are excited to provide our expertise and customer service here in the Treasure Valley. 
        </p>
        <p className='last'>
            Everything we do is in house with 41 years of experience in art, fabrication, and manufacturing. 
            We would love to share our experience with you here at Elite Wraps. Do not doubt, we will help you STAND OUT.
        </p>
        <h2 className='aboutTitle'>Frequently Asked Questions</h2>
        <FAQ/>
    </div>
  )
}

export default About