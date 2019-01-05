import fetch from 'isomorphic-unfetch'

const TagsClient = props => {

    return (
        <div>
            <p>Tags:{props.tags.length}</p>
        </div>
    );
};

TagsClient.getInitialProps = async(props) => {
    try {
        const res = await fetch('http://localhost:3000/api/get-tags')
        const json = await res.json()
        return {tags: json.tags}
    } catch (error) {
        console.log(error);
        return {error: error.message}
    }
}

export default TagsClient