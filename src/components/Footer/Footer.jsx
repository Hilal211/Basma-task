import './Footer.css'
import logo from '../../image/logo2.png'
export default function Footer() {
  return (
    <footer id="footer" class="footer">
      <div class="footer-top">
        <div class="containerFooter">
          <div class="footer-info">
            <a href="index.html" class="logo ">
              <img src={logo} alt="" />
            </a>
            <p>Loren ipsum dolor sit amet consecteur adipsocing elit aliquan nam </p>
          </div>
          <div class="aboutt">
            <h4>About</h4>
            <ul>
              <li><i class="lni lni-angle-double-right"></i> <a href="">Home</a></li>
              <li><i class="lni lni-angle-double-right"></i> <a href="">About us</a></li>
              <li><i class="lni lni-angle-double-right"></i> <a href="">Portfolio</a></li>
            </ul>
          </div>
          <div class="support">
            <h4>Support</h4>
            <ul>
              <li><i class="lni lni-angle-double-right"></i> <a href="">support@example.com</a></li>
              <li><i class="lni lni-angle-double-right"></i> <a href="">+61 3 6662 5678</a></li>
              <li><i class="lni lni-angle-double-right"></i> <a href="">Services</a></li>
            </ul>
          </div>
          <div class="social-links">
            <h4>Follow us</h4>
            <ul>
              <li><i class="lni lni-facebook-filled"></i><a href="">Facebook</a></li>
              <li><i class="lni lni-twitter-original"></i><a href="">Twitter</a></li>
              <li><i class="lni lni-instagram"></i> <a href="">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="containerf">
        <div class="copyright">
          &copy; Copyright 2021. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}