const SignInButton = ({ onClick, btnColor }) => (
  <button
    onClick={onClick}
    type="button"
    style={{ backgroundColor: btnColor }}
    className="w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300"
  >
    SIGN-IN
  </button>
);

export default SignInButton;
