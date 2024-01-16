import React from "react";

const defaultValue: "mobile" | "desktop" = "mobile";

const ScreenContext = React.createContext<"mobile" | "desktop">(defaultValue);

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [screen, setScreen] = React.useState<"mobile" | "desktop">("mobile");

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1536) {
        setScreen("desktop");
      } else {
        setScreen("mobile");
      }
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    console.log("screen is ", screen);
  }, [screen]);

  return (
    <ScreenContext.Provider value={screen}>{children}</ScreenContext.Provider>
  );
};

export const useScreenSize = () => {
  return React.useContext(ScreenContext);
};
export default ScreenWrapper;
