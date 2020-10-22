import React from 'react';
import Header from './../components/Header';
import Content from './../components/Content';
import Row from 'react-bootstrap/Row';
import { css } from 'glamor';




const About = () => (
<>
  <div>
    <div>
      <div className='container-layout p-3 pb-5'>
        <Row className='about-row' >
          <div  id='content-text' className='header-section col-sm-12 col-md-12 col-lg-8 order-1 order-sm-2'>
            <Header headerText='About Samantha Mann' />
            <br />
            <Content contentText='For many years I suffered from a menstrual disorder called endometriosis. I tried to ignore it as best I could, managing it through a number of surgeries, hormone treatments and, eventually, constant heavy painkiller usage. Throughout this I managed to obtain a degree and PhD in psychology, and a subsequent 19-year career in research. However, it eventually got to the stage where pain and discomfort were unmanageable and I could not continue to ignore the problem. Doctors had told me they could only offer pain management and this was not working. I took matters into my own hands, did some research, and made substantial changes to my diet. I was very focused – pain is very motivating – and after just a couple of months my efforts paid off. I could not believe that a few basic changes to what I ate could make such a remarkable difference. Within another month I was not taking painkillers at all. Doctors had previously always told me I had the condition, they did not know why, but that I would have to just manage it medically. Not only had my symptoms vanished but I also felt so much more energetic and lost a fair bit of weight, quite incidentally. I had been carrying too much weight but previous attempts to lose it had been temporary.'/>
            <br />
            <Content contentText='Before, I had always thought I ate healthily. I probably ate more vegetables than most people, tried to cut down on calories and fat. I thought I knew a lot about diet as I had always been interested in it. It turned out I knew very little really. There are many misconceptions out there, and of course as scientific discoveries are made, dietary advice changes. Also, the food industry is full of massive producers with all kinds of confusing marketing designed to convince us to eat food which is not the best for us.' />
            <br />
            <Content contentText='I wished I had made these changes many years ago, but also I became fascinated by diet, and how what you eat, together with other lifestyle facets, can completely alter – well, everything! I read numerous books and articles until I eventually decided I wanted to train as a health coach, particularly to help other women like me.'/>
            <br />
            <Content contentText='Of course I am not dismissing doctors, or any other practitioner. They do a fantastic job, but their time with you is limited. A health coach works with such practitioners – helping you to find ways to implement advice they have given you, if relevant – or better yet, helping you avoid having to see them at all. Prevention is better than cure!' />
          </div>
          <div className='col-sm-12 col-md-12 col-lg-4 order-lg-2 order-md-1 order-sm-1 order-xs-1' align='center'>
            <a href='https://www.ukhealthcoaches.com/england/liss/health-coach/samantha-mann' rel='noopener noreferrer' target='_blank'>
              <img
                className='sam-img pt-3 rounded'
                src='https://www.ukhealthcoaches.com/pictures/profile/pimage-391-41-photo.jpg'
                alt='Sam'
              />
            </a>
            <p id='certified-text'>Samantha Mann, PhD. Certified Health Coach</p>
            <div id='accreditation-logos-top'>
              <a href='https://www.ukhealthcoaches.com/england/liss/health-coach/samantha-mann' rel='noopener noreferrer' target='_blank'>
                <img
                  className='ukhc-logo img-responsive m-3'
                  src='https://www.heruniqueglow.com/uploads/images/_560x560_crop_center-center_85/UK-Health-Coaches-Association-copy.png'
                  alt='Health Coaches Association'
                />
              </a>
              <a href='https://www.integrativenutrition.com/health-coaching' rel='noopener noreferrer' target='_blank'>
                <img
                  className='iin-logo img-responsive m-3'
                  src='https://images.youracclaim.com/images/3809dced-24e0-43ff-8350-5e697ee99012/HCTP_INHC_Badge.png'
                  alt='Health Coaches Association'
                />
              </a>
            </div>
          </div>
        </Row>
        <div className='text-center p-5'>
          <p style={{fontSize:'calc(16px + 1.25vw)'}}><span style={{fontWeight:'700'}}>"Real Health Matters</span> now. Back to basics, back to nature, back to balance."</p>
        </div>
        <div id='accreditation-logos-bottom'>
              <a href='https://www.ukhealthcoaches.com/england/liss/health-coach/samantha-mann' rel='noopener noreferrer' target='_blank'>
                <img
                  className='ukhc-logo img-responsive'
                  src='https://www.heruniqueglow.com/uploads/images/_560x560_crop_center-center_85/UK-Health-Coaches-Association-copy.png'
                  alt='Health Coaches Association'
                />
              </a>
              <a href='https://www.integrativenutrition.com/health-coaching' rel='noopener noreferrer' target='_blank'>
                <img
                  className='iin-logo img-responsive'
                  src='https://images.youracclaim.com/images/3809dced-24e0-43ff-8350-5e697ee99012/HCTP_INHC_Badge.png'
                  alt='Health Coaches Association'
                />
              </a>
            </div>
      </div>
    </div>
  </div>
</>
);

export default About;
