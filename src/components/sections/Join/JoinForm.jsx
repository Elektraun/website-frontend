const JoinForm = () => {
  return (
    <form className="mt-8 max-w-lg mx-auto flex flex-col md:flex-row gap-4">
      <input
        type="email"
        placeholder="ENTER YOUR UNYIELDING EMAIL"
        className="w-full px-6 py-4 bg-gray-800 text-white rounded-md"
      />
      <button type="submit">Enlist Now</button>
    </form>
  );
};

export default JoinForm;