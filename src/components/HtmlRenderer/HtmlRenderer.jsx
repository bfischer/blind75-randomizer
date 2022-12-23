import Reach from 'react';

const HtmlRenderer = (props) => {
    let { htmlString } = props;

    let div = document.createElement('div');
    div.innerHTML = htmlString;

    let children = Array.from(div.children);

    console.log(div.children)

    let renderedChildren = children.map((child, index) => {
        switch(child.nodeName) {
            case 'DIV':
                return <div key={index}>{child.textContent}</div>
            case 'SPAN':
                return <span key={index}>{child.textContent}</span>
            case 'P':
                return <p key={index}>{child.textContent}</p>
            case 'B':
                return <b key={index}>{child.textContent}</b>
            case 'BR':
                return <br key={index} />
            case 'CODE':
                return <code key={index}>{child.textContent}</code>
            default:
                return null;
        }
    });

    return <>
        {renderedChildren}
    </>
}

export default HtmlRenderer;