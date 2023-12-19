import React from "react"
import "./about.css"
import {Link} from 'react-router-dom'

function About(){
    return(
        <div>
            <div class="aboutImage mb-8 flex items-center justify-center"><p class="text-white text-4xl font-semibold">About Us</p></div>
            <div class="px-12">
            {/* <h1 class="text-4xl font-semibold mb-6">Welcome to ExploreKE: Your Gateway to Adventure in Kenya!</h1> */}
            <p class="mb-8">
                At ExploreKE, we're passionate about unlocking the exhilarating experiences that Kenya has to offer. From the rugged terrains to the lush landscapes, we thrive on exploring the uncharted paths and sharing the thrill of outdoor escapades. Our blog is your go-to resource for everything related to camping, hiking, biking, and a myriad of adrenaline-pumping adventures that Kenya has in store.
            </p>

            <div class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
                <p class="mb-4">
                    We're not just storytellers; we're adventurers at heart. Our team lives and breathes the spirit of exploration, and we're committed to bringing you firsthand accounts, expert tips, and comprehensive guides to make your adventures unforgettable. Whether you're a seasoned trekker seeking new challenges or a novice camper eager to discover the outdoors, ExploreKE is your companion on this thrilling journey.
                </p>
            </div>

            <div class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">What We Offer</h2>
                <ul class="list-disc list-inside mb-4">
                    <li><strong>Camping Chronicles:</strong> Dive into our in-depth reviews of campsites, gear recommendations, and camping hacks to elevate your outdoor stay under the stars.</li>
                    <li><strong>Hiking Havens:</strong> Explore Kenya's stunning trails through our detailed trail guides, safety tips, and inspiring narratives of conquering majestic peaks and hidden paths.</li>
                    <li><strong>Biking Bliss:</strong> Embark on two-wheeled adventures with our biking routes, maintenance advice, and stories of traversing diverse landscapes on pedal power.</li>
                    <li><strong>Adventure Galore:</strong> Whether it's rock climbing, wildlife safaris, or water sports, we cover a wide array of thrilling activities to fuel your passion for adventure.</li>
                </ul>
            </div>

            <div class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
                <p class="mb-4">
                    We aim to inspire and empower fellow adventure enthusiasts to step out of their comfort zones, embrace nature's wonders, and create unforgettable memories. Through our engaging content, we strive to foster a community of explorers who respect and appreciate the beauty of Kenya's natural landscapes while promoting responsible and sustainable tourism practices.
                </p>
            </div>

            <div class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">Join the Exploration</h2>
                <p class="mb-4">
                    Connect with us on social media platforms and join our vibrant community of adventurers. Share your stories, seek advice, and be a part of a tribe that celebrates the thrill of discovery.
                </p>
            </div>

            <p class=" mb-4">
                Thank you for choosing ExploreKE as your guide to unparalleled adventures in Kenya. Let's embark on this exciting journey together and make every moment count!
            </p>
            <p>Git repository : <a href="https://github.com/ActuaryEmma/ExploreKE" target="_blank">ExploreKe Repo</a></p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/emma-nyakio/" target="_blank">ActuaryEmma</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/omondii/" target="_blank">omondii</a></p>
            <p>Git repository : <a href="" target="_blank">Brian Omondi</a></p>

            </div>
        </div>
       
        

    )

}
export default About