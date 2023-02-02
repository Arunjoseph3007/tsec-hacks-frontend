export default function Hero() {
  return (
    <div
      style={{
        background: 'url("/house.jpg") no-repeat center center/cover',
        height: "90vh",
        width: "100%",
      }}
      className="px-20 flex"
    >
      <div>
        <h1 className="text-8xl text-white font-bold pt-32">
          Find your sweet
          <br /> home
        </h1>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}
