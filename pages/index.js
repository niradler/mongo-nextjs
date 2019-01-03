import fetch from 'isomorphic-unfetch'

const Index = props => {
    if (props.error) {
        console.log(props)
        return (
        <div>
            <h1>Error:</h1>
        <div>{props.error ? props.error : ""}</div>
        </div>)
    }
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
};

Index.getInitialProps = async(props) => {
    try {
        console.log(Object.getOwnPropertyNames(props))
        console.log(props.query)
        return {data:'Data'}
    } catch (error) {
       console.log(error);

        return {error:error.message}
    }
}

export default Index