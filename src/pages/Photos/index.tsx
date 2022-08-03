
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api';
import { Botao } from '../../components/Botao';
import { PhotoItem } from '../../components/PhotoItem';
import { Album } from '../../types/Album';
import { Photo } from '../../types/Photo';
import * as C from './styled';

export const Photos = () => {

    const [photo, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [albumInfo, setAlbumInfo] = useState<Album[]>([{
        id: 0, userId: 0, title: ''
    }]);

    const navigate = useNavigate();
    const params = useParams();


    const laodPhotos = async (id: string) => {
        setLoading(true);
        let photo = await api.getPhotoFromAlbum(id);
        setPhotos(photo);
        setLoading(false);
    }

    const loadAlbumInfo = async (id: string) => {
        let album = await api.getAlbum(id);
        setAlbumInfo(album);
    }

    useEffect(() => {
        if (params.id) {
            loadAlbumInfo(params.id);
            laodPhotos(params.id);
        }
    }, []);

    return (
        <C.Container>
            <C.Title>
                Album de foto {params.id}
            </C.Title>
            <Botao />
            <C.Area>
                {loading && "carregando...."}
                {photo.map((item, index) => (
                    <PhotoItem key={index} item={item} />
                ))}

            </C.Area>
        </C.Container>
    );
}