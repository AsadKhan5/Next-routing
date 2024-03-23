const DrinkLayout = ({ children }) => {
  return (
    <div className="mx-w-xl">
      <div className="mockup-code mb-8 max-w-lg">
        <pre data-prefix="$">
          <code>npm create-react-app@latest tutorial by asad khan</code>
        </pre>
      </div>
      {children}
    </div>
  );
};
export default DrinkLayout;
