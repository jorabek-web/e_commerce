import { AiOutlineSend } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaRegHeart } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdOutlineEmojiPeople, MdOutlineShoppingCart } from "react-icons/md";

function App() {

  return (
    <>
      <div className='header'>
        <h1>Excluse</h1>
        <div className='home'>
          <a href="#">home</a>
          <a href="#">contact</a>
          <a href="#">about</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="btn">
          <input type="search" placeholder="What are you looking for" />
          <IoSearch size={20} />
          <FaRegHeart size={25} />
          <MdOutlineShoppingCart size={25} />
          <MdOutlineEmojiPeople size={25} />
        </div>
      </div>

      <footer>
        <div className="foo_cards">
          <div className="foo_card">
            <h2>Exclusive</h2>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="foo_input">
              <input type="text" placeholder="Enter your email" />
              <AiOutlineSend size={20} />
            </div>
          </div>

          <div className="foo_card">
            <h2>Support</h2>
            <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="foo_card">
            <h2>Account</h2>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

          <div className="foo_card">
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          <div className="foo_cardw">
            <h2>Download App</h2>
            <p>Save $3 with App New User Only</p>

            <div className="foo_photo">
              <img src="public/Qrcode.jpg" alt="Qrcode.jpg" />

              <div className="foo_foto">
                <img src="public/play_market.png" alt="play_market.png" />
                <img src="public/download-appstore.png" alt="download-appstore.png" />
              </div>
            </div>
            <div className="foo_icon">
              <SlSocialFacebook />
              <CiTwitter />
              <FaInstagram />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App