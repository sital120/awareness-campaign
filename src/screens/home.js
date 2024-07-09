import React, {useEffect, useState} from 'react';

import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg'; 
import image3 from '../images/img3.jpg'; 
import image4 from '../images/img4.jpg'; 
import image5 from '../images/img5.jpg'; 
import NavBar from '../components/navBar';

import { database } from '../firebaseModule';

const Home = () => {
	const session = localStorage.getItem('session');

	const [newCampaignList, setNewCampaignList] = useState([])
	useEffect(() => {
        const fetchData = async () => {
            if (session) {
                try {
                    const parsedSession = JSON.parse(session);
                    const campaigns = await fetchUserCampaign(parsedSession);

					if (Array.isArray(campaigns?.campaign)) {
						setNewCampaignList(campaigns.campaign);
					} else {
						alert("Invalid campaign data format:");
					}
                } catch (error) {
                    console.error("Failed to fetch campaigns:", error);
                }
            }
        };
        fetchData();
    }, []);

	const fetchUserCampaign = async (session) => {
		const documentId = session?.uid;

		const campaignData = await database
			.collection("campaigns")
			.doc(documentId)
			.get()
			.then(function (documentSnapshot) {
				if (documentSnapshot.exists) {
					return documentSnapshot.data();
				} else {
					console.log('No such document!');
					return null;
				}
			})
			.catch(function (err) {
				console.log(err);
			});

		return campaignData;
	}

	function extractNameFromEmail() {
		// Split the email by the "@" symbol
		const parsedSession = JSON.parse(session);

		const parts = parsedSession.email.split('@');
	
		// Check if the email is valid
		if (parts.length !== 2) {
			console.error('Invalid email format');
			return null;
		}
	
		// Get the name part (before the "@")
		const namePart = parts[0];
	
		// Optionally, replace dots or other characters with spaces or remove them
		const name = namePart.replace(/\./g, ' ');
	
		return name;
	}

  return(
    <div id="page-wrapper">
		{/* Header  */}
			<section id="header" className="wrapper">

				{/* Logo  */}
					<div id="logo">
						<h1><a href="#">Sahayog</a></h1>
						<p>SMALL COMMUNITIES, BIG BREAM</p>
						{!!session &&
							<p>Welcome! {extractNameFromEmail()}</p>
						}
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
								{!session && <ul className="actions">
									<li><a href="/signup" className="button style1">Signup</a></li>
								</ul>}
							</section>
						</div>
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<div className="image featured"><img src={image3} alt="" /></div>
								<h3><a href="#">Local Buisness and you</a></h3>
								<p>Discover how your support can perfectly match local business needs. Sign up for our campaign</p>
								{!session && <ul className="actions">
									<li><a href="/signup" className="button style1">Signup</a></li>
								</ul>}
							</section>
						</div>
						<div className="col-4 col-12-medium">
							<section className="highlight">
								<div className="image featured"><img src={image4} alt="" /></div>
								<h3><a href="#"> Warm Hearts, Warm Winter</a></h3>
								<p>This winter, let's fight the chill together! Donate gently used blankets, coats, and warm clothes to help those in need stay safe and warm. Every donation, big or small, can make a life-changing difference.</p>

								{!session && <ul className="actions">
									<li><a href="/signup" className="button style1">Signup</a></li>
								</ul>}
							</section>
						</div>
						{newCampaignList?.map((campaign, index) => (
							<div className="col-4 col-12-medium" key={index}>
								<section className="highlight">
									<div className="image featured"><img src={image5} alt="" /></div>
									<h3><a href="#">{campaign?.title}</a></h3>
									<p>{campaign?.description}</p>
									{!session && (
										<ul className="actions">
											<li><a href="/signup" className="button style1">Signup</a></li>
										</ul>
									)}
								</section>
							</div>
						))}
					</div>
				</div>
			</section>

		{/*  Footer  */}
			<section id="footer" className="wrapper">
				<div className="title">The Rest Of It</div>
				<div className="container">
					{/* <header className="style1">

					</header> */}
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
													Sahayog <br />
													37 Bird St<br /> 
													Parramatta, NSW 2150
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
													<a href="#">Sital.khadka000@gmail.com</a>
												</p>
											</section>
										</div>
										<div className="col-6 col-12-small">
											<section>
												<h3 className="icon solid fa-phone">Phone</h3>
												<p>
													0244445834
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
