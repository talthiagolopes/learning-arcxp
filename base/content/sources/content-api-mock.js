import { CONTENT } from '../../helpers/sample-content';

const params = {
    'website_url': ''
}

const schemaName = 'article';

const fetch = (query = {}) => {
 return CONTENT;
};

export default {
    fetch,
    params,
    schemaName
}
