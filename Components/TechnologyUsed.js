import React from 'react';
import { DiReact, DiNodejsSmall, DiBootstrap, DiJsBadge, DiCss3, DiAtom, DiHtml5, DiGithubBadge } from "react-icons/di";
import { SiExpress, SiTypescript, SiServerless, SiTailwindcss, SiMaterialui, SiJest, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from 'framer-motion';

const TechnologyUsed = () => {
  const technologyData = [{}];

  return (
    <section className='mb-10' >
        <div className='m-5'>
          <div className='mb-2'>
            <h3 className='text-3xl pb-5 font-Michroma dark:text-white'>Technology I Use</h3>
          </div>
          <div className='flex flex-wrap gap-3 justify-center'>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl  rounded-xl p-5 grid justify-items-center dark:bg-gray-600 '>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>ReactJs</h3>
              <DiReact size="65" color='#61DBFB' />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>NodeJs</h3>
              <DiNodejsSmall size="65" color='#3C873A' />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Bootstrap</h3>
              <DiBootstrap size="65" color='purple' />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>JavaScript</h3>
              <DiJsBadge size="65" color='#f0db4f' />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>HTML</h3>
              <DiHtml5 size="65" />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>CSS</h3>
              <DiCss3 size="65" color='orange' />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>React Native</h3>
              <DiAtom size="65" color='#61DBFB' />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>ExpressJs</h3>
              <SiExpress size="65" />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Github</h3>
              <DiGithubBadge size="65" />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}}className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Typescript</h3>
              <SiTypescript size="65" color='#007acc' />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>NextJs</h3>
              <TbBrandNextjs size="65" />
            </motion.div>
            <motion.div whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Serverless</h3>
              <SiServerless size="65" color='#c2232a' />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600 '>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>TailwindCSS</h3>
              <SiTailwindcss size="65" color='#007acc'/>
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Material UI</h3>
              <SiMaterialui size="65" color='#009fc0'/>
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>Jest</h3>
              <SiJest size="65" />
            </motion.div>
            <motion.div  whileHover={{ rotate: 360, boxShadow: "5px 5px 5px rgb( 53, 210, 249)"}} className='text-center shadow-2xl rounded-xl p-5 grid justify-items-center dark:bg-gray-600'>
              <h3 className='text-lg font-medium mb-1 dark:text-gray-200'>PostgreSQL</h3>
              <SiPostgresql size="65" color='#009fc0'/>
            </motion.div>

            
            </div>
          </div>
        </section>
  )
}

export default TechnologyUsed