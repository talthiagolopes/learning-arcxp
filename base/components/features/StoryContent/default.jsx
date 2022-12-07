import React from 'react';
import { useFusionContext } from 'fusion:context';
import './default.scss'

const StoryContent = (props) => {
    const { globalContent } = useFusionContext();


    const parseElement = (element) => {
        const { type, content} = element;

        switch(type) {
            case 'text' : {
                return (
                    content ? <p key={ content }> { content } </p> : null
                )
            }
            case 'image' : {
                return (
                    <div>
                        <img src={ element.url } />
                    </div>
                )
            }
            default:
                return null;
        }
    }

    const renderArticle = () => {
        return globalContent.content_elements.map(element => parseElement(element));
    }

    return(
        <div>
                <h1>{ globalContent.headlines.basic }</h1>
                <i>{ globalContent.subheadlines.basic }</i>
                { renderArticle() }
        </div>
    )
}

export default StoryContent;