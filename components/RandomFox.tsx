// Generate a ramdom function between 1 and 123
const getRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image = `https://randomfox.ca/images/${getRandomNumber()}.jpg`
  return <img
    width="320"
    height="auto"
    src={image}
    className="mx-auto rounded-md bg-gray-300"
  />
}