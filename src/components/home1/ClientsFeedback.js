import { Component, Fragment } from "react";
import Slider from "react-slick";
export default class ClientsFeedback extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      speed: 400,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <section className="testimonial-area-two rel z-1 mt-130 mb-120">
          <div className="container for-middle-border">
            <div className="row justify-content-between align-items-center pb-90 rpb-35 wow fadeInUp delay-0-2s">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>Clients feedback</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="slider-arrow-btns text-lg-end">
                  <button
                    className="work-prev slick-arrow"
                    onClick={this.previous}
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button className="work-next slick-arrow" onClick={this.next}>
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <Slider
              className="testimonial-two-active"
              {...settings}
              ref={(c) => (this.slider = c)}
            >
              <div className="testimonial-item-two wow fadeInUp delay-0-2s">
                <div className="testimonial-author">
                  <img
                    src="assets/images/feedback/testimonial1.jpg"
                    alt="Author"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                  I am so impressed with the quality of your work - thank you for going above and beyond to deliver such amazing results!
                  </p>
                  <div className="author-description">
                    <span className="h5">Jonathan B. Bohnert</span>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img
                    src="assets/images/feedback/testimonial2.jpg"
                    alt="Author"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                  Your web design and SEO expertise is truly incredible - thank you for delivering exceptional results that have improved our online presence
                  </p>
                  <div className="author-description">
                    <span className="h5">Richard V. Dillingham</span>
                    <span className="designation">Business Consultant</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-2s">
                <div className="testimonial-author">
                  <img
                    src="assets/images/feedback/testimonial1.jpg"
                    alt="Author"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                  Thank you for your outstanding web design and SEO services - you have helped my business soar to new heights!
                  </p>
                  <div className="author-description">
                    <span className="h5">Adeel</span>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item-two wow fadeInUp delay-0-4s">
                <div className="testimonial-author">
                  <img
                    src="assets/images/feedback/testimonial2.jpg"
                    alt="Author"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                  our web design and SEO skills are truly top-notch - thank you for your hard work in creating an amazing website that has improved my online visibility!
                  </p>
                  <div className="author-description">
                    <span className="h5">Richard V. Dillingham</span>
                    <span className="designation">Business Consultant</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
