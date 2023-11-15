<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Contactez nous</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../../assets/img/shape1.png" alt="shape" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="shape" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape5">
        <img src="../../../assets/img/shape5.png" alt="shape" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Contact Info Area -->
    <section class="contact-info-area ptb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="contact-info-box">
              <div class="icon">
                <feather type="mail"></feather>
              </div>
              <h3>Email</h3>
              <p><a href="#">Bientot</a></p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="contact-info-box">
              <div class="icon">
                <feather type="map-pin"></feather>
              </div>
              <h3>Venez nous voir</h3>
              <p>Bientot</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div class="contact-info-box">
              <div class="icon">
                <feather type="phone"></feather>
              </div>
              <h3>Appellez nous</h3>
              <p><a href="#">Bientot</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Info Area -->

    <!-- Start Contact Area -->
    <!-- <section class="contact-area ptb-80 pt-0">
      <div class="container">
        <div class="section-title">
          <h2>Get In Touch With Us</h2>
          <div class="bar"></div>
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>

        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-lg-6 col-md-12">
            <img src="../../../assets/img/1.png" alt="image" />
          </div>

          <div class="col-lg-6 col-md-12">
            <form id="contactForm">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                      data-error="Please enter your name"
                      placeholder="Name"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      required
                      data-error="Please enter your email"
                      placeholder="Email"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      required
                      data-error="Please enter your number"
                      class="form-control"
                      placeholder="Phone"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      class="form-control"
                      required
                      data-error="Please enter your subject"
                      placeholder="Subject"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                      required
                      data-error="Write your message"
                      placeholder="Your Message"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Send Message
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End Contact Area -->
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "ContactPage",
};
</script>
