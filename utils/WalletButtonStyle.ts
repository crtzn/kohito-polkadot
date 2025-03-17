export const getButtonStyles = (
  variant: "primary" | "secondary" = "primary"
) => {
  const basedStyle = "px-7 py-3 rounded-full text-white";
  const variants = {
    primary: `${basedStyle} bg-[#FF2670] hover:bg-[#fd4884] hover:text-white`,
    secondary: `${basedStyle} bg-[#FF2670] hover:bg-[#fd4884] hover:text-white`,
  };
  return variants[variant];
};
