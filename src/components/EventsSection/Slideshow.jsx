import React, { useRef } from "react";
import orangeEvent from "../../Assets/IMG/img/3000434.png";
import blackAndWhite from "../../Assets/IMG/img/black-and-white.png";
import pink from "../../Assets/IMG/img/pink.png";
import { ReactComponent as LeftArrow } from "../../Assets/IMG/Profile/iconmonstr-arrow-left-thin.svg";
import { ReactComponent as RightArrow } from "../../Assets/IMG/Profile/iconmonstr-arrow-right-thin.svg";
import styled from "styled-components";

/* this is the next button function */

const Slideshow = () => {
    const slideshow = useRef(null);

    /* This is the functionality of the next button */
    const next = () => {
        // we probe that the slideshow has elements
        if (slideshow.current.children.length > 0) {
            console.log("next");

            // we get the first element of the slideshow
            const firstElement = slideshow.current.children[0];

            // the transition for the slider is stablished.
            slideshow.current.style.transition = "500ms ease-out all";

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // we move the slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transitionSlider = () => {
                // we reset the position of the slider
                slideshow.current.style.transition = "none";
                slideshow.current.style.transform = `translateX(0)`;

                // we take the first element and we send it to the end
                slideshow.current.appendChild(firstElement);

                slideshow.current.removeEventListener(
                    "transitionend",
                    transitionSlider
                );
            };

            slideshow.current.addEventListener(
                "transitionend",
                transitionSlider
            );
        }
    };

    /* This is the functionality of the previous button */
    const previous = () => {
        console.log("previous");
        if (slideshow.current.children.length > 0) {
            // we get the last element of the slideshow
            const index = slideshow.current.children.lenght - 1;
            const lastElement = slideshow.current.children[index];
            slideshow.current.insertBefore(
                slideshow.current.firstChild,
                lastElement
            );

            slideshow.current.style.transition = "none";
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    return (
        <MainContainer>
            <ContainerSlideShow ref={slideshow}>
                <Slide>
                    <img src={orangeEvent} alt="logogroup" />

                    <TextSlide>
                        <p>
                            Youth Talent & ~Education &nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May, 20{" "}
                        </p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <img src={blackAndWhite} alt="logogroup" />

                    <TextSlide>
                        <p>
                            Youth Talent & ~Education &nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May, 20{" "}
                        </p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <img src={pink} alt="logogroup" />

                    <TextSlide>
                        <p>
                            Youth Talent & ~Education &nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May, 20{" "}
                        </p>
                    </TextSlide>
                </Slide>
            </ContainerSlideShow>
            <Controls>
                <Btn onClick={previous}>
                    <LeftArrow />
                </Btn>
                <Btn right onClick={next}>
                    <RightArrow />
                </Btn>
            </Controls>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    position: relative;
    width: 803px;
`;

const ContainerSlideShow = styled.div`
    display: flex;
    flew-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3 s ease all;
    z-index: 10;
    position: relative;

    img {
        vertical-align: top;
        width: 100%;
    }
`;

const TextSlide = styled.div`
    color: #ffff;
    width: 100%;
    font-size: 2rem;
    position: absolute;
    bottom: 30%;
    left: 8%;
`;
const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    pointer-events: none;
    width: 100%;
    height: 100%;
`;

const Btn = styled.div`
    background-color: #ffff;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    pointer-events: all;
    border-radius: 6px;
    text-align: center;
    top: 45%;
    cursor: pointer;
    outline: none;
    heigth: 100%;
    position: absolute;
    transition: 0.3 ease all;

    ${(props) => (props.right ? "right: 0" : "left: 0")}
`;

export default Slideshow;
