'use client'
import { motion } from 'framer-motion'
import { projectData } from './projectsData'
import styles from './ProjectsCard.module.scss'
import Heading3 from '@/components/typography/heading3/Heading3'
import Image from 'next/image'
import BodyText from '@/components/typography/body-text/BodyText'
import ExternalLink from '@/components/links/external-link/ExternalLink'

export default function ProjectsCard() {
  return (
    <>
      {projectData.map((project, index) => (
        <div key={index} className={styles.projectsCard}>
          <Heading3>{project.title}</Heading3>
          <motion.div>
            <Image
              className={styles.image}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              src={project.image}
              alt={project.altTag}
              width={1600}
              height={1200}
            />
          </motion.div>
          <motion.div
            className={styles.tech}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {project.tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </motion.div>
          <BodyText className={styles.description}>{project.description}</BodyText>
          <div className={styles.links}>
            <ExternalLink href={project.blog}>
              {project.title} Blog
            </ExternalLink>
            <ExternalLink href={project.github}>
              {project.title} Github
            </ExternalLink>
            <ExternalLink href={project.demo}>
              {project.title} Demo
            </ExternalLink>
          </div>
        </div>
      ))}
    </>
  )
}
