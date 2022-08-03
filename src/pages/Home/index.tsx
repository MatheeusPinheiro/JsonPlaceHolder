import { useEffect, useState } from 'react';
import { api } from '../../api';
import { AlbumItem } from '../../components/AlbumsItem';
import { Album } from '../../types/Album';
import * as C from './styled';
export const Home = () => {

    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        loadAlbums();

    }, []);

    const loadAlbums = async () => {
        try {
            let json = await api.getAllAlbums();
            setLoading(true);
            setAlbums(json);
            console.log(albums);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <C.Container>
            <C.Area>
                <h1>Lista de Albuns</h1>
                {!loading &&
                    <div>Carregando...</div>
                }

                {loading &&
                    <>
                        {albums.map((item, index) => (
                            <AlbumItem key={index} item={item} />
                        ))}
                    </>
                }

            </C.Area>
        </C.Container>
    );
}