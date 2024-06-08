import React from 'react';

import { useNavigate } from 'react-router-dom';

import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg'; 
import image3 from '../images/img3.jpg'; 
import image4 from '../images/img4.jpg'; 
import NavBar from '../components/navBar';

const Home = () => {
	const navigate = useNavigate();

	
  return(
    <div id="page-wrapper">
		{/* Header  */}
			<section id="header" className="wrapper">

				{/* Logo  */}
					<div id="logo">
						<h1><a href="#">Sahayog</a></h1>
						<p>SMALL COMMUNITIES, BIG BREAM</p>
					</div>
					<NavBar/>
			</section>

		{/* Intro  */}
			<section id="intro" className="wrapper style1">
				<div className="title">The Introduction</div>
				<div className="container">
					<p className="style1">So in case you were wondering what this is all about ...</p>
					<p className="style2">
					<strong>SAHAYOG </strong>provides platform to small business <br className="mobile-hide" />
					represent themselves t the world
					</p>
					<p className="style3">We know that greatness in a distruptive era requires bold ambition,<br className="mobile-hide" /> curious talent and a culture that believes we're smarter together</p>
					<ul className="actions">
						<li><a href="#" className="button style3 large">Proceed</a></li>
					</ul>
				</div>
			</section>

		{/*  Main  */}
			<section id="main" className="wrapper style2">
				<div className="title">The Details</div>
				<div className="container">

					{/*  Image  */}
						<a href="#" className="image featured">
							{/* <img src="images/pic01.jpg" alt="" /> */}
							<img src={image1} alt="Description of image" />
						</a>

					{/* Features */}
						<section id="features">
							<header className="style1">
								<h2>Join the SAHAYOG campaign</h2>
								<p>Join our campaign and become a part of something bigger than yourself. Together, <br className="mobile-hide" /> we can bring hope to those who need it most.</p>
							</header>
							<div className="feature-list">
								<div className="row">
									<div className="col-6 col-12-medium">
										<section>
											<h3 className="icon fa-comment">Grow Local, Grow Together</h3>
											<p>Organize exclusive networking events to connect big businesses with local businesses, fostering potential partnerships.</p>
										</section>
									</div>
									<div className="col-6 col-12-medium">
										<section>
											<h3 className="icon solid fa-check">Warm winter</h3>
											<p>Winter's chill can be deadly. Donate blankets and clothes today, and help someone stay warm this season</p>
										</section>
									</div>
								</div>
							</div>
							<ul className="actions special">
								<li><a href="#" className="button style1 large">Get Started</a></li>
							</ul>
						</section>

				</div>
			</section>

		{/*  Highlights */}
			<section id="highlights" className="wrapper style3">
				<div className="title">Our campaign</div>
				<div className="container">
					<div className="row aln-center">
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<div className="image featured"><img src={image2} alt="" /></div>
								<h3><a href="#">Community Smiles: Bringing Joy to Kids</a></h3>
								<p>Bring the Fun! Sign up to host entertainment for kids in our community</p>
								<ul className="actions">
									<li><a href="/signup" className="button style1">Signup</a></li>
								</ul>
							</section>
						</div>
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<div className="image featured"><img src={image3} alt="" /></div>
								<h3><a href="#">Local Buisness and you</a></h3>
								<p>Discover how your support can perfectly match local business needs. Sign up for our campaign</p>
								<ul className="actions">
									<li><a href="/signup" className="button style1">Signup</a></li>
								</ul>
							</section>
						</div>
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<div className="image featured"><img src={image4} alt="" /></div>
								<h3><a href="#"> Warm Hearts, Warm Winter</a></h3>
								<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.This winter, let's fight the chill together! Donate gently used blankets, coats, and warm clothes to help those in need stay safe and warm. Every donation, big or small, can make a life-changing difference.</p>
								<ul className="actions">
									<li><a href="/signup" className="button style1">Sign up</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>

		{/*  Footer  */}
			<section id="footer" className="wrapper">
				<div className="title">The Rest Of It</div>
				<div className="container">
					<header className="style1">
						<h2>Ipsum sapien elementum portitor?</h2>
						<p>
							Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br />
							Nam pharetra laoreet imperdiet volutpat etiam feugiat.
						</p>
					</header>
					<div className="row">
						<div className="col-6 col-12-medium">

							{/*  Contact Form  */}
								<section>
									<form method="post" action="#">
										<div className="row gtr-50">
											<div className="col-6 col-12-small">
												<input type="text" name="name" id="contact-name" placeholder="Name" />
											</div>
											<div className="col-6 col-12-small">
												<input type="text" name="email" id="contact-email" placeholder="Email" />
											</div>
											<div className="col-12">
												<textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
											</div>
											<div className="col-12">
												<ul className="actions">
													<li><input type="submit" className="style1" value="Send" /></li>
													<li><input type="reset" className="style2" value="Reset" /></li>
												</ul>
											</div>
										</div>
									</form>
								</section>

						</div>
						<div className="col-6 col-12-medium">

							{/*  Contact  */}
								<section className="feature-list small">
									<div className="row">
										<div className="col-6 col-12-small">
											<section>
												<h3 className="icon solid fa-home">Mailing Address</h3>
												<p>
													Untitled Corp<br />
													1234 Somewhere Rd<br />
													Nashville, TN 00000
												</p>
											</section>
										</div>
										<div className="col-6 col-12-small">
											<section>
												<h3 className="icon solid fa-comment">Social</h3>
												<p>
													<a href="#">@untitled-corp</a><br />
													<a href="#">linkedin.com/untitled</a><br />
													<a href="#">facebook.com/untitled</a>
												</p>
											</section>
										</div>
										<div className="col-6 col-12-small">
											<section>
												<h3 className="icon solid fa-envelope">Email</h3>
												<p>
													<a href="#">info@untitled.tld</a>
												</p>
											</section>
										</div>
										<div className="col-6 col-12-small">
											<section>
												<h3 className="icon solid fa-phone">Phone</h3>
												<p>
													(000) 555-0000
												</p>
											</section>
										</div>
									</div>
								</section>

						</div>
					</div>
					<div id="copyright">
						<ul>
							<li>&copy; All rights reserved  Sahayog</li>
						</ul>
					</div>
				</div>
			</section>
	</div>
  )   
}

export default Home;