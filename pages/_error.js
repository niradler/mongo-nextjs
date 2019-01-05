import Link from 'next/link'
const ErrorPage = () => {

  return (
    <div>
        <h1>Error Page</h1>
     <Link  href={{ pathname: '/' }}>
     <a>go back</a>
     </Link>
    </div>
  );
};


export default ErrorPage