import "./css/newspage.css";

import { useLocation } from "react-router-dom";
import { Layouts } from "../Layouts/Layouts";

import banner from "../assets/news/headBanner.png";

import SwiperCarousel from "../components/SwiperCarousel";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NewsPage = () => {
  // navigaiton
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Layouts title={"News & Event-Page"}>
      <section id="mediacenter" className="headline">
        <div>
          <div className="team-button">
            <a href="./news#mediacenter">
              <button
                className={
                  "boardofdirectors" === "boardofdirectors" ? "active" : ""
                }
                onClick={() => {
                  // handleSelectUserBlog("boardofdirectors");
                }}
              >
                Media Center
              </button>
            </a>
            <a href="./news#newsandevents">
              <button
                className={
                  "selectdTab" === "scientificadvisors" ? "active" : ""
                }
                onClick={() => {
                  // handleSelectUserBlog("scientificadvisors");
                }}
              >
                News & Events
              </button>
            </a>
          </div>
        </div>
        <div className="media-center">
          <h2 className="page-title">Media Center</h2>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/marche-healthcare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
              whileHover={{scale:2}}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Icon / LinkedIn">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                    fill="black"
                  />
                </g>
              </motion.svg>
            </a>
            <a
              href="https://x.com/info_march49738"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
                whileHover={{scale:2}}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Icon / X">
                  <path
                    id="Vector"
                    d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                    fill="black"
                  />
                </g>
              </motion.svg>
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=jcoo1221g882&utm_content=uh81aej"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
                whileHover={{scale:2}}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="instagram-svgrepo-com 1"
                  clipPath="url(#clip0_877_3056)"
                >
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M18 2H6C3.8 2 2 3.8 2 6V18C2 20.2 3.8 22 6 22H18C20.2 22 22 20.2 22 18V6C22 3.8 20.2 2 18 2ZM12 17C9.25 17 7 14.75 7 12C7 9.25 9.25 7 12 7C14.75 7 17 9.25 17 12C17 14.75 14.75 17 12 17ZM17.5 7.5C16.95 7.5 16.5 7.05 16.5 6.5C16.5 5.95 16.95 5.5 17.5 5.5C18.05 5.5 18.5 5.95 18.5 6.5C18.5 7.05 18.05 7.5 17.5 7.5Z"
                      fill="black"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_877_3056">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
            </a>
            <a
              href="https://youtube.com/@marchehealthcare?si=Nktj1VOLNtZBrdmS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
                whileHover={{scale:2}}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="youtube-168-svgrepo-com 1"
                  clipPath="url(#clip0_877_3039)"
                >
                  <g id="Page-1">
                    <g id="Dribbble-Light-Preview">
                      <g id="icons">
                        <path
                          id="youtube-[#168]"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.58613 15.1033V8.36913C11.9768 9.49405 13.8283 10.5807 16.0181 11.7523C14.212 12.754 11.9768 13.8779 9.58613 15.1033ZM22.9092 5.01992C22.4968 4.4766 21.794 4.05368 21.0457 3.91367C18.8463 3.49601 5.12518 3.49482 2.92698 3.91367C2.32693 4.02615 1.7926 4.29805 1.3336 4.7205C-0.600435 6.51558 0.00559941 16.142 0.471777 17.7014C0.667809 18.3763 0.921228 18.8631 1.24038 19.1826C1.65157 19.605 2.21456 19.8959 2.86123 20.0264C4.67214 20.4009 14.0016 20.6104 21.0074 20.0826C21.6529 19.9701 22.2243 19.6699 22.6749 19.2295C24.4631 17.4416 24.3412 7.27454 22.9092 5.01992Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_877_3039">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
            </a>
          </div>
        </div>
        {/* <MultiCarousel newscard={true} /> */}
        <div className="newspagecardcontainer">
          <SwiperCarousel news={true} />
        </div>

        <span id="newsandevents"></span>
        <div>
          <h2 className="page-title">News & Events</h2>
        </div>

        <div className="post-contianer">
          <h4 className="title">Blog Title heading will go here</h4>
          <div className="blog-footer">
            <div className="author-container">
              <div className="img-container">
                <img
                  src={`./companyLogo.png`}
                  alt="author"
                  className="author"
                />
              </div>
              <div className="author-content">
                <p className="author-name">Marche HealthCare</p>
                <div className="author-time">
                  <p className="blog-date">15-jul-24</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/marche-healthcare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-social"
                src="./linkedIn.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>

        <div>
          <img width={"100%"} src={banner} alt="banners" />
        </div>
        <div id="user-full-detials">
          <div className="user-content">
            <h2>Introduction</h2>
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.
            </p>
            <div className="img-container">
              <img src="./about/userblog.jpeg" alt="blog" />
              <p className="img-caption">Image caption goes here</p>
            </div>
            <p className="bold-text">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
            <p className="callout-text">
              "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus."
            </p>
            <p>
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </p>
            <h2>Conclusion</h2>
            <p>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p>
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
            <p>
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
              gravida enim posuere cursus diam.
            </p>
          </div>
        </div>
      </section>
      <div className="newspagecardcontainer">
        <SwiperCarousel news={true} />
      </div>
    </Layouts>
  );
};

export default NewsPage;
