import React, { useState, useEffect } from 'react';

const Gallery_content = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://ananthapuricdc.com/api/Gallery/');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="overflow-hidden space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Gallery</span>
          <h2 className="sec-title">A Showcase of Our Family</h2>
        </div>
        <div className="row gy-30 gallery-row filter-active overlay-direction">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-xl-4 filter-item gallery-card_wrapp">
              <div className="gallery-card style2" data-theme-color="#4C59CB">
                <a className="box-img popup-image" href={testimonial.image}>
                  <img src={testimonial.image} alt="gallery "/>
                  <div className="box-content">
                    <span className="icon-btn style2">
                      <i className="fas fa-eye"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery_content;
