import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { Botao } from "../../components/Botao";
import { PhotoItem } from "../../components/PhotoItem";
import { Album } from "../../types/Album";
import { Photo } from "../../types/Photo";
import './styles.css';




export const BigPhoto = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [bigPhoto, setBigPhoto] = useState<Photo> ();
    const [albumInfo, setAlbumInfo] = useState<Album[]>([{
        id: 0, userId: 0, title: ''
    }]);

    const params = useParams();


    useEffect(()=> {
        if(params.id){
            loadBigPhoto(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);


    const loadBigPhoto = async (id: string) => {
        setLoading(true);
        let big = await api.getPhoto(id);
        setBigPhoto(big);
        setLoading(false)
    }

    const loadAlbumInfo = async (id: string) => {
        let album = await api.getAlbum(id);
        setAlbumInfo(album);
    }

    return(
        <div className="photo">
             <h1>{bigPhoto?.title}</h1>
            <Botao />
           
        <div className="area">
            
           <img src={`${bigPhoto?.thumbnailUrl}`} />
        </div>
           
        </div>
    );
}