export default function Avatar({ onClick }: { onClick?: () => void}) {

    const photo = null;
    const userName = "Eze";
    const userColor = "bg-green-400";
    
    return (
        <button onClick={onClick} className={`w-10 h-10 rounded-full bg ${userColor} flex items-center justify-center text-center text-white cursor-pointer`}>
            {photo ? <img src={photo} alt="User Avatar" /> : <p>{userName[0]}</p>}
        </button>
    );
}