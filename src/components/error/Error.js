const Error = (props) => {
    const { error } = props;

    return (
        <div className='errorContainer'>
            {error}
        </div>
    )
}

export default Error;