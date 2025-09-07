const SignUpButton = ({ loading = false }) => (
    <button
      type="submit"
      disabled={loading}
      className="w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] justify-center shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300"
    >
      {loading ? "Signing Up..." : "Sign Up"}
    </button>
  );
  export default SignUpButton;
  