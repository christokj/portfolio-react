import React from 'react';
import Header from './Header';
import bg_img from "./Images/social_bg.jpg";
import { Facebook,Github,Instagram,Linkedin,Twitter, Whatsapp } from 'react-bootstrap-icons';
import './Social.css';
function Social() {

  var bgStyle={
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${bg_img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const handleOnClickTwitter = () => {
    window.open('https://twitter.com/christokj1','_blank');
  };
  const handleOnClickInstagram = () => {
    window.open('https://instagram.com/christ_o__k_j?igshid=YTQwZjQ0NmI0OA==','_blank');
  };
  const handleOnClickGitHub = () => {
    window.open('https://github.com/christokj','_blank');
  };
  const handleOnClickGmail = () => {
    window.open('mailto:christokj2@gmail.com','_blank');
  };
  const handleOnClickLinkedin = () => {
    window.open('https://linkedin.com/in/christo-kj-231932156','_blank');
  };
  const handleOnClickFacebook = () => {
    window.open('https://m.facebook.com/profile.php/?id=100011657233419','_blank');
  };
  const handleOnClickWhatsapp = () => {
    window.open('https://wa.me/qr/3GWSHJXXL7YAK1','_blank');
  };
  
  return (
  <>
      <Header/>
      <div  className="social_bg pt-5" style={bgStyle}>
        <div className='social_icons_wrap pt-5'>
          <div className="social_icons d-flex justify-content-center pt-5">
            <Twitter onClick={handleOnClickTwitter} size={56} className='icon_twitter' />
            <Instagram onClick={handleOnClickInstagram} size={56} className='ms-1 icon_instagram'/>
          </div>
          <div className="social_icons d-flex justify-content-center">
            <Github onClick={handleOnClickGitHub} size={66} className='mt-3 icon_github'/>
            <svg onClick={handleOnClickGmail} className='m-1 rounded-5 icon_gmail' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
              <path className='icon_gmail_path_1'  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path className='icon_gmail_path_2'  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon className='icon_gmail_path_3'  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path className='icon_gmail_path_4'  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path className='icon_gmail_path_5' d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
            </svg>
            <Linkedin onClick={handleOnClickLinkedin} size={66} className='mt-3 icon_linkedin'/>
          </div>
          <div className="social_icons d-flex justify-content-center">
            <Facebook onClick={handleOnClickFacebook} size={56} className='icon_facebook'/>
            <Whatsapp onClick={handleOnClickWhatsapp} size={56} className='ms-1 icon_whatsapp'/>
          </div>
        </div>
      </div>
  </>
  );
};
export default Social;