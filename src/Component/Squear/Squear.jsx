export default function Squear({ squearsOnClick, value }) {
  return (
    <button
      className=" w-32 h-20 border border-white-700 text-6xl font-bold"
      onClick={squearsOnClick}
    >
      {value}
    </button>
  );
}
