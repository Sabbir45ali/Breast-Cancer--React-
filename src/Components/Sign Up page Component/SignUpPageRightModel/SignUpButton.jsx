const SignUpButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] rounded-lg"
    >
      {loading ? "Signing up..." : "Sign Up"}
    </button>
  );
};

export default SignUpButton;
