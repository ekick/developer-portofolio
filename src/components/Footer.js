import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-ful border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Build With<span className='text-primary text-2xl px-1'>&#9829;</span>By&nbsp;<Link href="/" className='underline'>Rizqy Arham Fahmid</Link>
        </div>
        <Link href="/">Hi, I&apos;m ekick</Link>
      </Layout>
    </footer>
  )
}

export default Footer