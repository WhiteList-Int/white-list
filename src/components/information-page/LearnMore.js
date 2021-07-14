import React from 'react';
import NavbarAbout from '../navbar-source/NavbarAbout';
import './LearnMore.css'
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants.js';
import { transitions } from '../../page-transitions.js';
import Footer from '../footer-source/Footer'
import Img2 from '../images/white-list-icon-gradient.svg';

function LearnMore() {

    return (
        <>
            <motion.body 
                className="learn-more-page"
                initial="slideOutY" 
                animate="slideInY" 
                exit="slideOutY"
                variants={variants}
                transition={transitions.tweenEaseOutSlow}    
            >
                {window.scroll(0,0)}

                <div className="learn-more-container">
                    
            <img className = "learn-bg-icon" src = {Img2} alt="WhiteList"></img>
                <h1 className="learn-more-h1">General</h1>
                    <h2 className="learn-h2" id="type1-h2">What is a Rental Owner?</h2>
                    <p className="learn-p" id="type1-p">The primary goal of our company is to be trusted and reliable in providing
                        its users with a simplified method for finding and connecting people to rentable 
                        opportunities. It primarily is an online, software solution directed towards the needs of students 
                        and workers looking for affordable locations.
                        <br />
                        <p className="learn-p" id="type2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora alias sed, laborum nisi saepe at officia illum itaque voluptas perspiciatis aliquid voluptatum tenetur iure eaque ullam sint ipsam quaerat repellat laudantium, qui tempore fuga. Officiis, incidunt nemo id maiores officia ipsa tempora quaerat neque vel autem consequuntur natus sint?</p>
                        </p>
                       
                    <h2 className="learn-h2" id="type2-h2">How do Rental Owners host their rental?</h2>
                    <p className="learn-p" id="type3-p">Once you contact WhiteList, you will receive an email 
                    from us containing the requirements and instructions on how to host your rental. 
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ab debitis unde cum minima repellat, quos harum quaerat ullam rem ducimus non accusamus esse veritatis ipsa assumenda! Iste quas expedita sunt, voluptas mollitia, distinctio maiores ex assumenda sint quod libero sed molestias. Dolorum nisi quas doloribus, nulla esse nemo dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem laboriosam rem porro assumenda. Doloremque corporis libero voluptatem architecto odio, commodi ut maxime, adipisci sed reprehenderit saepe! Officia deleniti voluptatum, voluptatibus optio earum distinctio et ullam quibusdam nisi est repellat saepe pariatur impedit eius omnis cum enim. Quibusdam sit harum dignissimos sint, praesentium dolor esse impedit enim nostrum, magnam excepturi non, nobis culpa iste delectus quis iusto placeat fugit commodi optio libero fuga voluptatibus modi. Enim voluptatibus soluta minus assumenda officia voluptates expedita tempora ut! Itaque nostrum odio recusandae, possimus natus sed reiciendis sequi illo quae animi laudantium aliquam fugiat!</p>
                        <p className="learn-p" id="type3-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, neque architecto. Voluptas aliquam ut sit placeat assumenda accusantium adipisci asperiores tempore consectetur dolorem totam minus, commodi illo cum illum? Minima dicta architecto temporibus repellat itaque tenetur sed alias repudiandae consequuntur facilis iste voluptas, optio aliquam neque soluta corporis commodi vero rerum. Quod perspiciatis, recusandae, error debitis eos et repellendus adipisci eius ad voluptatem vitae tenetur? Rem sed natus molestiae eligendi accusamus doloremque aliquid nostrum optio. Nulla rem itaque temporibus veritatis sed impedit inventore, magnam neque dolores eum ratione quis vel iure ipsa debitis non molestiae ut. Similique sint, pariatur earum cupiditate debitis itaque dolorem eligendi vero rem minima deserunt quia eos fugit quidem at alias tempore illum reprehenderit qui nihil ipsam fugiat esse sunt? Eaque, pariatur quod. Ipsum voluptatibus obcaecati fugiat alias magnam rem laborum explicabo enim tempore doloremque deleniti, ad voluptas in harum debitis nisi impedit commodi delectus! Animi optio quisquam at nesciunt rem praesentium velit eos dolore, dicta veritatis quibusdam consectetur numquam ut autem! At cum eaque ratione voluptas maiores quaerat, ullam harum, eos tenetur eveniet reprehenderit. Facilis sed minus dolorum incidunt vero corrupti architecto natus optio? Quod commodi corrupti temporibus blanditiis quis inventore cum voluptates nobis consequuntur!</p>
                    </div>
                <NavbarAbout />
            </motion.body>
            <Footer />
        </>
    )
}

export default LearnMore
