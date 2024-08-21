type HeroProps = {
    id: number;
    name: string;
    available: boolean;
};

function HeroItem({ id, name, available }: HeroProps) {
    return (
      <li>
        {name} {available && <span>(Available)</span>}
      </li>
    );
};

export default HeroItem;
