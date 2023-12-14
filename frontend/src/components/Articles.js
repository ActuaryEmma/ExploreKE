import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Articles = (props) =>{
    return (
        <div className="mt-2">
            <div style={{textAlign: 'left', padding:'0px 20px'}}>
                <Link to="/new-article" className="btn btn-primary">New Post <TfiWrite />
                </Link>
            </div>
            <hr/>
            {props.articles && props.articles.map(article =>{
                return (
                    <div key={article.id}>
                        <h2 className="text-primary"> {article.title} </h2>
                        <p> {article.body} </p>
                        <p> {article.postDate} </p>
                        <p> {article.author} </p>
                        <p> {article.comments} </p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Articles;