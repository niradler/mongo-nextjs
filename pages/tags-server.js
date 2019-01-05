const TagsServer = props => {

  return (
    <div>
      <p>Tags:{props.tags.length}</p>
    </div>
  );
};

TagsServer.getInitialProps = (props) => {
    try {
        return {tags:props.query.tags}
    } catch (error) {
       console.log(error);
        return {error:error.message}
    }
}

export default TagsServer