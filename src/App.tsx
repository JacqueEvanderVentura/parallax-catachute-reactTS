import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div style={{ background: "#000" }}>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          factor={2}
          speed={1}
          style={{
            backgroundImage:
              "url('https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/moon.png?raw=true')",
            backgroundSize: "cover",
            textAlign: 'center'
          }}
        ><h1>SCROLL DOWN ⇩ </h1></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          factor={4}
          speed={1}
          style={{
            backgroundImage:
              "url('https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/land.png?raw=true')",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.8, end: 5 }}
          speed={0.5}
          style={{ textAlign: "center" }}
        >
          <img
            src={
              "https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/cat.gif?raw=true"
            }
            alt=""
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
