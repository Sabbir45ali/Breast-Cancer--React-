const SignUpButton = ({ loading = false }) => (
    <button
      type="submit"
      disabled={loading}
      className="w-full h-10 bg-pink-500 text-white rounded"
    >
      {loading ? "Signing Up..." : "Sign Up"}
    </button>
  );
  export default SignUpButton;
  