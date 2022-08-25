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

  const [isShown, setIsShown] = useState(false);
  const [cardID, setCardID] = useState();

  const fillingPageInfo = {name: '', shortdesc: '', longdesc: '', image: '', show: false, tags: []};
  const [fillingPage, setFillingPage] = useState(fillingPageInfo);

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
          'Logo29767075' : {
            children: 'S&W'
          },
          'Dashboard' : {
            children: 'Home'
          },
          'Jobs' : {
            children: 'Share Pictures',
            onClick: () => {
              openInNewTab('https://photos.app.goo.gl/PmGWFJxzedwWWMbv5')
            }
          },
          'Applicants' : {
            children: 'Icebreakers',
            onClick: () => {
              openInNewTab('https://drive.google.com/drive/folders/15OaK-YTYpDvSlnThYCnlO3-oDRG0GGw4?usp=sharing')
            }
          },
          'Company' : {
            children: 'WithJoy Site',
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
      />}
      <div className='body' style={styles.body}>
        <div className='mainBody'>
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
                      openInNewTab('https://photos.app.goo.gl/PmGWFJxzedwWWMbv5')
                    }
                  },
                  "image" : {
                    src: 'https://piedcf957b765c74ad4b59c15553acb98e8210024-dev.s3.us-west-1.amazonaws.com/public/sarahandwesley6.jpg',
                    objectFit: 'cover',
                  }
                }
              }/>
          </div>
          <hr />
          <div className='card-panel' style={styles.cardPanel}>
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
                  console.log(fillingPage.tags);
                },
                border: isShown && (cardID===item.id ? '1px black solid' : ''),
                overrides: {
                  'Button' : {
                    children: 'Learn More'
                  },
                  'Information about this product' : {
                    minHeight: '60px'
                  },
                }
              })} />  
          </div>
        </div>
      </div>
    </div>
  );
}

const styles={
  card: {
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  hero: {
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
