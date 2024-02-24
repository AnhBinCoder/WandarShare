import { Link } from "react-router-dom";
import properties from "../../data/properties";


const HotProperties = () => {
  return (
    <>
      {properties.slice(1, 3).map((item) => (
        <div className="col-md-6 col-lg-4" key={item.id}>
          <div className="item">
            <div className="feat_property home7 style2">
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
                  <a className="fp_price" href="#">
<<<<<<< HEAD
                    {item.price} VND
                    <small>/week</small>
=======
                    ${item.price}
                    <small>/mo</small>
>>>>>>> parent of 6eebdbf (second commit)
                  </a>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link to={`/listing-details-v2/${item.id}`}>
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
        </div>
      ))}
    </>
  );
};

export default HotProperties;
