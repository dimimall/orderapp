import { useParams } from 'react-router-dom'

const ParamsComponent = () => {
	const params = useParams()
    
    return <span>Params is: </span>
}

export default ParamsComponent