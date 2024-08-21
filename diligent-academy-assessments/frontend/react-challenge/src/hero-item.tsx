type HeroProps = {
    id: number;
    name: string;
    available: boolean;
    onToggleAvailability: (id: number) => void;
};

function HeroItem({ id, name, available, onToggleAvailability }: HeroProps) {
    return (
      <li onClick={() => onToggleAvailability(id)} style={{ cursor: 'pointer' }}>
        {name} {available ? <span>(Available)</span> : <span>(Unavailable)</span>}
      </li>
    );
};

export default HeroItem;
