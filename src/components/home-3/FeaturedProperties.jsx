

import { Link } from "react-router-dom";
import Slider from "react-slick";
import properties from "../../data/properties";


const FeaturedProperties = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        {properties.slice(0, 12).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home3">
              <div className="thumb">
                <img
<<<<<<< HEAD

=======
                 
>>>>>>> parent of 6eebdbf (second commit)
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>

                  <ul className="icon mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-transfer-1"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart"></span>
                      </a>
                    </li>
                  </ul>

                  <Link
                    to={`/listing-details-v1/${item.id}`}
                    className="fp_price"
                  >
<<<<<<< HEAD
                    {item.price} VND
                    <small>/week</small>
=======
                    ${item.price}
                    <small>/mo</small>
>>>>>>> parent of 6eebdbf (second commit)
                  </Link>
                </div>
              </div>

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link to={`/listing-details-v1/${item.id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p>

                  <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
