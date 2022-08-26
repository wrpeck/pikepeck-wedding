import './App.css';
import { useEffect, useState } from 'react';
import {
  NavBar,
  ActionCard,
  ActionCardCollection,
  FillingCollection,
  FillingCardCollection,
  HeroLayout1,
} from './ui-components';
import { Flex, TableRow } from '@aws-amplify/ui-react';
import React from 'react';
import PieDetails from './pages/filling';
import { DataStore } from '@aws-amplify/datastore';
import { PieFilling } from './models';

function App() {

  const openInNewTab = url => {
    window.open(url,'_blank','noopener,noreferrer');
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 650);
  }
  const [isShown, setIsShown] = useState(false);
  const [cardID, setCardID] = useState();

  const fillingPageInfo = {name: '', shortdesc: '', longdesc: '', image: '', show: false, tags: []};
  const [fillingPage, setFillingPage] = useState(fillingPageInfo);

  const cutePicture = 'https://piedcf957b765c74ad4b59c15553acb98e8210024-dev.s3.us-west-1.amazonaws.com/public/sarahandwesley6.jpg';
  const photoLink = 'https://photos.app.goo.gl/PmGWFJxzedwWWMbv5';
  const icebreakerLink = 'https://drive.google.com/drive/folders/15OaK-YTYpDvSlnThYCnlO3-oDRG0GGw4?usp=sharing';


  useEffect(() => {
    window.addEventListener("resize",updateMedia);
    return () => window.removeEventListener("resize",updateMedia);
  });

  useEffect( () => {
    fillingPage.show && window.scrollTo(0,0)
  },[]);

  return (
    <div className="App" style={styles.app}>
      <div className='header'>
        <NavBar overrides={{
          "NavBar" : {
            width: '100vw',
            backgroundColor: '#C2C094',
          },
          "Star 1" : {
            "paths" : [
              {
                d: "M8.12249 1.60573C8.50171 0.911796 9.49829 0.911796 9.87751 1.60573L10.9602 3.58693C11.1657 3.96292 11.5879 4.16622 12.0099 4.09244L14.234 3.70368C15.0129 3.56751 15.6343 4.34666 15.3282 5.07581L14.4543 7.15757C14.2884 7.55264 14.3927 8.00946 14.7135 8.29344L16.4041 9.78987C16.9963 10.314 16.7745 11.2856 16.0136 11.5009L13.8412 12.1156C13.4289 12.2323 13.1367 12.5986 13.1147 13.0265L12.9989 15.2813C12.9583 16.071 12.0604 16.5034 11.4176 16.0427L9.58254 14.7275C9.23429 14.4779 8.76571 14.4779 8.41746 14.7275L6.58236 16.0427C5.9396 16.5034 5.04172 16.071 5.00113 15.2813L4.88526 13.0265C4.86327 12.5986 4.57112 12.2323 4.15884 12.1156L1.98638 11.5009C1.22546 11.2856 1.0037 10.314 1.59585 9.78987L3.28646 8.29344C3.6073 8.00946 3.71156 7.55264 3.54571 7.15757L2.6718 5.07581C2.36571 4.34666 2.98706 3.56751 3.76604 3.70368L5.99007 4.09244C6.41214 4.16622 6.83431 3.96292 7.03978 3.58693L8.12249 1.60573Z",
                fill: "#365681",
                fillRule: "nonzero",
              },
            ]
          },
          'Logo29767075' : {
            children: 'S&W'
          },
          'Dashboard' : {
            children: '',
            width: '0px'
          },
          'Jobs' : {
            children: 'Share Pictures',
            onClick: () => {
              openInNewTab(photoLink)
            }
          },
          'Applicants' : {
            children: 'Icebreakers',
            onClick: () => {
              openInNewTab(icebreakerLink)
            }
          },
          'Company' : {
            children: isDesktop ? ('WithJoy Site') : (''),
            onClick: () => {openInNewTab('https://withjoy.com/wesley-and-sarah')}
          },
        }} />
      </div>
      {fillingPage.show && <PieDetails 
        name={fillingPage.name} 
        shortdesc={fillingPage.shortdesc} 
        longdesc={fillingPage.longdesc}
        image={fillingPage.image}
        showPie={setFillingPage}
        isDesktop={isDesktop}
      />}
      {!fillingPage.show && 
        <div className='body' style={styles.body}>
          <div className='mainBody'>
            {isDesktop ? (
              <div className='hero'>
                <HeroLayout1 overrides={
                  {
                    "SmallTitle": {
                      children: 'Sarah & Wesley'
                    },
                    "BigTitle": {
                      children: 'Pike-Peck Family'
                    },
                    'HeroBody' : {
                      children: 'Thanks for visiting our new family site!  You can browse the pie fillings below for recommendations on how to use them.  If you took photos at the wedding and you want to share, click the button below'
                    },
                    "HeroLayout1" : {
                      width: '100vw',
                      padding: '20px 0px 20px 20px',
                      margin: '20px 0px 20px 0px'
                    },
                    'Button' : {
                      children: 'Share Photos',
                      onClick: () => {
                        openInNewTab(photoLink)
                      },
                      backgroundColor: "#6D342C",
                    },
                    "image" : {
                      src: cutePicture,
                      objectFit: 'cover',
                    }
                  }
                }/>
              </div>
            ) : (
              <div className='mobile-hero'>
                <img className='mobile-image' src={cutePicture}></img>
                <h3>Sarah and Wesley</h3>
                <h2>Pike-Peck Family</h2>
                <div className='mobile-textbox'>
                  <p>Thanks for visiting our new family site!  You can browse the pie fillings belowf or recommendations on how to use them.  If you took photos at the wedding and you want to share, click the button below</p>
                </div>
                <button className='mobile-button' onClick={() => {openInNewTab(photoLink)}}>Share Photos</button>
                
              </div>
            )}
            <div className='pie-header'>
                <h1>Have Some Conversation</h1>
              </div>
            <div className='icebreaker-div'>
              <div className={isDesktop ? 'icebreaker-content' : 'icebreaker-content-mobile'}>
                <p>Weddings can be super awkward.  We tried to seat you with friends and family, but seating charts are hard!</p>
                <p>If you need some social lubricant, we put together curated discussion questions for each table - click below, and find your table's questions.</p>
              </div>
              <button className={isDesktop ? 'icebreaker-button' : 'mobile-button'} onClick={() => {openInNewTab(icebreakerLink)}}>Get Icebreakers</button>
            </div>
            <hr />
            <div className='card-panel' style={styles.cardPanel}>
              <div className='pie-header'>
                <h1>Browse Pie Fillings</h1>
              </div>
              <FillingCardCollection 
                style={styles.card} 
                direction={"row"} 
                justifyContent={'center'} 
                overrideItems={({item, index}) => ({
                  minHeight: '550',
                  backgroundColor: index % 2 === 0 ? 'white' : '#EEEEFB',
                  onMouseEnter: () => {
                    setIsShown(true);
                    setCardID(item.id);
                  },
                  onMouseLeave: () => {
                    setIsShown(false);
                    setCardID();
                  },
                  onClick: () => {
                    setFillingPage({
                      name: item.name,
                      shortdesc: item.description,
                      longdesc: item.longdescription,
                      image: item.image,
                      show: true,
                      tags: item.tags,
                    });
                    window.scrollTo(0,0);
                  },
                  border: isShown && (cardID===item.id ? '1px black solid' : ''),
                  overrides: {
                    'Button' : {
                      children: 'Learn More',
                      backgroundColor: '#6D342C'
                    },
                    'Information about this product' : {
                      minHeight: '60px'
                    },
                  }
                })} />  
            </div>
          </div>
        </div>
      }
      
    </div>
  );
}

const styles={
  card: {
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  app: {
    backgroundColor: '#F0F0E5'
  },
  body: {
    margin: '0px auto',

  },
  sidebar: {
  },
  mainBody: {
  }
}

export default App;
