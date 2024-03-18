import { useProgress } from "@react-three/drei"

const CustomLoader = () => {
    const {progress} = useProgress();
    return (
        <div>
            {progress}
        </div>
    )
}

export default CustomLoader
