import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiGithub,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiRedux,
    SiHtml5,
    SiSass,
    SiBootstrap,
    SiFirebase,
    SiDocker,
  } from 'react-icons/si';

function HorizentalMoveSkills() {
  // Create the icons array
  const icons = [
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiVercel, name: 'Vercel' },
    { icon: SiGithub, name: 'GitHub' },
    { icon: SiCss3, name: 'CSS3' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiRedux, name: 'Redux' },
    { icon: SiHtml5, name: 'HTML5' },
    { icon: SiSass, name: 'Sass' },
    { icon: SiBootstrap, name: 'Bootstrap' },
    { icon: SiFirebase, name: 'Firebase' },
    { icon: SiDocker, name: 'Docker' },
  ];

  return (
    <div className='w-full h-auto overflow-hidden'>
      <div 
        className='flex items-center py-10'
        style={{
          animation: 'scroll 20s linear infinite',
        }}
      >
        {/* First set of icons */}
        {icons.map((item, index) => (
          <div key={`first-${index}`} className='flex-shrink-0 mx-8 group'>
            <span className='text-5xl text-gray-500 group-hover:text-cyan-600 transition-colors duration-300'>
              <item.icon />
            </span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {icons.map((item, index) => (
          <div key={`second-${index}`} className='flex-shrink-0 mx-8 group'>
            <span className='text-5xl text-gray-500 group-hover:text-cyan-600 transition-colors duration-300 cursor-pointer'>
              <item.icon />
            </span>
          </div>
        ))}
        
        {/* Third set for extra smoothness */}
        {icons.map((item, index) => (
          <div key={`third-${index}`} className='flex-shrink-0 mx-8 group'>
            <span className='text-5xl text-gray-500 group-hover:text-cyan-600 transition-colors duration-300 cursor-pointer'>
              <item.icon />
            </span>
          </div>
        ))}
      </div>
      
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}
      </style>
    </div>
  )
}

export default HorizentalMoveSkills
