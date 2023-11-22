import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       {/* Your header content goes here */}
//     </header>
//   );
// };

const Header = () => {
    const [backgroundImage, setBackgroundImage] = useState('city-image.jpg');
  
    const handleRotation = () => {
      // Update the backgroundImage state based on the current image
      if (backgroundImage === 'city-image.jpg') {
        setBackgroundImage('country-image.jpg');
      } else if (backgroundImage === 'country-image.jpg') {
        setBackgroundImage('mountains-image.jpg');
      } else {
        setBackgroundImage('city-image.jpg');
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(handleRotation, 10000); // Adjust the interval value
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect once
  
    return (
      <div className="header-container">
        <CityImage image={backgroundImage} />
        <CountryImage image={backgroundImage} />
        <MountainsImage image={backgroundImage} />
      </div>
    );
  };
  

export default Header;
