import React from "react";
import Window from "../../windowTracker/Window";
import Boxes from "../Boxes";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "./images/pc4.jpg",
  });

  const [allMemeImage, setAllMemeImage] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("https://i.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setAllMemeImage(data.data.memes));
  // }, []);

  // USING ASYNCHRONOUS RESPONSE
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImage(data.data.memes);
    }
    getMemes();
  }, []);

  console.log(allMemeImage);

  function getMemeImage() {
    const memeArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const img = memeArray[randomNumber].img;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: img,
    }));
    // url = memeArray[randomNumber].url;
    // console.log(url);
  }
  // function setAllMemeImage ({

  //   prevMeme,
  //   randomImage,

  // });

  function handleChange(e) {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <input
          type={"text"}
          placeholder={"Top Text"}
          name="topText"
          value={meme.topText}
          className="form-input"
          onChange={handleChange}
        />
        <input
          type={"text"}
          placeholder={"Bottom Text"}
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Generate Image
        </button>
      </form>
      <div className="meme-generator">
        <img
          src={meme.randomImage}
          width={"50%"}
          height="400px"
          alt=""
          topText={meme.topText}
          bottomText={meme.bottomText}
        />
        <h3 className="top-text">{meme.topText}</h3>
        <h3 className="bottom-text">{meme.bottomText}</h3>
        <Window />
      </div>
      <Boxes />
    </main>
  );
};

export default Meme;
