import { motion } from "framer-motion";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className="main">
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Section
            image="/images/section1.png"
            title="The best word game bot that supports Azerbaijani"
            description="Enjoy the game with 60,000+ words in Azerbaijani language! Also supports Turkish and English"
          />
        </motion.div>
        <motion.div
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Section
            image="/images/wordle.png"
            title="Wordle"
            description="Very advanced wordle command that supports English, Turkish and Azerbaijani"
          />
        </motion.div>
        <motion.div
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Section
            image="/images/checkword.png"
            title="Word Info"
            description="Check if the word you entered is available in the language you want (currently Azerbaijan Turkish and English)"
          />
        </motion.div>
        <motion.div
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Section
            image="/images/wcstatistics.png"
            title="Word Chain Statistics"
            description="View the best players in Word Chain game"
          />
        </motion.div>
        <motion.div
          custom={4}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Section
            image="/images/section5.png"
            title="Word Chain"
            description="Play Word Chain in 3 different languages ​​at the same time"
          />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
