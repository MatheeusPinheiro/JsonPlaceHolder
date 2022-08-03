import { Link } from "react-router-dom";
import { Photo } from "../../types/Photo";


type Props = {
    item: Photo;
}

export const PhotoItem = ({ item }: Props) => {

    return (
        <div className="grid">
            <Link to={`/big/${item.id}`}>
                <img src={item.thumbnailUrl} alt="" />
            </Link>

        </div>
    );
}