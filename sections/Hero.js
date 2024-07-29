import React from "react"
import CountUp from "react-countup"
import { AiOutlineCalendar, TfiRulerPencil, VscFileSubmodule, BiUser } from "react-icons"
import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.0, // Trigger when 10% of the section is visible
  })

  return (
    <>
      <section className='hero pt-28'>
        <div className='container'>
          <TitleLogo title='QUANTUM TECH' caption='' className='logobg' />
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className='sub-heading animation-primary'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='APP DEVELOPMENT' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec' ref={ref}>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>
              At Quantum Tech, our expertise spans across various domains. Whether it's building a website, developing a mobile app, or creating an effective digital marketing strategy, our team has the skills and experience to deliver exceptional results.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>
                  {item.count && inView ? (
                    <CountUp end={item.count} duration={3} suffix={item.suffix} />
                  ) : (
                    item.title
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero