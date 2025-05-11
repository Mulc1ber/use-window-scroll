import { useWindowScroll } from "../hooks";

export function UseWindowScroll() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="section">
      <div className="card">
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ x: 0, y: 0 })}>
          Scroll to start
        </button>
        <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        <button onClick={() => scrollTo({ x: 0 })}>Scroll to left</button>
      </div>
    </div>
  );
}
