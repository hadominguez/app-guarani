import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <div class="wrapper">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
      <div class="six">Six</div>
    </div>
  )
}
