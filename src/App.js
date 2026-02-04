import { MemeGenerator } from './App.styles';

export default function App() {
  return (
    <MemeGenerator>
      <form>
        <div>
          <label htmlFor="top-text">Top text</label>
          <input id="top-text" name="top-text" />
        </div>

        <div>
          <label htmlFor="bottom-text">Bottom text</label>
          <input id="bottom-text" name="bottom-text" />
        </div>

        <div>
          <label htmlFor="meme-template">Meme template</label>
          <input id="meme-template" name="meme-template" />
        </div>

        <button data-test-id="generate-meme">Generate meme</button>
      </form>
    </MemeGenerator>
  );
}
