import './HeroItem.css';

type HeroProps = {
    id: number;
    name: string;
    available: boolean;
    onToggleAvailability: (id: number) => void;
};

function HeroItem({ id, name, available, onToggleAvailability }: HeroProps) {
    return (
        <div
        className={`hero-item ${available ? 'available' : 'unavailable'}`}
        onClick={() => onToggleAvailability(id)}
    >
        <span className="hero-number">{id}.</span> 
        <span className="hero-name">{name}</span>
    </div>
    );
};

export default HeroItem;
