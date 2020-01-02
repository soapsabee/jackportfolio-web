import React from 'react'
import styled from 'styled-components';


const Img = styled.img`
    width:100px;
    
    `
const Header = () => {

    return (
        <div>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <Img src="/icon/profile-picture-png-3.png"></Img>
                    <div class="float-right">
                    <a class="navbar-brand" href="#">About</a>
                    <a class="navbar-brand" href="#">Skill</a>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header