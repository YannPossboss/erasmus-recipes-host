import React from "react";

import erasmus from "./logo/img_avatar2.png"
import hems from "./logo/hems.jpg"

class Landing extends React.Component {
    render () {
        return (
            <div>
                
                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <a href="/impress" class="w3-bar-item w3-button w3-text-white w3-hide-small">Legal notice</a>
                    </div>
                
                    <div id="navDemo" class="w3-bar-block w3-theme1 w3-hide w3-hide-large w3-hide-medium">
                    <a href="/impress" class="w3-bar-item w3-button">Legal notice</a>
                    </div>
                </div>

                <div> 

                    <div class="w3-hide-large">

                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <a href="/impress" class="w3-bar-item w3-button w3-text-white w3-left w3-dark-gray">Legal notice</a>
                    </div>

                    </div>

                    <div class="center w3-hide-large w3-hide-medium">

                        <div class="w3-center w3-margin-top">
                        <img src={erasmus} alt="Avatar" class="avatar"/>
                        <img src={hems} alt="Avatar2" class="avatar"/>
                        </div>

                            <br/>
                            <br/>

                            <h3 class="landing3 w3-margin-left">Hello and welcome on our Erasmus+ Project Website !</h3>

                            <h5 class="landing4 w3-margin-left">On this website you can find instructions and recipes for all kinds of delicious dishes from all over the world. </h5>
                            
                            <br/>

                            <a href="/login"><input type="submit" value="Login to your Account"></input></a>
                            
                            <br/>
                            <br/>

                            <div class="style2">
                            <a href="/register"><input type="submit" value="Register new Account"/></a>
                            </div>

                            <br/>

                            <div class="style3 w3-center">
                            <a href="/country"><input type="submit" value="Continue without Login"/></a>   
                            </div>

                            <br/>

                    </div>

                     <div class="column3 w3-display-middle-left w3-hide-small">
                    
                     <br/>
                     <br/>

                    <div class="imgcontainer2 w3-center">
                    <img src={erasmus} alt="Avatar" class="avatar"/>
                    <img src={hems} alt="Avatar2" class="avatar"/>
                    </div>

                    <br/>

                    <h1 class="landing w3-margin-left">Hello and welcome on our Erasmus+ Project Website !</h1>
                    <h3 class="landing w3-margin-left">On this website you can find instructions and recipes for all kinds of delicious dishes from all over the world. </h3>
                    
                    <br/>
                    <br/>
                    <br/>

                    <a href="/login"><input type="submit" value="Login to your Account"></input></a>

                    <br/>
                    <br/>
                    <br/>

                    <div class="style2">

                    <a href="/register"><input type="submit" value="Register new Account"/></a>
                    
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div class="style4">

                    <a href="/country"><input type="submit" value="Continue without Login"/></a>   
                    
                    </div> 

                    <br/>
                    <br/>

                    </div>
                </div>

                            <div class="footer">
                                <p>&copy; 2019 | 2022 GreenMedia | Erasmus+ FinalBuild </p>
                            </div>

            </div>
        );
    }
}

export default Landing;