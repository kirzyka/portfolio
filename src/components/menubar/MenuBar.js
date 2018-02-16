import React from 'react';
import styled from 'styled-components';


export default function MenuBar() {
	return (
        <div id="menubar" class="main-menu">	
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
					
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><a href="#home">Home<span class="sr-only">(current)</span></a></li>
                            <li><a href="#works-area">Service</a></li>
                            <li><a href="#our-team">About</a></li>
                            <li><a href="#our-portfolio">Portfolio</a></li>
                            <li><a href="#our-history">Academic</a></li>
                            <li><a href="#our-feature">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>

                            <div class="contact-number text-right"> 
                                <ul><li class="">(+001122334)</li></ul>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
	);
}