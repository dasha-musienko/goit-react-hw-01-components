export const theme = {
  colors: {
    primaryColor: "#969696",
    textColor: "#353535",
    backgroundColor: "#EAEAEA"
  },
  border: {
    borderValue: "1px solid #969696",
    borderRadius: "15px"
  },
  randomColor: () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`,
}