import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';

export const DiscoverNav = () => {
  const { onSectionDisplay } = useContext(UIContext);
  const [hoverOut, setHoverOut] = useState(false);

  const onHoverOut = () => {
    setHoverOut(true);

    setTimeout(() => {
      onSectionDisplay(null);
      setHoverOut(false);
    }, 300);
  };

  return (
    <div className="absolute top-0 z-30 flex h-screen w-screen">
      <section
        className={`absolute top-0 z-30 flex w-full animate-fadeIn justify-center bg-white pb-10 pt-28 
        ${hoverOut && 'animate-fadeOut'}`}
        onMouseLeave={onHoverOut}
      >
        <nav className="flex space-x-[10vw]">
          <ul className="space-y-2">
            <h3 className="mb-4 text-gray-500">Resources</h3>
            <li>
              <a href="#" className="mr-4 inline-block">
                Demo Drive
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Insurance
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Video Guides
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Events
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <h3 className="mb-4 text-gray-500">Location Services</h3>
            <li>
              <a href="#" className="mr-4 inline-block">
                Find us
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Trip Planner
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Find a Collision Center
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Find a Certified
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <h3 className="mb-4 text-gray-500">Company</h3>
            <li>
              <a href="#" className="mr-4 inline-block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 inline-block">
                Investor Relations
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="flex-1 backdrop-blur" />
    </div>
  );
};