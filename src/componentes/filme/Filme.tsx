import './Filme.css';

type FilmeProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Filme(props(FilmeProps)){
    return(
        <div className="filme_content">
            <img src="/barbie.png" alt=""/>
            <div className="texto_foto">
                <h1>Título</h1>
            <p className="sinopse">Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do 
            que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.</p>
            </div>
        </div>
    )
}