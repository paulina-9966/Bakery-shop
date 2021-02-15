import React from 'react';
import { useGlobalContext } from './context';
import sublinks from './data';
const Sidebar = () => {
  const { isSidebarOpen} = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { name, price } = link;
                    return (
                      <a key={index} href='#'>
                        {name}
                        {price}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
