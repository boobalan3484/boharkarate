import Content from './Layout/Content';
import Header from './Layout/Header';
// import PageRoutes from './PageRoutes';
import { React, useState, useEffect } from 'react'

function App() {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [navStyle, setNavStyle] = useState('');
  const [navPadding, setNavPadding] = useState('py-3 md:py-5');

  useEffect(() => {

    const handleNavScroll = () => {

      const currentScroll = window.scrollY;

      setScrollTop(currentScroll);

      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroSectionBottom = heroSection.offsetTop + (heroSection.clientHeight);
        setScrolling(currentScroll > scrollTop);

        // setScrolling(currentScroll < heroSectionBottom && currentScroll > scrollTop);


        if (currentScroll < heroSectionBottom) {
          setNavStyle(currentScroll > scrollTop ? ' shadow-sm ' : 'shadow-none')
          setNavPadding((currentScroll > scrollTop) ? 'py-2' : 'py-3 md:py-5 ')
          setScrolling((currentScroll))
        }
        else {
          setNavStyle(!(currentScroll > scrollTop) ?  ' shadow-lg nav-bg': 'shadow-sm nav-bg')
          setNavPadding((currentScroll > scrollTop) ? 'py-1' : 'py-2 md:py-3')
        }

      }
    };
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, [scrollTop]);

  return (
    <div className='App'>
      <Header
        navScroll={scrolling}
        navStyle={navStyle}
        navPadding={navPadding}
      />
      <Content />
      {/* <PageRoutes /> */}
    </div>
  );
}

export default App;
