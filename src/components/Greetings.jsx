import { motion } from 'framer-motion'
import React from 'react'


const Greetings = () => {

    const headingText = "Hi, I'm Jerome Manset."
    const arrayText = headingText.split(' ')
    const lettersHeading = Array.from(headingText)
    console.log(headingText)
    console.log(arrayText)
    console.log(lettersHeading)

    const aboutMeText = "I am a self-taught front-end developer with a background in network engineering. I shifted my career to pursue my passion for web development, and I have been learning and building projects on my own. I am excited to continue growing my skills and contributing to the field."
    const arrayAboutMeText = aboutMeText.split(' ')


  return (
    <div className='hello-container b-green'>
        <motion.div style={ {overflow: "hidden", display: "flex", flexWrap:"wrap"}}
            initial="hidden"
            animate="visible"
            variants={{
                hidden:{opacity: 0},
                visible: (i = 1) => ({
                    opacity: 1,
                    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i} 
                })
             }}
            >
                {lettersHeading.map((letter, i) => (
                    <motion.p key={i}
                   className='title-hello'
                    variants={{
                        hidden:{
                            opacity: 0,
                            x: -20,
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100
                            }
                        },
                        visible:{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100
                            }
                        }
                    }}
                    >{letter === " " ? "\u00A0" : letter}</motion.p>
                ))}

                {arrayAboutMeText.map((word, i) => (
                    <motion.span key={i}
                   className=''
                    variants={{
                        hidden:{
                            opacity: 0,
                            x: 20,
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100
                            }
                        },
                        visible:{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100
                            }
                        }
                    }}
                    >{word}</motion.span>
                ))}

        </motion.div>
            

            <p>
            
            <br />
            In my free time, I enjoy watching NBA games and playing online games."
            </p>
    </div>
  )
}

export default Greetings
