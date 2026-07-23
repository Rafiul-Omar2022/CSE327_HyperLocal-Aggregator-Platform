export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center">
      <a className="flex-1 text-xl inline-block">Brand</a>
      <input type="text" placeholder="Search" className="input flex-1" />
      <div className="flex-1 flex justify-end items-center gap-1">
        <a href="" className="link">Login</a>
        <a href="" className="link">Signup</a>

        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
