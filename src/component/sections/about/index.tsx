import React from 'react'
import style from './about.module.scss'
import SectionHeader from '@/component/ui/sectionheader'

export default function AboutSection() {
  return (
    <section>
      <div className={style.container}>
        <SectionHeader title={"About Us"}/>
        <div className={style.content}>
            <h2>Finding Your Perfect Space Since 2000</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc hendrerit  nunc quis est mattis, et commodo metus euismod. 
                Nunc malesuada nisl eu  enim posuere luctus. Fusce eget est a 
                quam tincidunt commodo. In semper  rhoncus sem, non blandit enim 
                elementum eu. Morbi volutpat erat interdum eros tincidunt, ut maximus
                orci ornare. Fusce vitae sapien eget tellus  faucibus rutrum. Vivamus 
                auctor urna ut ex molestie, ut pellentesque  dolor porttitor.</p>
        </div>
        <div className={style.grid}>
            <div className={style.card}>
                <span>950+</span>
                <p>Properties Sold</p>
            </div>

            <div className={style.card}>
                <span>1337+</span>
                <p>Happy Clients</p>
            </div>

            <div className={style.card}>
                <span>25</span>
                <p>Years of Experience</p>
            </div>

            <div className={style.card}>
                <span>254</span>
                <p>Awards</p>
            </div>

        </div>
      </div>
    </section>
  )
}
