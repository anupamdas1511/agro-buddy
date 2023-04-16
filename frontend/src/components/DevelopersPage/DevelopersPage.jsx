import React, { useState, useEffect } from 'react'
import './DevelopersPage.css'
import { Grid, Typography } from '@mui/material'
import Akash from './images/AkashF.jpeg'
import Anupam from './images/AnupamF.jpg'
import Priyajit from './images/Priyajit.jpg'
import Raj from './images/Raj.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Palette from '../../configs/pallete.js'


function Developer() {

    return (

        <div class="container">

            <div class="box">
                <div class="imgBox">

                    <img className='image' src={Raj} alt="" />
                </div>
                <div class="content">
                    <h2>Rajdristant Ghose <br />
                        <div className='align'>
                            <span>
                                <Link target='_blank' href='https://www.linkedin.com/in/rajdristant-ghose-286061231/'  ><LinkedInIcon /></Link>
                            </span>
                            <span>
                                <Link target='_blank' href='https://www.instagram.com/rajdristant/'><InstagramIcon /></Link>
                            </span>
                            <span>
                                <Link target='_blank' href='https://github.com/Raj217/' ><GitHubIcon /></Link>
                            </span>
                        </div>
                    </h2>
                </div>
            </div>

            <div class="box">
                <div class="imgBox">

                    <img className='image' src={Anupam} alt="" />
                </div>
                <div class="content">
                    <h2>Anupam Das<br />
                        <div className='align'>
                            <span className='anchor'>
                                <Link target='_blank' href='https://www.linkedin.com/in/Linknupam-das-b49379182/'><LinkedInIcon /></Link></span>
                            <span>
                                <Link target='_blank' href='https://www.instagram.com/Linknupam_151101/'><InstagramIcon /></Link>
                            </span>
                            <span>
                                <Link target='_blank' href='https://github.com/Linknupamdas1511'><GitHubIcon /></Link>
                            </span>
                        </div>
                    </h2>
                </div>

            </div >

            <div class="box">
                <div class="imgBox">

                    <img className='image' src={Priyajit} alt="" />
                </div>
                <div class="content">
                    <h2>Priyajit Paul<br />
                        <div className='align'>
                            <span>
                                <Link target='_blank' href='https://www.linkedin.com/in/priyajit-paul-4b4840213/'><LinkedInIcon /></Link></span>
                            <span>
                                <Link target='_blank' href='https://www.instagram.com/_priyajit_paul27_/'><InstagramIcon /></Link>
                            </span>
                            <span>
                                <Link target='_blank' href='https://github.com/priyajit27'><GitHubIcon /></Link>
                            </span>
                        </div>
                    </h2>
                </div>
            </div >

            <div class="box">
                <div class="imgBox">


                    <img className='image' src={Akash} alt="" />

                </div>
                <div class="content">
                    <h2>Akash Suklabaidya<br />
                        <div className='align'>
                            <span>
                                <Link target='_blank' href='https://www.linkedin.com/in/Linkkash-suklabaidya-435aa5227/'><LinkedInIcon /></Link></span>
                            <Link target='_blank' href='https://www.instagram.com/Linkkash_sb__/'><InstagramIcon /></Link>
                            <span>
                                <Link target='_blank' href='https://github.com/Linkkashsb18' ><GitHubIcon /></Link>
                            </span>
                        </div>
                    </h2>
                </div>
            </div >
        </div >
    )
}

export default Developer;