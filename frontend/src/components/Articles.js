import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Delete from './Delete';

const Articles = (props) =>{
    const handleArticleDelete = async (id) => {
        try{
            const response = await fetch('/article/${id}', {
                method: 'Delete',
            })
            if (response === 200) {
                props.onArticleDelete(id);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
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
                        <div>
                        <Delete id={article.id} title={article.title} body={article.body} onDelete={() => handleArticleDelete(article.id)} />
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Articles;