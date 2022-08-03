

import { Link } from 'react-router-dom';
import { Album } from '../../types/Album';
import * as C from './styled';
import './styles.css';
type Props = {
    item: Album;
}


export const AlbumItem = ({item}: Props) => {

  
   
    return(
        <C.Container>
          <Link to={`/album/${item.id}`} className="link">{item.title}</Link>
        </C.Container>
    );
}