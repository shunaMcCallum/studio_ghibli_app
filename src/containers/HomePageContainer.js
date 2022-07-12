import React from 'react';
import './HomePageContainer.css';

const HomePageContainer = () => {


    return (
        <div className="homepage-container">

            <h2 className="homepage-header">Welcome to the films of Studio Ghibli!</h2>
            <p>Here you will find information on each of Studio Ghibli's films and some chart data just for extra kicks.</p>
            <p>Below is a wee bit of info on the history of Studio Ghibli and who they are, however if you're keen to just get stuck into the films
                and charts hit the relevant button above!
            </p>

            <h3>What is Studio Ghibli?</h3>
            <p>Studio Ghibli is an animation studio, based in Tokyo, Japan. The studio is best known for its animated feature films, though they
                have also produced several short films, television commercials and two television films. Some of the studio's best-known films include
                Spirited Away (2001), Howl's Moving Castle (2004), and My Neighbour Totoro (1988), from which the studio takes its
                logo; a giant spirit inspired by racoon dogs and cats named Totoro.</p>
            <div className="images-container-1">
                <img className="image-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png" />
                <img className="image-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Howls-moving-castleposter.jpg/220px-Howls-moving-castleposter.jpg" />
                <img className="image-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg" />
            </div>
            <p>Studio Ghibli is one of the world's best-known anime production studios not only in Japan but across the world. Spirited Away is the
                highest grossing film of all time in Japan, earning over 30 billion yen at the box office. Five Studio Ghibli films have been nominated
                for Academy Awards in the US, with Spirited Away winning the award for Best Animated Feature Film in 2002.</p>

            <div className="history-container">
            <div className="history-header-container">
                <h3>The History of Studio Ghibli</h3>
            </div>
            <p className="history-para1">Studio Ghibli was founded in 1985 by directors Hayao Miyazaki and Isao Takahata, and producer Toshio Suzuki. Miyazaki and Takahata had
                already had long careers in film and television animation and had worked together previously on The Great Adventures of Horus, Prince
                of the Sun in 1968 and the Panda! Go, Panda! films in 1972 and 1973. Suzuki was an editor at Animage manga magazine, a role which
                brought him into contact with Miyazaki and Takahata to discuss the Horus film. Miyazaki and Suzuki eventually decided to begin their
                    own production company together and invited Takahata to join them.</p>
            <img className="image-2" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F05%2Fstudio-ghibli-museum-virtual-tour-japan-tw.jpg?w=960&cbr=1&q=90&fit=max" />
            <p className="history-para2">The name "Ghibli" was chosen by Miyazaki from the Italian noun "ghibli", based on the Libyan Arabic name for hot desert wind, the idea
                    being that the studio would "blow a new wind throug hthe anime industry."</p>
            </div>

        </div>
    );
}

export default HomePageContainer;