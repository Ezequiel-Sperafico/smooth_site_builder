interface IButtonProps {
    label: string;
    onClick: () => void;
}


export default function Button({ label, onClick }: IButtonProps) {
    return (
        <button onClick={onClick} className="py-2 px-4 bg-secondary rounded-lg cursor-pointer border">{label}</button>
    );
}
