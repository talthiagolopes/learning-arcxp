import React, { useRef }  from 'react'
import IframeResizer from 'iframe-resizer-react'

const MyFrame = (props) => {

    const iframeRef = useRef(null)
    
    return (
        <div>
            <IframeResizer
                forwardRef={iframeRef}
                log
                src="http://anotherdomain.com/iframe.html"
                style={{ width: '1px', minWidth: '100%'}}
            />
        </div>
    )
}

export default MyFrame;