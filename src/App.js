import { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

const MEME_TEMPLATE_URL = 'https://api.memegen.link/images';
const DEFAULT_IMAGE = 'aag';

export default function App() {
  const [imageUrl, setImageUrl] = useState(
    `${MEME_TEMPLATE_URL}/${DEFAULT_IMAGE}.jpg`,
  );

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const topTexInputtValue = formData.get('top-text').replace(' ', '_');
    const bottomTextInputValue = formData.get('bottom-text').replace(' ', '_');
    const memeTemplateInputValue = formData.get('meme-template');

    let topText = '';
    let bottomText = '';
    let memeTemplate = `/${DEFAULT_IMAGE}`;

    if (typeof topTexInputtValue === 'string' && topTexInputtValue.length > 0) {
      topText = `/${topTexInputtValue}`;
    }

    if (
      typeof bottomTextInputValue === 'string' &&
      bottomTextInputValue.length > 0
    ) {
      bottomText = `/${bottomTextInputValue}`;
    }

    if (
      typeof memeTemplateInputValue === 'string' &&
      memeTemplateInputValue.length
    ) {
      memeTemplate = `/${memeTemplateInputValue}`;
    }

    setImageUrl(
      `${MEME_TEMPLATE_URL}${memeTemplate}${topText}${bottomText}.jpg`,
    );
  }

  return (
    <>
      <h1>Meme Generator</h1>
      <div className="meme-generator">
        <form className="meme-editor" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="top-text">Top text</label>
            <input id="top-text" name="top-text" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="bottom-text">Bottom text</label>
            <input id="bottom-text" name="bottom-text" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="meme-template">Meme template</label>
            <input id="meme-template" name="meme-template" />
          </div>

          <button data-test-id="generate-meme">Generate meme</button>
        </form>
        <MemeImage imageUrl={imageUrl} />
      </div>
    </>
  );
}

function MemeImage({ imageUrl }) {
  return (
    <div className="meme-wrapper">
      <img src={imageUrl} alt="Generated meme" data-test-id="meme-image" />
      <button
        onClick={() => {
          saveAs(imageUrl, 'meme');
        }}
      >
        Download
      </button>
    </div>
  );
}
