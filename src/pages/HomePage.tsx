import { ColorMode } from "../components/ui/ThemeProvider";

const HomePage = () => {
  return (
    <div>
      <input type="text" placeholder="Hello world" />
      <ColorMode />
      <button className="btn">
        <span>
          Click me
        </span>
      </button>
    </div>
  );
};

export default HomePage;
