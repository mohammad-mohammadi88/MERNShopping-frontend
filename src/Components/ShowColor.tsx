interface ColorProps {
    backgroundColor: `#${string}`;
}
const ShowColor = ({ backgroundColor }: ColorProps) => (
    <div style={{ backgroundColor }} className="size-5 rounded-full" />
);

export default ShowColor;
