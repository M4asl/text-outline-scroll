import { useState, useEffect } from 'react';
import './Hero.scss';

const imageUrl =
  'https://images.unsplash.com/photo-1668197819665-e6d3bc7c4f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const useScrollPosition = () => {
  const [scrollYPos, setScrollYPos] = useState(window.pageYOffset);

  const onScroll = () => {
    setScrollYPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollYPos;
};

function App() {
  const scrollPos = useScrollPosition();

  return (
    <div className="page-wrapper">
      <div className="text-parent">
        <h1
          style={{
            transform: `translate3d(-${scrollPos / 2}px, -${
              scrollPos * 0.1
            }px, 0px)`,
          }}
        >
          The strength of the team is each individual member
        </h1>

        <h1
          style={{
            transform: `translate3d(${scrollPos / 2}px, -${
              scrollPos * 0.1
            }px, 0px)`,
          }}
        >
          I really get motivated when I have doubters
        </h1>
      </div>

      <img
        src={imageUrl}
        alt="Mountain"
        style={{
          transform: `translate3d(-50%, calc(-${
            scrollPos * 0.9
          }px -50%), 0)`,
        }}
      />

      <div className="text-parent">
        <h1
          className="outline"
          style={{
            transform: `translate3d(-${scrollPos / 2}px, -${
              scrollPos * 0.1
            }px, 0px)`,
          }}
        >
          The strength of the team is each individual member
        </h1>

        <h1
          className="outline"
          style={{
            transform: `translate3d(${scrollPos / 2}px, -${
              scrollPos * 0.1
            }px, 0px)`,
          }}
        >
          I really get motivated when I have doubters
        </h1>
      </div>
    </div>
  );
}

export default App;
